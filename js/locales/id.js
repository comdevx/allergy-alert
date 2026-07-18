// Indonesian — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: 'Peringatan Alergi',
  appSubtitle: 'Risiko alergi akibat perubahan cuaca mendadak',
  refresh: 'Muat ulang',
  loading: 'Memuat…',
  updatedAt: 'Diperbarui {time}',
  addArea: '+ Tambah wilayah',
  currentLocation: 'Lokasi saat ini',
  myAreas: 'Wilayah saya',

  // Location picker
  pickerMsg: 'Lokasi Anda tidak terdeteksi. Silakan pilih provinsi.',
  pickerTitle: 'Pilih provinsi',
  confirm: 'Konfirmasi',
  cancel: 'Batal',
  useGps: 'Gunakan lokasi saya',
  removeArea: 'Hapus wilayah',

  // Risk banner
  riskBannerLabel: 'Risiko alergi hari ini',
  levelLow: 'Rendah',
  levelMed: 'Sedang',
  levelHigh: 'Tinggi',
  levelVhigh: 'Sangat tinggi',

  // Banner reasons
  reasonTemp: 'Perubahan suhu {n}°C dalam 24 jam',
  reasonAir: 'PM2.5 tinggi',
  reasonHumidity: 'kelembapan tidak biasa',
  reasonPollen: 'serbuk sari tinggi',
  reasonJoin: ' dan ',
  reasonNone: 'Kondisi cuaca stabil',

  // Factor cards
  factorsHeading: 'Faktor risiko',
  factorTemp: 'Perubahan suhu (24 jam)',
  factorHumidity: 'Kelembapan relatif',
  factorAir: 'PM2.5',
  factorPollen: 'Serbuk sari',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'Normal',
  grade1: 'Waspada',
  grade2: 'Tinggi',
  grade3: 'Sangat tinggi',
  gradeNoData: 'Tidak ada data',
  gradeExcluded: 'Tidak dihitung dalam skor',
  noPollenData: 'Tidak ada data serbuk sari untuk wilayah ini',
  insufficientData: 'Data tidak memadai',

  // 7-day forecast
  daysHeading: 'Prakiraan risiko 7 hari',
  today: 'Hari ini',
  tomorrow: 'Besok',

  // Temperature outlook
  outlookHeading: 'Tren suhu 24 jam ke depan',
  outlookNote: 'Perubahan terbesar {n}°C diperkirakan sekitar {time}',

  // Advice
  adviceHeading: 'Saran',
  adviceLow: [
    'Kondisi cuaca baik — nikmati hari Anda',
    'Untuk berjaga-jaga, bawa obat alergi yang biasa Anda pakai'
  ],
  adviceMed: [
    'Pakai masker jika berada di luar ruangan dalam waktu lama',
    'Bawa antihistamin Anda',
    'Waspadai gejala awal seperti bersin atau pilek'
  ],
  adviceHigh: [
    'Pakai masker N95 saat di luar ruangan',
    'Tutup jendela dan gunakan pembersih udara jika ada',
    'Bawa antihistamin Anda',
    'Bilas hidung dengan larutan garam (saline) setelah pulang ke rumah'
  ],
  adviceVhigh: [
    'Sebisa mungkin tetap di dalam ruangan',
    'Selalu pakai masker N95 setiap keluar rumah',
    'Tutup jendela dan gunakan pembersih udara jika ada',
    'Bawa antihistamin dan minum sesuai anjuran',
    'Bilas hidung dengan larutan garam (saline) setelah pulang ke rumah',
    'Periksakan ke dokter jika gejala parah atau sulit bernapas'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'Perubahan suhu besar — kenakan pakaian berlapis dan hindari sering keluar-masuk ruangan ber-AC',
  adviceHumidityHigh: 'Kelembapan tinggi — waspadai jamur dan tungau debu di rumah',
  adviceHumidityLow: 'Kelembapan rendah — udara kering dapat mengiritasi hidung; minum air yang cukup',
  adviceAir: 'PM2.5 tinggi — pakai masker N95 dan hindari olahraga di luar ruangan',
  advicePollen: 'Serbuk sari tinggi — tutup jendela dan mandi setelah pulang ke rumah',

  // Footer / status
  disclaimer: 'Ini hanya penilaian awal, bukan diagnosis medis. Jika gejala parah, segera periksakan ke dokter.',
  sourceCredit: 'Data cuaca dan kualitas udara dari',
  staleNotice: 'Menampilkan data terakhir dari {time} — tidak dapat terhubung',
  errorTitle: 'Terjadi kesalahan',
  errorMsg: 'Gagal memuat data. Periksa koneksi Anda.',
  retry: 'Coba lagi',
  langLabel: 'Bahasa'
};
