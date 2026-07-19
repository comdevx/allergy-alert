// share.js — share card generation and Web Share / clipboard integration.

import { t } from './i18n.js';

let getShareData = null;

const RISK_COLORS = {
  low: '#2f8f5b',
  med: '#d9a50f',
  high: '#e07b12',
  vhigh: '#cf3b2e',
};

function createCanvas() {
  const W = 1200, H = 630;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, '#18404d');
  grad.addColorStop(0.5, '#1f7a8c');
  grad.addColorStop(1, '#2a9ab0');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  return { canvas, ctx, W, H };
}

function drawCard(data) {
  const { canvas, ctx, W, H } = createCanvas();
  const { level, levelText, locationName, reasons, factors } = data;

  // App name
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '600 20px system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('ALLERGY ALERT', 60, 60);

  // Location
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 28px system-ui, sans-serif';
  ctx.fillText(locationName, 60, 110);

  // Risk level
  ctx.font = '800 72px system-ui, sans-serif';
  ctx.fillText(levelText, 60, 200);

  // Reasons
  if (reasons) {
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = '400 24px system-ui, sans-serif';
    ctx.fillText(reasons, 60, 240);
  }

  // Risk dot
  const dotR = 40;
  const dotX = W - 100;
  const dotY = 80;
  ctx.fillStyle = RISK_COLORS[level] || RISK_COLORS.med;
  ctx.beginPath();
  ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
  ctx.fill();

  // Factor cards area
  const cardY = 340;
  const cardH = 200;
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.beginPath();
  ctx.roundRect(40, cardY, W - 80, cardH, 16);
  ctx.fill();

  // Factor values
  const factorList = [];
  if (factors.tempDelta !== null && factors.tempDelta !== undefined) {
    factorList.push({ label: String(t('factorTemp')).replace(/ \(.*\)/, ''), value: `${factors.tempDelta.toFixed(1)}°C` });
  }
  if (factors.rh !== null && factors.rh !== undefined) {
    factorList.push({ label: String(t('factorHumidity')), value: `${Math.round(factors.rh)}%` });
  }
  if (factors.pm25 !== null && factors.pm25 !== undefined) {
    factorList.push({ label: 'PM2.5', value: `${Math.round(factors.pm25)} µg/m³` });
  }
  if (factors.pollenMax !== null && factors.pollenMax !== undefined) {
    factorList.push({ label: String(t('factorPollen')), value: String(Math.round(factors.pollenMax)) });
  }

  if (factorList.length) {
    const colW = (W - 80) / factorList.length;
    factorList.forEach((f, i) => {
      const cx = 40 + colW * i + colW / 2;
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = '400 20px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(f.label, cx, cardY + 50);

      ctx.fillStyle = '#ffffff';
      ctx.font = '700 36px system-ui, sans-serif';
      ctx.fillText(f.value, cx, cardY + 100);

      // Divider (except last)
      if (i < factorList.length - 1) {
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(40 + colW * (i + 1), cardY + 20);
        ctx.lineTo(40 + colW * (i + 1), cardY + cardH - 20);
        ctx.stroke();
      }
    });
  }

  // Footer
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '400 18px system-ui, sans-serif';
  ctx.fillText('allergyalert — ' + String(t('appSubtitle')), 60, H - 40);

  return canvas;
}

function canvasToBlob(canvas) {
  return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
}

function showToast(message) {
  let toast = document.querySelector('.share-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'share-toast';
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add('share-toast--visible');
  setTimeout(() => toast.classList.remove('share-toast--visible'), 2500);
}

async function handleShare() {
  if (!getShareData) return;
  const data = getShareData();
  if (!data) return;

  const canvas = drawCard(data);
  const blob = await canvasToBlob(canvas);
  const file = new File([blob], 'allergy-alert.png', { type: 'image/png' });

  const shareData = {
    title: `Allergy Alert — ${data.locationName}`,
    text: `${data.levelText} — ${data.reasons || ''}`,
    url: globalThis.location.href,
  };

  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    shareData.files = [file];
    try {
      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') {
        // Fallback: share without image
        delete shareData.files;
        try { await navigator.share(shareData); } catch {}
      }
    }
  } else if (navigator.share) {
    try { await navigator.share(shareData); } catch {}
  } else {
    // Desktop fallback: copy link
    await handleCopyLink();
  }
}

async function handleCopyLink() {
  try {
    await navigator.clipboard.writeText(globalThis.location.href);
    showToast(String(t('linkCopied')));
  } catch {
    showToast(String(t('copyFailed')));
  }
}

export function showShareBar() {
  const bar = document.getElementById('shareBar');
  if (bar) bar.hidden = false;
}

export function hideShareBar() {
  const bar = document.getElementById('shareBar');
  if (bar) bar.hidden = true;
}

export function initShare(dataFn) {
  getShareData = dataFn;
  const shareBtn = document.getElementById('shareBtn');
  const copyBtn = document.getElementById('copyLinkBtn');
  if (shareBtn) shareBtn.addEventListener('click', handleShare);
  if (copyBtn) copyBtn.addEventListener('click', handleCopyLink);
}
