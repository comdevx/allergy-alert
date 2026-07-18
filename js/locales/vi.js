// Vietnamese — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: 'Cảnh báo dị ứng',
  appSubtitle: 'Nguy cơ viêm mũi dị ứng do thời tiết thay đổi đột ngột',
  refresh: 'Làm mới',
  loading: 'Đang tải…',
  updatedAt: 'Cập nhật lúc {time}',
  addArea: '+ Thêm khu vực',
  currentLocation: 'Vị trí hiện tại',
  myAreas: 'Khu vực của tôi',

  // Location picker
  pickerMsg: 'Không xác định được vị trí của bạn. Vui lòng chọn tỉnh/thành.',
  pickerTitle: 'Chọn tỉnh/thành',
  confirm: 'Xác nhận',
  cancel: 'Hủy',
  useGps: 'Dùng vị trí của tôi',
  removeArea: 'Xóa khu vực',

  // Risk banner
  riskBannerLabel: 'Nguy cơ dị ứng hôm nay',
  levelLow: 'Thấp',
  levelMed: 'Trung bình',
  levelHigh: 'Cao',
  levelVhigh: 'Rất cao',

  // Banner reasons
  reasonTemp: 'Nhiệt độ thay đổi {n}°C trong 24 giờ',
  reasonAir: 'PM2.5 cao',
  reasonHumidity: 'độ ẩm bất thường',
  reasonPollen: 'phấn hoa nhiều',
  reasonJoin: ' và ',
  reasonNone: 'Thời tiết ổn định',

  // Factor cards
  factorsHeading: 'Yếu tố nguy cơ',
  factorTemp: 'Thay đổi nhiệt độ (24 giờ)',
  factorHumidity: 'Độ ẩm tương đối',
  factorAir: 'PM2.5',
  factorPollen: 'Phấn hoa',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'Bình thường',
  grade1: 'Cần theo dõi',
  grade2: 'Cao',
  grade3: 'Rất cao',
  gradeNoData: 'Không có dữ liệu',
  gradeExcluded: 'Không tính vào điểm',
  noPollenData: 'Không có dữ liệu phấn hoa cho khu vực này',
  insufficientData: 'Dữ liệu chưa đủ',

  // 7-day forecast
  daysHeading: 'Dự báo nguy cơ 7 ngày',
  today: 'Hôm nay',
  tomorrow: 'Ngày mai',

  // Temperature outlook
  outlookHeading: 'Xu hướng nhiệt độ 24 giờ tới',
  outlookNote: 'Dự kiến biến động lớn nhất {n}°C vào khoảng {time}',

  // Advice
  adviceHeading: 'Lời khuyên',
  adviceLow: [
    'Thời tiết thuận lợi — hãy tận hưởng ngày mới',
    'Để phòng xa, mang theo thuốc dị ứng bạn thường dùng'
  ],
  adviceMed: [
    'Đeo khẩu trang nếu ở ngoài trời lâu',
    'Mang theo thuốc kháng histamin',
    'Chú ý các triệu chứng ban đầu như hắt hơi, sổ mũi'
  ],
  adviceHigh: [
    'Đeo khẩu trang N95 khi ra ngoài',
    'Đóng cửa sổ và dùng máy lọc không khí nếu có',
    'Mang theo thuốc kháng histamin',
    'Rửa mũi bằng nước muối sinh lý sau khi về nhà'
  ],
  adviceVhigh: [
    'Hạn chế ra ngoài, ở trong nhà càng nhiều càng tốt',
    'Luôn đeo khẩu trang N95 mỗi khi ra ngoài',
    'Đóng cửa sổ và dùng máy lọc không khí nếu có',
    'Mang theo thuốc kháng histamin và dùng theo hướng dẫn',
    'Rửa mũi bằng nước muối sinh lý sau khi về nhà',
    'Đi khám bác sĩ nếu triệu chứng nặng hoặc khó thở'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'Nhiệt độ biến động mạnh — mặc nhiều lớp áo và tránh ra vào phòng điều hòa thường xuyên',
  adviceHumidityHigh: 'Độ ẩm cao — đề phòng nấm mốc và mạt bụi trong nhà',
  adviceHumidityLow: 'Độ ẩm thấp — không khí khô dễ gây kích ứng mũi; hãy uống đủ nước',
  adviceAir: 'PM2.5 cao — đeo khẩu trang N95 và tránh tập thể dục ngoài trời',
  advicePollen: 'Phấn hoa nhiều — đóng cửa sổ và tắm ngay khi về nhà',

  // About / education
  aboutHeading: 'Dị ứng thời tiết là gì?',
  aboutIntro: 'Viêm mũi dị ứng là tình trạng niêm mạc mũi phản ứng quá mức với những thứ trong không khí — bụi, phấn hoa, thậm chí cả thời tiết — gây hắt hơi, sổ mũi hoặc nghẹt mũi, ngứa mắt và chảy nước mắt. "Dị ứng thời tiết" theo cách gọi thông thường còn bao gồm viêm mũi không do dị ứng (viêm mũi vận mạch): chỉ riêng thay đổi nhiệt độ hay độ ẩm — hoàn toàn không có dị nguyên — cũng đủ kích thích các dây thần kinh và mạch máu quá nhạy cảm trong mũi.',
  aboutWhyHeading: 'Vì sao thời tiết thay đổi đột ngột gây ra triệu chứng?',
  aboutWhyBody: 'Mũi hoạt động như chiếc điều hòa của cơ thể: niêm mạc mũi làm ấm và làm ẩm từng hơi thở trước khi không khí xuống phổi. Khi điều kiện thay đổi quá nhanh — sáng mát lạnh chuyển sang trưa nắng nóng, hay ra vào phòng điều hòa liên tục — niêm mạc quá nhạy cảm sẽ phản ứng thái quá: mạch máu giãn ra, mô sưng lên và tiết nhiều dịch mũi. Đó là lý do bạn bị nghẹt mũi, hắt hơi và sổ mũi.',
  aboutTempTitle: 'Nhiệt độ thay đổi đột ngột',
  aboutTempBody: 'Nhiệt độ tăng hoặc giảm nhanh kích thích trực tiếp các dây thần kinh trong niêm mạc mũi. Mạch máu giãn ra, niêm mạc sưng lên khiến mũi chảy nước hoặc nghẹt — dù không hề có dị nguyên nào.',
  aboutHumidityTitle: 'Độ ẩm',
  aboutHumidityBody: 'Không khí quá ẩm giúp mạt bụi và nấm mốc sinh sôi — những dị nguyên phổ biến nhất. Không khí quá khô làm niêm mạc mũi khô rát, dễ bị kích ứng và dễ bị các tác nhân tấn công hơn.',
  aboutAirTitle: 'Bụi mịn PM2.5',
  aboutAirBody: 'Hạt bụi nhỏ đến mức này lọt qua màng lọc của mũi và gây viêm niêm mạc đường thở. Mũi bị viêm càng nhạy cảm hơn, nên vào những ngày bụi cao, triệu chứng dị ứng dễ bùng phát và kéo dài hơn.',
  aboutPollenTitle: 'Phấn hoa',
  aboutPollenBody: 'Phấn hoa từ cỏ, cỏ dại và cây là dị nguyên thường gặp. Ở người bị dị ứng, hệ miễn dịch nhầm phấn hoa là mối đe dọa và giải phóng histamin — chất gây ra hắt hơi, ngứa và sổ mũi.',
  aboutOutro: 'Bốn tác nhân này chính là bốn yếu tố nguy cơ mà ứng dụng theo dõi, giúp bạn thấy trước nguy cơ và chuẩn bị kịp thời.',

  // Footer / status
  disclaimer: 'Đây chỉ là đánh giá sơ bộ, không phải chẩn đoán y khoa. Nếu triệu chứng nặng, hãy đi khám bác sĩ.',
  sourceCredit: 'Dữ liệu thời tiết và chất lượng không khí từ',
  staleNotice: 'Đang hiển thị dữ liệu gần nhất lúc {time} — không thể kết nối',
  errorTitle: 'Đã xảy ra lỗi',
  errorMsg: 'Không tải được dữ liệu. Vui lòng kiểm tra kết nối.',
  retry: 'Thử lại',
  langLabel: 'Ngôn ngữ'
};
