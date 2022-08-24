export interface I18nText {
  fr: string;
  en: string;
  uk: string;
}

export interface TeamMember {
  // Correspond à une entrée de global.members.<id>
  id: string;
  pseudo: I18nText;
  imageProfileUrl: string;
  ordre: number;
}
