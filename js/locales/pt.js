// Portuguese (pt-BR) — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: 'Alerta de Alergia',
  appSubtitle: 'Risco de alergia por mudanças bruscas do tempo',
  refresh: 'Atualizar',
  loading: 'Carregando…',
  updatedAt: 'Atualizado {time}',
  addArea: '+ Adicionar área',
  currentLocation: 'Localização atual',
  myAreas: 'Minhas áreas',

  // Location picker
  pickerMsg: 'Não foi possível detectar sua localização. Escolha uma província.',
  pickerTitle: 'Escolha uma província',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  useGps: 'Usar minha localização',
  removeArea: 'Remover área',

  // Risk banner
  riskBannerLabel: 'Risco de alergia hoje',
  levelLow: 'Baixo',
  levelMed: 'Moderado',
  levelHigh: 'Alto',
  levelVhigh: 'Muito alto',

  // Banner reasons
  reasonTemp: 'Variação de temperatura de {n}°C em 24 h',
  reasonAir: 'PM2.5 elevado',
  reasonHumidity: 'umidade incomum',
  reasonPollen: 'pólen elevado',
  reasonJoin: ' e ',
  reasonNone: 'As condições estão estáveis',

  // Factor cards
  factorsHeading: 'Fatores de risco',
  factorTemp: 'Mudança de temperatura (24 h)',
  factorHumidity: 'Umidade relativa',
  factorAir: 'PM2.5',
  factorPollen: 'Pólen',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'Normal',
  grade1: 'Atenção',
  grade2: 'Alto',
  grade3: 'Muito alto',
  gradeNoData: 'Sem dados',
  gradeExcluded: 'Não incluído na pontuação',
  noPollenData: 'Sem dados de pólen para esta área',
  insufficientData: 'Dados insuficientes',

  // 7-day forecast
  daysHeading: 'Previsão de risco para 7 dias',
  today: 'Hoje',
  tomorrow: 'Amanhã',

  // Temperature outlook
  outlookHeading: 'Tendência de temperatura, próximas 24 h',
  outlookNote: 'Maior variação de {n}°C prevista por volta de {time}',

  // Advice
  adviceHeading: 'Recomendações',
  adviceLow: [
    'As condições estão boas — aproveite o seu dia',
    'Por precaução, leve com você seu remédio habitual para alergia'
  ],
  adviceMed: [
    'Use máscara se ficar muito tempo ao ar livre',
    'Leve seu anti-histamínico com você',
    'Fique atento a sintomas iniciais, como espirros e coriza'
  ],
  adviceHigh: [
    'Use máscara N95 (PFF2) ao ar livre',
    'Feche as janelas e use um purificador de ar, se tiver',
    'Leve seu anti-histamínico com você',
    'Lave o nariz com soro fisiológico ao voltar para casa'
  ],
  adviceVhigh: [
    'Fique em ambientes fechados o máximo possível',
    'Use máscara N95 (PFF2) sempre que sair',
    'Feche as janelas e use um purificador de ar, se tiver',
    'Leve seu anti-histamínico e tome conforme as orientações',
    'Lave o nariz com soro fisiológico ao voltar para casa',
    'Procure um médico se os sintomas forem graves ou houver dificuldade para respirar'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'Grandes variações de temperatura — vista-se em camadas e evite entrar e sair de ambientes com ar-condicionado com frequência',
  adviceHumidityHigh: 'Umidade alta — cuidado com mofo e ácaros em casa',
  adviceHumidityLow: 'Umidade baixa — o ar seco pode irritar o nariz; beba bastante água',
  adviceAir: 'PM2.5 elevado — use máscara N95 (PFF2) e evite exercícios ao ar livre',
  advicePollen: 'Pólen elevado — mantenha as janelas fechadas e tome banho ao chegar em casa',

  // Footer / status
  disclaimer: 'Esta é apenas uma avaliação preliminar, não um diagnóstico médico. Se os sintomas forem graves, procure um médico.',
  sourceCredit: 'Dados de clima e qualidade do ar de',
  staleNotice: 'Exibindo os últimos dados de {time} — sem conexão',
  errorTitle: 'Algo deu errado',
  errorMsg: 'Não foi possível carregar os dados. Verifique sua conexão.',
  retry: 'Tentar novamente',
  langLabel: 'Idioma'
};
