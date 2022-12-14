export const DEVICE_SIZES = {
  mobileXS: 400,
  mobile: 580,
  mobileXL: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024
};

export const SOCIAL_NETWORKS_URLS = {
  facebook: 'https://www.facebook.com/VolyaAsso/',
  instagram: 'https://instagram.com/volya_asso',
  linkedin: 'linkedin.todo',
  tiktok: 'https://www.tiktok.com/@volya_asso',
  youtube: 'youtube.todo'
};

export const HELLO_ASSO_URLS = {
  home: 'https://www.helloasso.com/associations/association-franco-ukrainienne-volya',
  // ATTENTION à changer ça tous les ans
  becomeMember:
    'https://www.helloasso.com/associations/association-franco-ukrainienne-volya/adhesions/adhesion-2022',
  donate:
    'https://www.helloasso.com/associations/association-franco-ukrainienne-volya/formulaires/1'
};

// TODO : à déplacer dans une variable d'environnement
export const GOOGLE_MAPS_API_KEY = 'AIzaSyA14exFuZnTsG1FD - FEOwzeviR2kl - CU1g';

// TODO : utiliser une clé i18n plutôt
export const CONTACT_MESSAGE = 'Merci de nous contacter si le problème persiste.';

export const GOOGLE_MAP_DEFAULT_PROPS = {
  center: {
    lat: 47.218371,
    lng: -1.553621
  },
  zoom: 12
};
export const COLLECTION_SITE_COORDINATES = {
  lat: 47.203992497740195,
  lng: -1.568377677738861
};

// TODO : à déplacer dans Firestore comme teamMembers
export const PARTNERS = [];

// TODO : à déplacer dans Firestore comme teamMembers
export const DONORS = [];
