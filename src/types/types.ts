export interface NavLinksinterfaces {
  id: number;
  name: string;
  href: string;
}

export interface Photointerfaces {
  id: number;
  photo: string;
}

export interface Photosinterfaces {
  id: number;
  name: string;
  album: Photointerfaces[];
}

export interface informationinterfaces {
  id: number;
  image: string;
  description: string;
}

export interface musiciansinterfaces {
  id: number;
  name: string;
  image: string;
  history: string;
}

export interface aboutinterfaces {
  id: number;
  title: string;
  content: string;
}

export interface participantsinterfaces {
  id: number;
  name: string;
  image: string;
}

export interface sponsorsinterfaces {
  id: number;
  name: string;
  image: string;
}


export interface Sobrenosotrasinterfaces {
  sobrenosotras: {
    id: number;
    title: string;
    content: string;
  };
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}
