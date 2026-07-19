// Korean — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: '알레르기 알림',
  appSubtitle: '급격한 날씨 변화로 인한 알레르기 비염 위험 안내',
  refresh: '새로고침',
  loading: '불러오는 중…',
  updatedAt: '{time} 업데이트',
  addArea: '+ 지역 추가',
  currentLocation: '현재 위치',
  myAreas: '내 지역',

  // Location picker
  pickerMsg: '위치를 확인할 수 없습니다. 지역을 선택해 주세요.',
  pickerTitle: '지역 선택',
  confirm: '확인',
  cancel: '취소',
  useGps: '현재 위치 사용',
  removeArea: '지역 삭제',

  // Risk banner
  riskBannerLabel: '오늘의 알레르기 위험도',
  levelLow: '낮음',
  levelMed: '보통',
  levelHigh: '높음',
  levelVhigh: '매우 높음',

  // Banner reasons
  reasonTemp: '24시간 동안 기온이 {n}°C 변동',
  reasonAir: 'PM2.5 높음',
  reasonHumidity: '습도 이상',
  reasonPollen: '꽃가루 많음',
  reasonJoin: ', ',
  reasonNone: '날씨가 안정적입니다',

  // Factor cards
  factorsHeading: '위험 요인',
  factorTemp: '기온 변화 (24시간)',
  factorHumidity: '상대 습도',
  factorAir: 'PM2.5',
  factorPollen: '꽃가루',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: '정상',
  grade1: '주의',
  grade2: '높음',
  grade3: '매우 높음',
  gradeNoData: '데이터 없음',
  gradeExcluded: '점수에 미포함',
  noPollenData: '이 지역의 꽃가루 데이터가 없습니다',
  insufficientData: '데이터 부족',

  // 7-day forecast
  daysHeading: '7일 위험도 예보',
  today: '오늘',
  tomorrow: '내일',

  // Temperature outlook
  outlookHeading: '향후 24시간 기온 추이',
  outlookNote: '{time}쯤 최대 {n}°C 변동이 예상됩니다',

  // Advice
  adviceHeading: '권장 사항',
  adviceLow: [
    '날씨가 좋습니다 — 즐거운 하루 보내세요',
    '만일에 대비해 평소 복용하는 알레르기 약을 챙겨 두세요'
  ],
  adviceMed: [
    '장시간 야외 활동 시 마스크를 착용하세요',
    '항히스타민제를 휴대하세요',
    '재채기, 콧물 등 초기 증상에 주의하세요'
  ],
  adviceHigh: [
    '야외에서는 N95 마스크를 착용하세요',
    '창문을 닫고 공기청정기가 있다면 사용하세요',
    '항히스타민제를 휴대하세요',
    '귀가 후 식염수로 코를 세척하세요'
  ],
  adviceVhigh: [
    '가급적 실내에 머무르세요',
    '외출할 때는 항상 N95 마스크를 착용하세요',
    '창문을 닫고 공기청정기가 있다면 사용하세요',
    '항히스타민제를 휴대하고 용법에 따라 복용하세요',
    '귀가 후 식염수로 코를 세척하세요',
    '증상이 심하거나 호흡이 곤란하면 병원 진료를 받으세요'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: '기온 변동이 큽니다 — 옷을 겹쳐 입고 냉방 공간을 자주 드나들지 마세요',
  adviceHumidityHigh: '습도가 높습니다 — 집안의 곰팡이와 집먼지진드기에 주의하세요',
  adviceHumidityLow: '습도가 낮습니다 — 건조한 공기가 코를 자극할 수 있으니 물을 충분히 마시세요',
  adviceAir: 'PM2.5 농도가 높습니다 — N95 마스크를 착용하고 야외 운동을 피하세요',
  advicePollen: '꽃가루가 많습니다 — 창문을 닫고 귀가 후 샤워하세요',

  // About / education
  aboutHeading: '날씨 알레르기란?',
  aboutIntro: '알레르기 비염은 코 안의 점막이 공기 중의 자극 — 먼지, 꽃가루, 심지어 날씨 그 자체 — 에 과민하게 반응해 재채기, 콧물이나 코막힘, 눈 가려움과 눈물이 생기는 질환입니다. 흔히 말하는 "날씨 알레르기"에는 알레르겐이 전혀 없어도 기온이나 습도의 변화만으로 코의 과민한 신경과 혈관이 자극되는 비알레르기성(혈관운동성) 비염도 포함됩니다.',
  aboutWhyHeading: '갑작스러운 날씨 변화가 왜 증상을 일으킬까요?',
  aboutWhyBody: '코는 우리 몸의 에어컨과 같습니다. 코 점막은 숨 쉴 때마다 공기를 데우고 가습해 폐로 보냅니다. 서늘한 아침이 더운 오후로 바뀌거나 냉방 공간을 자주 드나드는 등 환경이 급격히 변하면, 과민한 점막은 과도하게 반응합니다. 혈관이 확장되고 조직이 부으며 콧물이 많이 분비됩니다. 그래서 코막힘, 재채기, 콧물이 생기는 것입니다.',
  aboutTempTitle: '급격한 기온 변화',
  aboutTempBody: '기온이 빠르게 오르내리면 코 점막의 신경이 직접 자극됩니다. 혈관이 확장되고 점막이 부어, 알레르겐이 전혀 없어도 콧물이 나거나 코가 막힙니다.',
  aboutHumidityTitle: '습도',
  aboutHumidityBody: '습도가 매우 높으면 가장 흔한 알레르겐인 집먼지진드기와 곰팡이가 번식하기 좋습니다. 반대로 공기가 너무 건조하면 코 점막이 말라 자극에 약해지고 증상이 쉽게 유발됩니다.',
  aboutAirTitle: '초미세먼지 PM2.5',
  aboutAirBody: '이렇게 작은 입자는 코의 필터를 통과해 기도 점막에 염증을 일으킵니다. 염증이 생긴 코는 더욱 예민해져, 먼지가 많은 날에는 알레르기 증상이 더 쉽게 악화되고 오래갑니다.',
  aboutPollenTitle: '꽃가루',
  aboutPollenBody: '잔디, 잡초, 나무의 꽃가루는 흔한 알레르겐입니다. 알레르기가 있는 사람의 면역체계는 꽃가루를 위협으로 오인해 히스타민을 분비하는데, 이것이 재채기, 가려움, 콧물의 원인 물질입니다.',
  aboutOutro: '이 네 가지 유발 요인이 바로 이 앱이 추적하는 네 가지 위험 요인입니다. 위험을 미리 확인하고 대비하세요.',

  // Footer / status
  disclaimer: '이 정보는 예비 평가일 뿐 의학적 진단이 아닙니다. 증상이 심하면 의사의 진료를 받으세요.',
  sourceCredit: '날씨 및 대기질 데이터 제공:',
  staleNotice: '{time}의 마지막 데이터를 표시 중 — 연결할 수 없습니다',
  errorTitle: '문제가 발생했습니다',
  errorMsg: '데이터를 불러오지 못했습니다. 연결 상태를 확인해 주세요.',
  retry: '다시 시도',
  langLabel: '언어',

  // Share
  shareResult: '결과 공유',
  copyLink: '링크 복사',
  linkCopied: '링크가 복사되었습니다',
  copyFailed: '복사할 수 없습니다'
};
