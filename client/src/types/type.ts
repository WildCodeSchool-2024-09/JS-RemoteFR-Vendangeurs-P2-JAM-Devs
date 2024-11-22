export interface SectionBannerProps {
  children: React.ReactNode;
  showBg?: boolean;
  showBorder?: boolean;
  image?: string;
  blur?: boolean;
}

export interface HeroBannerProps {
  name?: string;
  picture?: string;
  nbFan?: number;
  cover?: string;
  title?: string;
  release?: string;
  fans?: number;
}

export interface Playlist {
  id: number;
  picture: string;
  picture_big: string;
  title: string;
  error: string;
}

export interface Artist {
  id?: number;
  name: string;
  picture_small: string;
  picture: string | undefined;
  picture_medium?: string | undefined;
  nb_fan?: number;
  error?: string;
}

export interface Albums {
  id: number;
  title: string;
  cover?: string;
  cover_big?: string;
  cover_small?: string;
  cover_medium?: string;
  release?: string;
  release_date?: string;
  topAlbums?: Albums[];
  link?: string;
  nbFan?: number;
  fans?: number;
  album?: {
    cover_big: string;
    cover_small: string;
  };
}

export interface Track {
  id?: number;
  index: number;
  title?: string | undefined;
  title_short?: string | undefined;
  duration: number;
  imageBig?: string | undefined;
  imageSmall?: string | undefined;
  preview?: string;
  album?: {
    id: number;
    cover_small: string;
    cover_big: string;
  };
  artist?: {
    name: string | undefined;
    picture_small: string;
  };
  track?: {
    artist?: {
      name?: string | undefined;
    };
  };
}
