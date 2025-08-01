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
