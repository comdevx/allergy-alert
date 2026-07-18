// German — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: 'Allergie-Alarm',
  appSubtitle: 'Allergierisiko durch plötzliche Wetterumschwünge',
  refresh: 'Aktualisieren',
  loading: 'Wird geladen…',
  updatedAt: 'Aktualisiert {time}',
  addArea: '+ Gebiet hinzufügen',
  currentLocation: 'Aktueller Standort',
  myAreas: 'Meine Gebiete',

  // Location picker
  pickerMsg: 'Ihr Standort konnte nicht ermittelt werden. Bitte wählen Sie eine Provinz.',
  pickerTitle: 'Provinz wählen',
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  useGps: 'Meinen Standort verwenden',
  removeArea: 'Gebiet entfernen',

  // Risk banner
  riskBannerLabel: 'Allergierisiko heute',
  levelLow: 'Niedrig',
  levelMed: 'Mäßig',
  levelHigh: 'Hoch',
  levelVhigh: 'Sehr hoch',

  // Banner reasons
  reasonTemp: 'Temperaturschwankung von {n}°C in 24 h',
  reasonAir: 'hohe PM2.5-Werte',
  reasonHumidity: 'ungewöhnliche Luftfeuchtigkeit',
  reasonPollen: 'starker Pollenflug',
  reasonJoin: ' und ',
  reasonNone: 'Die Bedingungen sind stabil',

  // Factor cards
  factorsHeading: 'Risikofaktoren',
  factorTemp: 'Temperaturänderung (24 h)',
  factorHumidity: 'Relative Luftfeuchtigkeit',
  factorAir: 'PM2.5',
  factorPollen: 'Pollen',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'Normal',
  grade1: 'Beobachten',
  grade2: 'Hoch',
  grade3: 'Sehr hoch',
  gradeNoData: 'Keine Daten',
  gradeExcluded: 'Nicht in die Bewertung einbezogen',
  noPollenData: 'Keine Pollendaten für dieses Gebiet',
  insufficientData: 'Unzureichende Daten',

  // 7-day forecast
  daysHeading: '7-Tage-Risikoprognose',
  today: 'Heute',
  tomorrow: 'Morgen',

  // Temperature outlook
  outlookHeading: 'Temperaturtrend, nächste 24 h',
  outlookNote: 'Größte Schwankung von {n}°C gegen {time} erwartet',

  // Advice
  adviceHeading: 'Empfehlungen',
  adviceLow: [
    'Die Bedingungen sind gut — genießen Sie Ihren Tag',
    'Halten Sie Ihr übliches Allergiemedikament vorsichtshalber bereit'
  ],
  adviceMed: [
    'Tragen Sie eine Maske, wenn Sie längere Zeit im Freien sind',
    'Führen Sie Ihr Antihistaminikum mit sich',
    'Achten Sie auf erste Symptome wie Niesen oder laufende Nase'
  ],
  adviceHigh: [
    'Tragen Sie im Freien eine N95-Maske (FFP2)',
    'Halten Sie die Fenster geschlossen und nutzen Sie einen Luftreiniger, falls vorhanden',
    'Führen Sie Ihr Antihistaminikum mit sich',
    'Spülen Sie die Nase nach der Heimkehr mit Kochsalzlösung'
  ],
  adviceVhigh: [
    'Bleiben Sie möglichst in Innenräumen',
    'Tragen Sie draußen immer eine N95-Maske (FFP2)',
    'Halten Sie die Fenster geschlossen und nutzen Sie einen Luftreiniger, falls vorhanden',
    'Führen Sie Ihr Antihistaminikum mit sich und nehmen Sie es wie angegeben ein',
    'Spülen Sie die Nase nach der Heimkehr mit Kochsalzlösung',
    'Suchen Sie bei starken Beschwerden oder Atemnot einen Arzt auf'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'Starke Temperaturschwankungen — kleiden Sie sich im Zwiebelprinzip und vermeiden Sie häufigen Wechsel zwischen klimatisierten Räumen und draußen',
  adviceHumidityHigh: 'Hohe Luftfeuchtigkeit — achten Sie zu Hause auf Schimmel und Hausstaubmilben',
  adviceHumidityLow: 'Niedrige Luftfeuchtigkeit — trockene Luft kann die Nase reizen; trinken Sie ausreichend Wasser',
  adviceAir: 'Hohe PM2.5-Werte — tragen Sie eine N95-Maske (FFP2) und vermeiden Sie Sport im Freien',
  advicePollen: 'Starker Pollenflug — halten Sie die Fenster geschlossen und duschen Sie nach der Heimkehr',

  // Footer / status
  disclaimer: 'Dies ist nur eine vorläufige Einschätzung und keine medizinische Diagnose. Bei starken Beschwerden suchen Sie bitte einen Arzt auf.',
  sourceCredit: 'Wetter- und Luftqualitätsdaten von',
  staleNotice: 'Letzte Daten von {time} werden angezeigt — keine Verbindung möglich',
  errorTitle: 'Etwas ist schiefgelaufen',
  errorMsg: 'Daten konnten nicht geladen werden. Prüfen Sie Ihre Verbindung.',
  retry: 'Erneut versuchen',
  langLabel: 'Sprache'
};
