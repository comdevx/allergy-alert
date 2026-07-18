// Arabic (Modern Standard) — key set must match en.js (canonical) exactly.
// The app sets RTL at the document level; values are plain strings.
export default {
  // Header / app chrome
  appTitle: 'تنبيه الحساسية',
  appSubtitle: 'خطر الحساسية بسبب التغيرات الجوية المفاجئة',
  refresh: 'تحديث',
  loading: 'جارٍ التحميل…',
  updatedAt: 'آخر تحديث {time}',
  addArea: '+ إضافة منطقة',
  currentLocation: 'الموقع الحالي',
  myAreas: 'مناطقي',

  // Location picker
  pickerMsg: 'تعذّر تحديد موقعك. يرجى اختيار المحافظة.',
  pickerTitle: 'اختر المحافظة',
  confirm: 'تأكيد',
  cancel: 'إلغاء',
  useGps: 'استخدام موقعي',
  removeArea: 'إزالة المنطقة',

  // Risk banner
  riskBannerLabel: 'خطر الحساسية اليوم',
  levelLow: 'منخفض',
  levelMed: 'متوسط',
  levelHigh: 'مرتفع',
  levelVhigh: 'مرتفع جدًا',

  // Banner reasons
  reasonTemp: 'تغيّر في درجة الحرارة بمقدار {n}°C خلال 24 ساعة',
  reasonAir: 'ارتفاع PM2.5',
  reasonHumidity: 'رطوبة غير معتادة',
  reasonPollen: 'ارتفاع حبوب اللقاح',
  reasonJoin: ' و',
  reasonNone: 'الأحوال الجوية مستقرة',

  // Factor cards
  factorsHeading: 'عوامل الخطر',
  factorTemp: 'تغيّر درجة الحرارة (24 ساعة)',
  factorHumidity: 'الرطوبة النسبية',
  factorAir: 'PM2.5',
  factorPollen: 'حبوب اللقاح',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'طبيعي',
  grade1: 'مراقبة',
  grade2: 'مرتفع',
  grade3: 'مرتفع جدًا',
  gradeNoData: 'لا توجد بيانات',
  gradeExcluded: 'غير مشمول في التقييم',
  noPollenData: 'لا توجد بيانات لحبوب اللقاح في هذه المنطقة',
  insufficientData: 'بيانات غير كافية',

  // 7-day forecast
  daysHeading: 'توقعات الخطر لسبعة أيام',
  today: 'اليوم',
  tomorrow: 'غدًا',

  // Temperature outlook
  outlookHeading: 'اتجاه درجة الحرارة خلال الـ 24 ساعة القادمة',
  outlookNote: 'يُتوقع أكبر تغيّر بمقدار {n}°C حوالي {time}',

  // Advice
  adviceHeading: 'نصائح',
  adviceLow: [
    'الأحوال الجوية جيدة — استمتع بيومك',
    'احتفظ بدواء الحساسية المعتاد معك احتياطًا'
  ],
  adviceMed: [
    'ارتدِ كمامة إذا كنت في الخارج لفترات طويلة',
    'احمل معك مضاد الهيستامين',
    'انتبه للأعراض المبكرة مثل العطاس وسيلان الأنف'
  ],
  adviceHigh: [
    'ارتدِ كمامة N95 عند الخروج',
    'أغلق النوافذ واستخدم منقي الهواء إن وُجد',
    'احمل معك مضاد الهيستامين',
    'اغسل أنفك بمحلول ملحي بعد العودة إلى المنزل'
  ],
  adviceVhigh: [
    'ابقَ في الداخل قدر الإمكان',
    'ارتدِ كمامة N95 كلما خرجت',
    'أغلق النوافذ واستخدم منقي الهواء إن وُجد',
    'احمل معك مضاد الهيستامين وتناوله حسب الإرشادات',
    'اغسل أنفك بمحلول ملحي بعد العودة إلى المنزل',
    'راجع الطبيب إذا كانت الأعراض شديدة أو صعُب التنفس'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'تقلبات كبيرة في درجة الحرارة — ارتدِ طبقات من الملابس وتجنّب كثرة الدخول والخروج من الأماكن المكيفة',
  adviceHumidityHigh: 'رطوبة مرتفعة — احذر العفن وعث الغبار في المنزل',
  adviceHumidityLow: 'رطوبة منخفضة — الهواء الجاف قد يهيّج الأنف؛ اشرب كمية كافية من الماء',
  adviceAir: 'ارتفاع PM2.5 — ارتدِ كمامة N95 وتجنّب التمارين في الهواء الطلق',
  advicePollen: 'ارتفاع حبوب اللقاح — أبقِ النوافذ مغلقة واستحم عند العودة إلى المنزل',

  // Footer / status
  disclaimer: 'هذا تقييم أولي فقط وليس تشخيصًا طبيًا. إذا كانت الأعراض شديدة فيرجى مراجعة الطبيب.',
  sourceCredit: 'بيانات الطقس وجودة الهواء من',
  staleNotice: 'عرض آخر بيانات من {time} — تعذّر الاتصال',
  errorTitle: 'حدث خطأ ما',
  errorMsg: 'تعذّر تحميل البيانات. تحقق من اتصالك.',
  retry: 'إعادة المحاولة',
  langLabel: 'اللغة'
};
