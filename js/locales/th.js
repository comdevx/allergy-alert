// Thai — key set must match en.js (canonical) exactly.
// Strings mirror the approved mockup (docs/mockups/index.html) where they exist.
export default {
  // Header / app chrome
  appTitle: 'เตือนภูมิแพ้อากาศ',
  appSubtitle: 'ประเมินความเสี่ยงจากสภาพอากาศเปลี่ยนกระทันหัน',
  refresh: 'รีเฟรช',
  loading: 'กำลังโหลด…',
  updatedAt: 'อัปเดตล่าสุด {time}',
  addArea: '+ เพิ่มพื้นที่',
  currentLocation: 'ปัจจุบัน',
  myAreas: 'พื้นที่ของฉัน',

  // Location picker
  pickerMsg: 'ไม่สามารถระบุตำแหน่งของคุณได้ กรุณาเลือกจังหวัด',
  pickerTitle: 'เลือกจังหวัด',
  confirm: 'ตกลง',
  cancel: 'ยกเลิก',
  useGps: 'ใช้ตำแหน่งปัจจุบัน',
  removeArea: 'ลบพื้นที่',

  // Risk banner
  riskBannerLabel: 'ความเสี่ยงภูมิแพ้อากาศวันนี้',
  levelLow: 'ต่ำ',
  levelMed: 'ปานกลาง',
  levelHigh: 'สูง',
  levelVhigh: 'สูงมาก',

  // Banner reasons
  reasonTemp: 'อุณหภูมิเปลี่ยน {n}°C ใน 24 ชม.',
  reasonAir: 'ฝุ่น PM2.5 เกินมาตรฐาน',
  reasonHumidity: 'ความชื้นผิดปกติ',
  reasonPollen: 'ละอองเกสรสูง',
  reasonJoin: ' และ ',
  reasonNone: 'สภาพอากาศคงที่',

  // Factor cards
  factorsHeading: 'ปัจจัยเสี่ยง',
  factorTemp: 'อุณหภูมิเปลี่ยนแปลง (24 ชม.)',
  factorHumidity: 'ความชื้นสัมพัทธ์',
  factorAir: 'ฝุ่น PM2.5',
  factorPollen: 'ละอองเกสร',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'ปกติ',
  grade1: 'เฝ้าระวัง',
  grade2: 'สูง',
  grade3: 'สูงมาก',
  gradeNoData: 'ไม่มีข้อมูล',
  gradeExcluded: 'ไม่นำมาคำนวณ',
  noPollenData: 'ไม่มีข้อมูลในพื้นที่นี้',
  insufficientData: 'ข้อมูลไม่เพียงพอ',

  // 7-day forecast
  daysHeading: 'คาดการณ์ความเสี่ยง 7 วันข้างหน้า',
  today: 'วันนี้',
  tomorrow: 'พรุ่งนี้',

  // Temperature outlook
  outlookHeading: 'แนวโน้มอุณหภูมิ 24 ชม. ข้างหน้า',
  outlookNote: 'คาดว่าแกว่งสูงสุด {n}°C ช่วงประมาณ {time}',

  // Advice
  adviceLow: [
    'สภาพอากาศดี — ใช้ชีวิตได้ตามปกติ',
    'พกยาแก้แพ้ที่ใช้ประจำติดตัวไว้เผื่อจำเป็น'
  ],
  adviceMed: [
    'สวมหน้ากากเมื่ออยู่กลางแจ้งเป็นเวลานาน',
    'พกยาแก้แพ้ (antihistamine) ติดตัว',
    'สังเกตอาการเริ่มต้น เช่น จาม น้ำมูกไหล'
  ],
  adviceHigh: [
    'สวมหน้ากาก N95 เมื่ออยู่กลางแจ้ง',
    'ปิดหน้าต่างและใช้เครื่องฟอกอากาศถ้ามี',
    'พกยาแก้แพ้ (antihistamine) ติดตัว',
    'ล้างจมูกด้วยน้ำเกลือหลังกลับถึงบ้าน'
  ],
  adviceVhigh: [
    'หลีกเลี่ยงการออกนอกบ้านถ้าไม่จำเป็น',
    'สวมหน้ากาก N95 ทุกครั้งเมื่อออกนอกบ้าน',
    'ปิดหน้าต่างและใช้เครื่องฟอกอากาศถ้ามี',
    'พกยาแก้แพ้ (antihistamine) และใช้ตามคำแนะนำ',
    'ล้างจมูกด้วยน้ำเกลือหลังกลับถึงบ้าน',
    'หากอาการรุนแรงหรือหายใจลำบาก ควรพบแพทย์'
  ],
  adviceHeading: 'คำแนะนำ',

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'อุณหภูมิเปลี่ยนแปลงมาก — สวมเสื้อผ้าให้เหมาะสม หลีกเลี่ยงการเข้า-ออกห้องแอร์บ่อย ๆ',
  adviceHumidityHigh: 'ความชื้นสูง — ระวังเชื้อราและไรฝุ่นในบ้าน',
  adviceHumidityLow: 'ความชื้นต่ำ — อากาศแห้ง จมูกระคายเคืองง่าย ดื่มน้ำให้เพียงพอ',
  adviceAir: 'ฝุ่น PM2.5 สูง — สวมหน้ากาก N95 และหลีกเลี่ยงการออกกำลังกายกลางแจ้ง',
  advicePollen: 'ละอองเกสรสูง — ปิดหน้าต่างและอาบน้ำเปลี่ยนเสื้อผ้าเมื่อกลับถึงบ้าน',

  // Footer / status
  disclaimer: 'ข้อมูลนี้เป็นเพียงการประเมินเบื้องต้น ไม่ใช่คำวินิจฉัยทางการแพทย์ หากอาการรุนแรงควรพบแพทย์',
  sourceCredit: 'ข้อมูลสภาพอากาศและคุณภาพอากาศจาก',
  staleNotice: 'แสดงข้อมูลล่าสุดเมื่อ {time} — ไม่สามารถเชื่อมต่อได้',
  errorTitle: 'เกิดข้อผิดพลาด',
  errorMsg: 'โหลดข้อมูลไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อ',
  retry: 'ลองใหม่',
  langLabel: 'ภาษา'
};
