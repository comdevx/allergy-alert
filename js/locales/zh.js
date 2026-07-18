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

  // Footer / status
  disclaimer: '本信息仅为初步评估，不构成医学诊断。如症状严重，请及时就医。',
  sourceCredit: '天气与空气质量数据来自',
  staleNotice: '正在显示 {time} 的最后数据——无法连接',
  errorTitle: '出错了',
  errorMsg: '无法加载数据，请检查网络连接。',
  retry: '重试',
  langLabel: '语言'
};
