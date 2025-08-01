export type NavLinksTypes = {
  id: number;
  name: string;
  href: string;
};

export type PhotoTypes = {
  id: number;
  photo: string;
};

export type PhotosTypes = {
  id: number;
  name: string;
  album: PhotoTypes[];
};

export type informationTypes = {
  id: number;
  image: string;
  description: string;
};

export type musiciansTypes = {
  id: number;
  name: string;
  image: string;
  history: string;
};

export type aboutTypes = {
  id: number;
  title: string;
  content: string;
};

export type participantsTypes = {
  id: number;
  name: string;
  image: string;
};

export type sponsorsTypes = {
  id: number;
  name: string;
  image: string;
};