// Simplified Chinese — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: '过敏预警',
  appSubtitle: '天气骤变引发的过敏性鼻炎风险评估',
  refresh: '刷新',
  loading: '加载中…',
  updatedAt: '更新于 {time}',
  addArea: '+ 添加地区',
  currentLocation: '当前位置',
  myAreas: '我的地区',

  // Location picker
  pickerMsg: '无法获取您的位置，请选择省份。',
  pickerTitle: '选择省份',
  confirm: '确定',
  cancel: '取消',
  useGps: '使用当前位置',
  removeArea: '删除地区',

  // Risk banner
  riskBannerLabel: '今日过敏风险',
  levelLow: '低',
  levelMed: '中等',
  levelHigh: '高',
  levelVhigh: '极高',

  // Banner reasons
  reasonTemp: '24小时内温差达 {n}°C',
  reasonAir: 'PM2.5 偏高',
  reasonHumidity: '湿度异常',
  reasonPollen: '花粉浓度高',
  reasonJoin: '、',
  reasonNone: '天气状况稳定',

  // Factor cards
  factorsHeading: '风险因素',
  factorTemp: '温度变化（24小时）',
  factorHumidity: '相对湿度',
  factorAir: 'PM2.5',
  factorPollen: '花粉',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: '正常',
  grade1: '注意',
  grade2: '高',
  grade3: '极高',
  gradeNoData: '暂无数据',
  gradeExcluded: '不计入评分',
  noPollenData: '该地区暂无花粉数据',
  insufficientData: '数据不足',

  // 7-day forecast
  daysHeading: '未来7天风险预报',
  today: '今天',
  tomorrow: '明天',

  // Temperature outlook
  outlookHeading: '未来24小时气温趋势',
  outlookNote: '预计 {time} 前后出现最大温差 {n}°C',

  // Advice
  adviceHeading: '建议',
  adviceLow: [
    '天气状况良好——尽情享受您的一天',
    '以防万一，随身携带常用的抗过敏药'
  ],
  adviceMed: [
    '长时间在户外时请佩戴口罩',
    '随身携带抗组胺药',
    '留意打喷嚏、流鼻涕等早期症状'
  ],
  adviceHigh: [
    '户外活动时佩戴 N95 口罩',
    '关闭门窗，如有空气净化器请开启',
    '随身携带抗组胺药',
    '回家后用生理盐水冲洗鼻腔'
  ],
  adviceVhigh: [
    '尽量留在室内',
    '外出时务必佩戴 N95 口罩',
    '关闭门窗，如有空气净化器请开启',
    '随身携带抗组胺药并按说明服用',
    '回家后用生理盐水冲洗鼻腔',
    '若症状严重或呼吸困难，请及时就医'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: '温差较大——注意增减衣物，避免频繁进出空调房',
  adviceHumidityHigh: '湿度偏高——注意家中的霉菌和尘螨',
  adviceHumidityLow: '湿度偏低——空气干燥易刺激鼻腔，请多喝水',
  adviceAir: 'PM2.5 偏高——佩戴 N95 口罩，避免户外运动',
  advicePollen: '花粉浓度高——关闭门窗，回家后及时洗澡',

  // About / education
  aboutHeading: '什么是天气过敏？',
  aboutIntro: '过敏性鼻炎是指鼻腔黏膜对空气中的刺激物——灰尘、花粉，甚至天气本身——反应过度的一种疾病，会引起打喷嚏、流鼻涕或鼻塞、眼睛发痒流泪。人们常说的“天气过敏”还包括非过敏性（血管运动性）鼻炎：仅仅是温度或湿度的变化——完全没有过敏原——就足以刺激鼻腔内过于敏感的神经和血管。',
  aboutWhyHeading: '为什么天气骤变会诱发症状？',
  aboutWhyBody: '鼻子就像人体的空调：鼻腔黏膜会在每一次吸入的空气到达肺部之前为其加温加湿。当环境变化过快——凉爽的早晨转为炎热的午后，或频繁进出空调房——过于敏感的黏膜就会反应过度：血管扩张、组织肿胀，并大量分泌鼻涕。这就是鼻塞、打喷嚏和流鼻涕的原因。',
  aboutTempTitle: '温度骤变',
  aboutTempBody: '温度的快速升降会直接刺激鼻腔黏膜中的神经。血管扩张、黏膜肿胀，于是流鼻涕或鼻塞——即使完全没有过敏原参与。',
  aboutHumidityTitle: '湿度',
  aboutHumidityBody: '过于潮湿的空气有利于尘螨和霉菌繁殖——它们是最常见的过敏原之一。过于干燥的空气则会使鼻腔黏膜变干、受刺激，更容易被诱发因素侵袭。',
  aboutAirTitle: 'PM2.5 细颗粒物',
  aboutAirBody: '如此细小的颗粒能穿过鼻腔的过滤屏障，使呼吸道黏膜发炎。发炎的鼻子更加敏感，因此在灰尘多的日子里，过敏症状更容易发作且持续更久。',
  aboutPollenTitle: '花粉',
  aboutPollenBody: '禾草、杂草和树木的花粉是常见的过敏原。在过敏人群中，免疫系统会把它误认为威胁并释放组胺——正是这种物质导致打喷嚏、瘙痒和流鼻涕。',
  aboutOutro: '这四种诱因正是本应用追踪的四项风险因素，帮助您提前了解风险、做好准备。',

  // Footer / status
  disclaimer: '本信息仅为初步评估，不构成医学诊断。如症状严重，请及时就医。',
  sourceCredit: '天气与空气质量数据来自',
  staleNotice: '正在显示 {time} 的最后数据——无法连接',
  errorTitle: '出错了',
  errorMsg: '无法加载数据，请检查网络连接。',
  retry: '重试',
  langLabel: '语言',

  // Share
  shareResult: '分享结果',
  copyLink: '复制链接',
  linkCopied: '链接已复制',
  copyFailed: '无法复制',
  shareTitle: '查看天气过敏风险',
  shareText: '今日天气过敏风险：{level} — {reasons}\n查看你所在地区'
};
