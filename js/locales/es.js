// Spanish — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: 'Alerta de Alergia',
  appSubtitle: 'Riesgo de alergia por cambios bruscos del tiempo',
  refresh: 'Actualizar',
  loading: 'Cargando…',
  updatedAt: 'Actualizado {time}',
  addArea: '+ Añadir zona',
  currentLocation: 'Ubicación actual',
  myAreas: 'Mis zonas',

  // Location picker
  pickerMsg: 'No pudimos detectar tu ubicación. Elige una provincia.',
  pickerTitle: 'Elige una provincia',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  useGps: 'Usar mi ubicación',
  removeArea: 'Eliminar zona',

  // Risk banner
  riskBannerLabel: 'Riesgo de alergia hoy',
  levelLow: 'Bajo',
  levelMed: 'Moderado',
  levelHigh: 'Alto',
  levelVhigh: 'Muy alto',

  // Banner reasons
  reasonTemp: 'Variación de temperatura de {n}°C en 24 h',
  reasonAir: 'PM2.5 elevado',
  reasonHumidity: 'humedad inusual',
  reasonPollen: 'polen elevado',
  reasonJoin: ' y ',
  reasonNone: 'Las condiciones son estables',

  // Factor cards
  factorsHeading: 'Factores de riesgo',
  factorTemp: 'Cambio de temperatura (24 h)',
  factorHumidity: 'Humedad relativa',
  factorAir: 'PM2.5',
  factorPollen: 'Polen',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'Normal',
  grade1: 'Precaución',
  grade2: 'Alto',
  grade3: 'Muy alto',
  gradeNoData: 'Sin datos',
  gradeExcluded: 'No incluido en la puntuación',
  noPollenData: 'Sin datos de polen para esta zona',
  insufficientData: 'Datos insuficientes',

  // 7-day forecast
  daysHeading: 'Pronóstico de riesgo a 7 días',
  today: 'Hoy',
  tomorrow: 'Mañana',

  // Temperature outlook
  outlookHeading: 'Tendencia de temperatura, próximas 24 h',
  outlookNote: 'Mayor variación de {n}°C prevista hacia las {time}',

  // Advice
  adviceHeading: 'Consejos',
  adviceLow: [
    'Las condiciones son buenas: disfruta tu día',
    'Lleva contigo tu medicamento habitual para la alergia, por si acaso'
  ],
  adviceMed: [
    'Usa mascarilla si pasas mucho tiempo al aire libre',
    'Lleva contigo tu antihistamínico',
    'Presta atención a síntomas iniciales como estornudos o secreción nasal'
  ],
  adviceHigh: [
    'Usa una mascarilla N95 al aire libre',
    'Cierra las ventanas y usa un purificador de aire si tienes uno',
    'Lleva contigo tu antihistamínico',
    'Lávate la nariz con suero fisiológico al volver a casa'
  ],
  adviceVhigh: [
    'Permanece en interiores tanto como puedas',
    'Usa una mascarilla N95 siempre que salgas',
    'Cierra las ventanas y usa un purificador de aire si tienes uno',
    'Lleva tu antihistamínico y tómalo según las indicaciones',
    'Lávate la nariz con suero fisiológico al volver a casa',
    'Consulta a un médico si los síntomas son graves o te cuesta respirar'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'Grandes cambios de temperatura: vístete en capas y evita entrar y salir con frecuencia de espacios con aire acondicionado',
  adviceHumidityHigh: 'Humedad alta: cuidado con el moho y los ácaros en casa',
  adviceHumidityLow: 'Humedad baja: el aire seco puede irritar la nariz; bebe mucha agua',
  adviceAir: 'PM2.5 elevado: usa mascarilla N95 y evita hacer ejercicio al aire libre',
  advicePollen: 'Polen elevado: mantén las ventanas cerradas y dúchate al llegar a casa',

  // Footer / status
  disclaimer: 'Esta es solo una evaluación preliminar, no un diagnóstico médico. Si los síntomas son graves, consulta a un médico.',
  sourceCredit: 'Datos meteorológicos y de calidad del aire de',
  staleNotice: 'Mostrando los últimos datos de {time}: sin conexión',
  errorTitle: 'Algo salió mal',
  errorMsg: 'No se pudieron cargar los datos. Comprueba tu conexión.',
  retry: 'Reintentar',
  langLabel: 'Idioma'
};
