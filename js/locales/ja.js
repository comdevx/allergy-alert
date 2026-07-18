// Japanese — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: 'アレルギーアラート',
  appSubtitle: '急な天気の変化によるアレルギー性鼻炎リスクをお知らせ',
  refresh: '更新',
  loading: '読み込み中…',
  updatedAt: '{time} 更新',
  addArea: '+ 地域を追加',
  currentLocation: '現在地',
  myAreas: 'マイエリア',

  // Location picker
  pickerMsg: '現在地を取得できませんでした。地域を選択してください。',
  pickerTitle: '地域を選択',
  confirm: '決定',
  cancel: 'キャンセル',
  useGps: '現在地を使う',
  removeArea: '地域を削除',

  // Risk banner
  riskBannerLabel: '今日のアレルギーリスク',
  levelLow: '低い',
  levelMed: '中程度',
  levelHigh: '高い',
  levelVhigh: '非常に高い',

  // Banner reasons
  reasonTemp: '24時間で {n}°C の気温変化',
  reasonAir: 'PM2.5 が高め',
  reasonHumidity: '湿度が普段と異なる',
  reasonPollen: '花粉が多い',
  reasonJoin: '、',
  reasonNone: '天候は安定しています',

  // Factor cards
  factorsHeading: 'リスク要因',
  factorTemp: '気温変化（24時間）',
  factorHumidity: '相対湿度',
  factorAir: 'PM2.5',
  factorPollen: '花粉',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: '正常',
  grade1: '注意',
  grade2: '高い',
  grade3: '非常に高い',
  gradeNoData: 'データなし',
  gradeExcluded: 'スコアに含まれません',
  noPollenData: 'この地域の花粉データはありません',
  insufficientData: 'データ不足',

  // 7-day forecast
  daysHeading: '7日間のリスク予報',
  today: '今日',
  tomorrow: '明日',

  // Temperature outlook
  outlookHeading: '今後24時間の気温の傾向',
  outlookNote: '{time} 頃に最大 {n}°C の変化が見込まれます',

  // Advice
  adviceHeading: 'アドバイス',
  adviceLow: [
    '天候は良好です — 快適にお過ごしください',
    '念のため、いつものアレルギー薬を持ち歩きましょう'
  ],
  adviceMed: [
    '長時間屋外にいるときはマスクを着用しましょう',
    '抗ヒスタミン薬を携帯しましょう',
    'くしゃみや鼻水など初期症状に注意しましょう'
  ],
  adviceHigh: [
    '屋外では N95 マスクを着用しましょう',
    '窓を閉め、空気清浄機があれば使いましょう',
    '抗ヒスタミン薬を携帯しましょう',
    '帰宅後は生理食塩水で鼻をすすぎましょう'
  ],
  adviceVhigh: [
    'できるだけ屋内で過ごしましょう',
    '外出時は必ず N95 マスクを着用しましょう',
    '窓を閉め、空気清浄機があれば使いましょう',
    '抗ヒスタミン薬を携帯し、用法どおりに服用しましょう',
    '帰宅後は生理食塩水で鼻をすすぎましょう',
    '症状が重い場合や呼吸が苦しい場合は医師の診察を受けてください'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: '気温差が大きめ — 重ね着で調節し、冷房の効いた部屋への出入りを控えめに',
  adviceHumidityHigh: '湿度が高め — 家のカビやダニに注意しましょう',
  adviceHumidityLow: '湿度が低め — 乾燥した空気は鼻を刺激します。水分をしっかり取りましょう',
  adviceAir: 'PM2.5 が高め — N95 マスクを着用し、屋外での運動は控えましょう',
  advicePollen: '花粉が多め — 窓を閉め、帰宅後はシャワーを浴びましょう',

  // Footer / status
  disclaimer: 'これはあくまで簡易的な目安であり、医学的な診断ではありません。症状が重い場合は医師にご相談ください。',
  sourceCredit: '気象・大気質データ提供：',
  staleNotice: '{time} 時点の最終データを表示中 — 接続できません',
  errorTitle: 'エラーが発生しました',
  errorMsg: 'データを読み込めませんでした。通信環境をご確認ください。',
  retry: '再試行',
  langLabel: '言語'
};
