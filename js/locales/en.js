// English — CANONICAL key set. Every locale file must export exactly these keys.
export default {
  // Header / app chrome
  appTitle: 'Allergy Alert',
  appSubtitle: 'Allergy risk from sudden weather changes',
  refresh: 'Refresh',
  loading: 'Loading…',
  updatedAt: 'Updated {time}',
  addArea: '+ Add area',
  currentLocation: 'Current location',
  myAreas: 'My areas',

  // Location picker
  pickerMsg: 'Could not detect your location. Please choose a province.',
  pickerTitle: 'Choose a province',
  confirm: 'Confirm',
  cancel: 'Cancel',
  useGps: 'Use my location',
  removeArea: 'Remove area',

  // Risk banner
  riskBannerLabel: 'Allergy risk today',
  levelLow: 'Low',
  levelMed: 'Moderate',
  levelHigh: 'High',
  levelVhigh: 'Very high',

  // Banner reasons
  reasonTemp: 'Temperature swing of {n}°C in 24 h',
  reasonAir: 'high PM2.5',
  reasonHumidity: 'unusual humidity',
  reasonPollen: 'high pollen',
  reasonJoin: ', ',
  reasonNone: 'Conditions are stable',

  // Factor cards
  factorsHeading: 'Risk factors',
  factorTemp: 'Temperature change (24 h)',
  factorHumidity: 'Relative humidity',
  factorAir: 'PM2.5',
  factorPollen: 'Pollen',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'Normal',
  grade1: 'Watch',
  grade2: 'High',
  grade3: 'Very high',
  gradeNoData: 'No data',
  gradeExcluded: 'Not included in score',
  noPollenData: 'No pollen data for this area',
  insufficientData: 'Insufficient data',

  // 7-day forecast
  daysHeading: '7-day risk forecast',
  today: 'Today',
  tomorrow: 'Tomorrow',

  // Temperature outlook
  outlookHeading: 'Temperature trend, next 24 h',
  outlookNote: 'Biggest swing {n}°C expected around {time}',

  // Advice
  adviceHeading: 'Advice',
  adviceLow: [
    'Conditions look good — enjoy your day',
    'Keep your usual allergy medication handy just in case'
  ],
  adviceMed: [
    'Wear a mask if you are outdoors for long periods',
    'Carry your antihistamine with you',
    'Watch for early symptoms such as sneezing or runny nose'
  ],
  adviceHigh: [
    'Wear an N95 mask when outdoors',
    'Close windows and use an air purifier if you have one',
    'Carry your antihistamine with you',
    'Rinse your nose with saline after returning home'
  ],
  adviceVhigh: [
    'Stay indoors as much as possible',
    'Wear an N95 mask whenever you go outside',
    'Close windows and use an air purifier if you have one',
    'Carry your antihistamine and take it as directed',
    'Rinse your nose with saline after returning home',
    'See a doctor if symptoms are severe or breathing is difficult'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'Big temperature swings — dress in layers and avoid moving in and out of air-conditioned rooms often',
  adviceHumidityHigh: 'High humidity — watch out for mold and dust mites at home',
  adviceHumidityLow: 'Low humidity — dry air can irritate your nose; drink plenty of water',
  adviceAir: 'High PM2.5 — wear an N95 mask and avoid outdoor exercise',
  advicePollen: 'High pollen — keep windows closed and shower after coming home',

  // About / education
  aboutHeading: 'What is weather allergy?',
  aboutIntro: 'Allergic rhinitis is a condition where the lining of the nose (the nasal mucosa) overreacts to things in the air — dust, pollen, or even the weather itself — causing sneezing, a runny or blocked nose, and itchy, watery eyes. "Weather allergy" also commonly includes non-allergic (vasomotor) rhinitis, where shifts in temperature or humidity alone — with no allergen at all — irritate oversensitive nerves and blood vessels in the nose.',
  aboutWhyHeading: 'Why do sudden weather changes trigger it?',
  aboutWhyBody: 'Your nose works like the body’s air conditioner: its lining warms and humidifies every breath before it reaches the lungs. When conditions swing fast — a cool morning turning into a hot afternoon, or walking in and out of air-conditioned rooms — an oversensitive lining overreacts: blood vessels dilate, the tissue swells, and it pours out mucus. That is why you get congestion, sneezing, and a runny nose.',
  aboutTempTitle: 'Sudden temperature swings',
  aboutTempBody: 'A rapid rise or fall in temperature directly stimulates the nerves in the nasal lining. Blood vessels dilate and the lining swells, so the nose runs or blocks up — even with no allergen involved.',
  aboutHumidityTitle: 'Humidity',
  aboutHumidityBody: 'Very humid air helps dust mites and mold thrive — among the most common allergens. Very dry air dries out the nasal lining, leaving it irritated and easier for triggers to attack.',
  aboutAirTitle: 'PM2.5 fine dust',
  aboutAirBody: 'Particles this small slip past the nose’s filters and inflame the lining of the airways. An inflamed nose is even more sensitive, so allergy symptoms flare more easily and last longer on high-dust days.',
  aboutPollenTitle: 'Pollen',
  aboutPollenBody: 'Pollen from grasses, weeds, and trees is a common allergen. In allergic people the immune system mistakes it for a threat and releases histamine — the chemical behind sneezing, itching, and a runny nose.',
  aboutOutro: 'These four triggers are exactly the four risk factors this app tracks, so you can see your risk ahead of time and prepare.',

  // Footer / status
  disclaimer: 'This is a preliminary assessment only, not a medical diagnosis. If symptoms are severe, please see a doctor.',
  sourceCredit: 'Weather and air quality data from',
  staleNotice: 'Showing last data from {time} — cannot connect',
  errorTitle: 'Something went wrong',
  errorMsg: 'Could not load data. Check your connection.',
  retry: 'Retry',
  langLabel: 'Language',

  // Share
  shareResult: 'Share result',
  copyLink: 'Copy link',
  linkCopied: 'Link copied',
  copyFailed: 'Could not copy'
};
