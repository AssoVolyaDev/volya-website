export interface I18nText {
  fr: string;
  en: string;
  uk: string;
}

export interface CommonTeamMember {
  ordre: number;
}

// Utilisé pour les images de profil par défaut
export interface DefaultTeamMember extends CommonTeamMember {
  gender?: 'male' | 'female';
}

export interface TeamMember extends CommonTeamMember {
  // Correspond à une entrée de global.members.<id>
  id: string;
  pseudo: I18nText;
  imageProfileUrl: string;
}
