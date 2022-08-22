import * as Types from '../types';
import FemaleMemberImg from '../assets/images/female-member.png';
import MaleMemberImg from '../assets/images/male-member.png';

export const DEVICE_SIZES = {
  mobileXS: 400,
  mobile: 580,
  mobileXL: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024
};

export const SOCIAL_NETWORKS_URLS = {
  facebook: 'facebook.todo',
  instagram: 'instagram.todo',
  linkedin: 'linkedin.todo',
  tiktok: 'tiktok.todo',
  youtube: 'youtube.todo'
};

export const GOOGLE_MAPS_API_KEY = 'AIzaSyA14exFuZnTsG1FD - FEOwzeviR2kl - CU1g';
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

export const TEAM_MEMBERS: Types.TeamMember[] = [
  {
    id: 'nataliya',
    picture: FemaleMemberImg
  },
  {
    id: 'alona',
    picture: FemaleMemberImg
  },
  {
    id: 'anthony',
    picture: MaleMemberImg
  },
  {
    id: 'bastien',
    picture: MaleMemberImg
  },
  {
    id: 'eric',
    picture: MaleMemberImg
  },
  {
    id: 'odile',
    picture: FemaleMemberImg
  },
  {
    id: 'thais',
    picture: FemaleMemberImg
  },
  {
    id: 'valentin',
    picture: MaleMemberImg
  },
  {
    id: 'youcef',
    picture: MaleMemberImg
  }
];

export const PARTNERS = [];

export const DONORS = [];
