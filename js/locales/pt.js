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

  // About / education
  aboutHeading: 'O que é alergia ao clima?',
  aboutIntro: 'A rinite alérgica é uma condição em que o revestimento do nariz (a mucosa nasal) reage de forma exagerada a elementos do ar — poeira, pólen ou até o próprio clima — causando espirros, coriza ou nariz entupido, e coceira e lacrimejamento nos olhos. A "alergia ao clima" também costuma incluir a rinite não alérgica (vasomotora), em que apenas mudanças de temperatura ou umidade — sem nenhum alérgeno — irritam os nervos e vasos sanguíneos hipersensíveis do nariz.',
  aboutWhyHeading: 'Por que mudanças bruscas do tempo desencadeiam os sintomas?',
  aboutWhyBody: 'O nariz funciona como o ar-condicionado do corpo: sua mucosa aquece e umidifica cada respiração antes de ela chegar aos pulmões. Quando as condições mudam rápido — uma manhã fresca que vira uma tarde quente, ou entrar e sair de ambientes com ar-condicionado — uma mucosa hipersensível reage em excesso: os vasos sanguíneos se dilatam, o tecido incha e produz muito muco. É por isso que surgem congestão, espirros e coriza.',
  aboutTempTitle: 'Mudanças bruscas de temperatura',
  aboutTempBody: 'Uma subida ou queda rápida da temperatura estimula diretamente os nervos da mucosa nasal. Os vasos sanguíneos se dilatam e a mucosa incha, então o nariz escorre ou entope — mesmo sem nenhum alérgeno envolvido.',
  aboutHumidityTitle: 'Umidade',
  aboutHumidityBody: 'O ar muito úmido favorece os ácaros e o mofo — que estão entre os alérgenos mais comuns. O ar muito seco resseca a mucosa nasal, deixando-a irritada e mais vulnerável aos gatilhos.',
  aboutAirTitle: 'Partículas finas PM2.5',
  aboutAirBody: 'Partículas tão pequenas passam pelos filtros do nariz e inflamam o revestimento das vias respiratórias. Um nariz inflamado fica ainda mais sensível; por isso, em dias de muita poeira, os sintomas de alergia pioram com mais facilidade e duram mais.',
  aboutPollenTitle: 'Pólen',
  aboutPollenBody: 'O pólen de gramíneas, ervas daninhas e árvores é um alérgeno comum. Em pessoas alérgicas, o sistema imunológico o confunde com uma ameaça e libera histamina — a substância por trás dos espirros, da coceira e da coriza.',
  aboutOutro: 'Esses quatro gatilhos são exatamente os quatro fatores de risco que este app acompanha, para você ver o risco com antecedência e se preparar.',

  // Footer / status
  disclaimer: 'Esta é apenas uma avaliação preliminar, não um diagnóstico médico. Se os sintomas forem graves, procure um médico.',
  sourceCredit: 'Dados de clima e qualidade do ar de',
  staleNotice: 'Exibindo os últimos dados de {time} — sem conexão',
  errorTitle: 'Algo deu errado',
  errorMsg: 'Não foi possível carregar os dados. Verifique sua conexão.',
  retry: 'Tentar novamente',
  langLabel: 'Idioma',

  // Share
  shareResult: 'Compartilhar resultado',
  copyLink: 'Copiar link',
  linkCopied: 'Link copiado',
  copyFailed: 'Não foi possível copiar'
};
