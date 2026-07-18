// Hindi — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: 'एलर्जी अलर्ट',
  appSubtitle: 'मौसम में अचानक बदलाव से एलर्जी का जोखिम',
  refresh: 'रिफ्रेश',
  loading: 'लोड हो रहा है…',
  updatedAt: '{time} पर अपडेट किया गया',
  addArea: '+ क्षेत्र जोड़ें',
  currentLocation: 'वर्तमान स्थान',
  myAreas: 'मेरे क्षेत्र',

  // Location picker
  pickerMsg: 'आपका स्थान पता नहीं चल सका। कृपया एक प्रांत चुनें।',
  pickerTitle: 'प्रांत चुनें',
  confirm: 'पुष्टि करें',
  cancel: 'रद्द करें',
  useGps: 'मेरा स्थान इस्तेमाल करें',
  removeArea: 'क्षेत्र हटाएँ',

  // Risk banner
  riskBannerLabel: 'आज एलर्जी का जोखिम',
  levelLow: 'कम',
  levelMed: 'मध्यम',
  levelHigh: 'अधिक',
  levelVhigh: 'बहुत अधिक',

  // Banner reasons
  reasonTemp: '24 घंटे में तापमान में {n}°C का उतार-चढ़ाव',
  reasonAir: 'PM2.5 अधिक',
  reasonHumidity: 'असामान्य नमी',
  reasonPollen: 'पराग अधिक',
  reasonJoin: ' और ',
  reasonNone: 'मौसम स्थिर है',

  // Factor cards
  factorsHeading: 'जोखिम कारक',
  factorTemp: 'तापमान में बदलाव (24 घंटे)',
  factorHumidity: 'सापेक्ष आर्द्रता',
  factorAir: 'PM2.5',
  factorPollen: 'पराग',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'सामान्य',
  grade1: 'सतर्क रहें',
  grade2: 'अधिक',
  grade3: 'बहुत अधिक',
  gradeNoData: 'डेटा उपलब्ध नहीं',
  gradeExcluded: 'स्कोर में शामिल नहीं',
  noPollenData: 'इस क्षेत्र के लिए पराग डेटा उपलब्ध नहीं',
  insufficientData: 'पर्याप्त डेटा नहीं',

  // 7-day forecast
  daysHeading: '7 दिन का जोखिम पूर्वानुमान',
  today: 'आज',
  tomorrow: 'कल',

  // Temperature outlook
  outlookHeading: 'अगले 24 घंटे का तापमान रुझान',
  outlookNote: 'लगभग {time} के आसपास सबसे बड़ा बदलाव {n}°C होने की संभावना',

  // Advice
  adviceHeading: 'सलाह',
  adviceLow: [
    'मौसम अच्छा है — अपने दिन का आनंद लें',
    'एहतियात के तौर पर अपनी नियमित एलर्जी की दवा साथ रखें'
  ],
  adviceMed: [
    'लंबे समय तक बाहर रहें तो मास्क पहनें',
    'एंटीहिस्टामिन दवा साथ रखें',
    'छींक या नाक बहने जैसे शुरुआती लक्षणों पर ध्यान दें'
  ],
  adviceHigh: [
    'बाहर N95 मास्क पहनें',
    'खिड़कियाँ बंद रखें और एयर प्यूरीफायर हो तो चलाएँ',
    'एंटीहिस्टामिन दवा साथ रखें',
    'घर लौटने पर नमक के पानी (सेलाइन) से नाक धोएँ'
  ],
  adviceVhigh: [
    'जहाँ तक हो सके घर के अंदर रहें',
    'बाहर निकलते समय हमेशा N95 मास्क पहनें',
    'खिड़कियाँ बंद रखें और एयर प्यूरीफायर हो तो चलाएँ',
    'एंटीहिस्टामिन दवा साथ रखें और निर्देशानुसार लें',
    'घर लौटने पर नमक के पानी (सेलाइन) से नाक धोएँ',
    'लक्षण गंभीर हों या साँस लेने में तकलीफ हो तो डॉक्टर से मिलें'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'तापमान में बड़ा उतार-चढ़ाव — परतों में कपड़े पहनें और बार-बार AC कमरों में आने-जाने से बचें',
  adviceHumidityHigh: 'नमी अधिक है — घर में फफूंद और धूल के कण (डस्ट माइट) से सावधान रहें',
  adviceHumidityLow: 'नमी कम है — सूखी हवा नाक में जलन कर सकती है; खूब पानी पिएँ',
  adviceAir: 'PM2.5 अधिक है — N95 मास्क पहनें और बाहर व्यायाम करने से बचें',
  advicePollen: 'पराग अधिक है — खिड़कियाँ बंद रखें और घर लौटकर नहा लें',

  // Footer / status
  disclaimer: 'यह केवल एक प्रारंभिक आकलन है, चिकित्सकीय निदान नहीं। लक्षण गंभीर हों तो कृपया डॉक्टर से मिलें।',
  sourceCredit: 'मौसम और वायु गुणवत्ता डेटा स्रोत:',
  staleNotice: '{time} का अंतिम डेटा दिखाया जा रहा है — कनेक्ट नहीं हो पा रहा',
  errorTitle: 'कुछ गड़बड़ हो गई',
  errorMsg: 'डेटा लोड नहीं हो सका। अपना कनेक्शन जाँचें।',
  retry: 'फिर कोशिश करें',
  langLabel: 'भाषा'
};
