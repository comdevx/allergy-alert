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

  // Footer / status
  disclaimer: '이 정보는 예비 평가일 뿐 의학적 진단이 아닙니다. 증상이 심하면 의사의 진료를 받으세요.',
  sourceCredit: '날씨 및 대기질 데이터 제공:',
  staleNotice: '{time}의 마지막 데이터를 표시 중 — 연결할 수 없습니다',
  errorTitle: '문제가 발생했습니다',
  errorMsg: '데이터를 불러오지 못했습니다. 연결 상태를 확인해 주세요.',
  retry: '다시 시도',
  langLabel: '언어'
};
