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

  // About / education
  aboutHeading: 'Apa itu alergi cuaca?',
  aboutIntro: 'Rinitis alergi adalah kondisi ketika lapisan dalam hidung (mukosa hidung) bereaksi berlebihan terhadap hal-hal di udara — debu, serbuk sari, bahkan cuaca itu sendiri — sehingga menimbulkan bersin, pilek atau hidung tersumbat, serta mata gatal dan berair. "Alergi cuaca" yang biasa disebut orang juga mencakup rinitis non-alergi (vasomotor), yaitu ketika perubahan suhu atau kelembapan saja — tanpa alergen sama sekali — sudah cukup mengiritasi saraf dan pembuluh darah hidung yang terlalu sensitif.',
  aboutWhyHeading: 'Mengapa perubahan cuaca mendadak memicunya?',
  aboutWhyBody: 'Hidung bekerja seperti AC tubuh: lapisannya menghangatkan dan melembapkan setiap tarikan napas sebelum mencapai paru-paru. Saat kondisi berubah cepat — pagi yang sejuk berubah menjadi siang yang panas, atau sering keluar-masuk ruangan ber-AC — lapisan hidung yang terlalu sensitif bereaksi berlebihan: pembuluh darah melebar, jaringan membengkak, dan lendir keluar banyak. Itulah sebabnya hidung tersumbat, bersin, dan pilek.',
  aboutTempTitle: 'Perubahan suhu mendadak',
  aboutTempBody: 'Suhu yang naik atau turun dengan cepat langsung merangsang saraf di lapisan hidung. Pembuluh darah melebar dan lapisan membengkak, sehingga hidung meler atau tersumbat — bahkan tanpa alergen sama sekali.',
  aboutHumidityTitle: 'Kelembapan',
  aboutHumidityBody: 'Udara yang sangat lembap membuat tungau debu dan jamur tumbuh subur — keduanya termasuk alergen paling umum. Udara yang sangat kering membuat lapisan hidung mengering, teriritasi, dan lebih mudah diserang pemicu.',
  aboutAirTitle: 'Debu halus PM2.5',
  aboutAirBody: 'Partikel sekecil ini lolos dari saringan hidung dan membuat lapisan saluran napas meradang. Hidung yang meradang menjadi lebih sensitif, sehingga gejala alergi lebih mudah kambuh dan bertahan lebih lama pada hari-hari berdebu tinggi.',
  aboutPollenTitle: 'Serbuk sari',
  aboutPollenBody: 'Serbuk sari dari rumput, gulma, dan pohon adalah alergen yang umum. Pada orang yang alergi, sistem imun salah mengiranya sebagai ancaman dan melepaskan histamin — zat di balik bersin, gatal, dan pilek.',
  aboutOutro: 'Empat pemicu ini persis empat faktor risiko yang dipantau aplikasi ini, agar Anda bisa melihat risiko lebih awal dan bersiap.',

  // Footer / status
  disclaimer: 'Ini hanya penilaian awal, bukan diagnosis medis. Jika gejala parah, segera periksakan ke dokter.',
  sourceCredit: 'Data cuaca dan kualitas udara dari',
  staleNotice: 'Menampilkan data terakhir dari {time} — tidak dapat terhubung',
  errorTitle: 'Terjadi kesalahan',
  errorMsg: 'Gagal memuat data. Periksa koneksi Anda.',
  retry: 'Coba lagi',
  langLabel: 'Bahasa',

  // Share
  shareResult: 'Bagikan hasil',
  copyLink: 'Salin tautan',
  linkCopied: 'Tautan disalin',
  copyFailed: 'Gagal menyalin',
  shareTitle: 'Cek risiko alergi cuaca',
  shareText: 'Risiko alergi cuaca hari ini: {level} — {reasons}\nCek wilayah Anda di'
};
