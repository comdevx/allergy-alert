// French — key set must match en.js (canonical) exactly.
export default {
  // Header / app chrome
  appTitle: 'Alerte Allergie',
  appSubtitle: 'Risque d’allergie lié aux changements brusques de météo',
  refresh: 'Actualiser',
  loading: 'Chargement…',
  updatedAt: 'Mis à jour {time}',
  addArea: '+ Ajouter une zone',
  currentLocation: 'Position actuelle',
  myAreas: 'Mes zones',

  // Location picker
  pickerMsg: 'Impossible de détecter votre position. Veuillez choisir une province.',
  pickerTitle: 'Choisir une province',
  confirm: 'Confirmer',
  cancel: 'Annuler',
  useGps: 'Utiliser ma position',
  removeArea: 'Supprimer la zone',

  // Risk banner
  riskBannerLabel: 'Risque d’allergie aujourd’hui',
  levelLow: 'Faible',
  levelMed: 'Modéré',
  levelHigh: 'Élevé',
  levelVhigh: 'Très élevé',

  // Banner reasons
  reasonTemp: 'Variation de température de {n}°C en 24 h',
  reasonAir: 'taux élevé de PM2.5',
  reasonHumidity: 'humidité inhabituelle',
  reasonPollen: 'pollen abondant',
  reasonJoin: ' et ',
  reasonNone: 'Conditions stables',

  // Factor cards
  factorsHeading: 'Facteurs de risque',
  factorTemp: 'Variation de température (24 h)',
  factorHumidity: 'Humidité relative',
  factorAir: 'PM2.5',
  factorPollen: 'Pollen',
  unitC: '°C',
  unitPct: '%',
  unitPm: 'µg/m³',

  // Factor grades
  grade0: 'Normal',
  grade1: 'Surveillance',
  grade2: 'Élevé',
  grade3: 'Très élevé',
  gradeNoData: 'Pas de données',
  gradeExcluded: 'Non pris en compte dans le score',
  noPollenData: 'Pas de données polliniques pour cette zone',
  insufficientData: 'Données insuffisantes',

  // 7-day forecast
  daysHeading: 'Prévision du risque sur 7 jours',
  today: 'Aujourd’hui',
  tomorrow: 'Demain',

  // Temperature outlook
  outlookHeading: 'Tendance de température, prochaines 24 h',
  outlookNote: 'Variation maximale de {n}°C attendue vers {time}',

  // Advice
  adviceHeading: 'Conseils',
  adviceLow: [
    'Les conditions sont bonnes — profitez de votre journée',
    'Gardez votre traitement antiallergique habituel à portée de main, au cas où'
  ],
  adviceMed: [
    'Portez un masque si vous restez longtemps à l’extérieur',
    'Ayez votre antihistaminique sur vous',
    'Surveillez les premiers symptômes comme les éternuements ou le nez qui coule'
  ],
  adviceHigh: [
    'Portez un masque N95 à l’extérieur',
    'Fermez les fenêtres et utilisez un purificateur d’air si vous en avez un',
    'Ayez votre antihistaminique sur vous',
    'Rincez-vous le nez au sérum physiologique en rentrant chez vous'
  ],
  adviceVhigh: [
    'Restez à l’intérieur autant que possible',
    'Portez un masque N95 à chaque sortie',
    'Fermez les fenêtres et utilisez un purificateur d’air si vous en avez un',
    'Ayez votre antihistaminique sur vous et prenez-le selon les indications',
    'Rincez-vous le nez au sérum physiologique en rentrant chez vous',
    'Consultez un médecin si les symptômes sont sévères ou si vous avez du mal à respirer'
  ],

  // Factor-specific one-liners (shown when that factor scores >= 2)
  adviceTemp: 'Fortes variations de température — habillez-vous en plusieurs couches et évitez les allers-retours fréquents dans les pièces climatisées',
  adviceHumidityHigh: 'Humidité élevée — attention aux moisissures et aux acariens à la maison',
  adviceHumidityLow: 'Humidité faible — l’air sec peut irriter le nez ; buvez beaucoup d’eau',
  adviceAir: 'Taux élevé de PM2.5 — portez un masque N95 et évitez le sport en extérieur',
  advicePollen: 'Pollen abondant — gardez les fenêtres fermées et douchez-vous en rentrant',

  // About / education
  aboutHeading: 'Qu’est-ce que l’allergie à la météo ?',
  aboutIntro: 'La rhinite allergique est une affection dans laquelle la muqueuse du nez réagit de façon excessive à des éléments présents dans l’air — poussière, pollen, ou même la météo elle-même — provoquant éternuements, nez qui coule ou bouché, yeux qui piquent et larmoient. L’« allergie à la météo » englobe aussi couramment la rhinite non allergique (vasomotrice), où de simples variations de température ou d’humidité — sans aucun allergène — irritent les nerfs et les vaisseaux sanguins hypersensibles du nez.',
  aboutWhyHeading: 'Pourquoi les changements brusques de météo la déclenchent-ils ?',
  aboutWhyBody: 'Le nez fonctionne comme le climatiseur du corps : sa muqueuse réchauffe et humidifie chaque inspiration avant qu’elle n’atteigne les poumons. Quand les conditions changent vite — une matinée fraîche qui devient un après-midi chaud, ou des allers-retours dans des pièces climatisées — une muqueuse hypersensible réagit de manière excessive : les vaisseaux sanguins se dilatent, le tissu gonfle et sécrète beaucoup de mucus. D’où la congestion, les éternuements et le nez qui coule.',
  aboutTempTitle: 'Variations brusques de température',
  aboutTempBody: 'Une hausse ou une baisse rapide de la température stimule directement les nerfs de la muqueuse nasale. Les vaisseaux sanguins se dilatent, la muqueuse gonfle, et le nez coule ou se bouche — même sans aucun allergène.',
  aboutHumidityTitle: 'Humidité',
  aboutHumidityBody: 'Un air très humide favorise les acariens et les moisissures — parmi les allergènes les plus courants. Un air très sec assèche la muqueuse nasale, qui devient irritée et plus vulnérable aux déclencheurs.',
  aboutAirTitle: 'Particules fines PM2.5',
  aboutAirBody: 'Des particules aussi fines passent à travers les filtres du nez et enflamment la muqueuse des voies respiratoires. Un nez enflammé est encore plus sensible : les jours de forte pollution, les symptômes d’allergie s’aggravent plus facilement et durent plus longtemps.',
  aboutPollenTitle: 'Pollen',
  aboutPollenBody: 'Le pollen des graminées, des herbacées et des arbres est un allergène courant. Chez les personnes allergiques, le système immunitaire le prend pour une menace et libère de l’histamine — la substance à l’origine des éternuements, des démangeaisons et du nez qui coule.',
  aboutOutro: 'Ces quatre déclencheurs sont exactement les quatre facteurs de risque que cette appli surveille, pour que vous puissiez anticiper votre risque et vous préparer.',

  // Footer / status
  disclaimer: 'Ceci n’est qu’une évaluation préliminaire, pas un diagnostic médical. En cas de symptômes sévères, consultez un médecin.',
  sourceCredit: 'Données météo et qualité de l’air fournies par',
  staleNotice: 'Affichage des dernières données de {time} — connexion impossible',
  errorTitle: 'Une erreur est survenue',
  errorMsg: 'Impossible de charger les données. Vérifiez votre connexion.',
  retry: 'Réessayer',
  langLabel: 'Langue'
};
