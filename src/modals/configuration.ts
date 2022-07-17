export interface Configuration {
  configurationType: string;
  imagesPreload: ImagesPreload;
  links: Links;
  home: Home;
}

export interface ImagesPreload {
  about: string;
  me: string;
  avatar1: string;
  avatar2: string;
  avatar3: string;
  avatar4: string;
  portfolio1: string;
  portfolio2: string;
  portfolio3: string;
  portfolio4: string;
  portfolio5: string;
  portfolio6: string;
}

export interface Links {
  linkedIn: string;
  github: string;
  facebook: string;
  whatsapp: string;
  messenger: string;
  email: string;
  resume: string;
}

export interface Home {
  header: string;
  title: string;
  subTitle: string;
  downloadCVBtn: string;
  letsTalkBtn: string;
}
