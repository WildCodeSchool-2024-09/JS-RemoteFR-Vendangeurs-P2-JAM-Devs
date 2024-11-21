export interface Artist {
  id: number;
  name: string;
  picture: string;
  error: string;
}

export interface Playlist {
  id: number;
  picture: string;
  picture_big: string;
  title: string;
  error: string;
}

export interface Track {
  id: number;
  title: string;
  title_short: string;
  duration: number;
  album: {
    cover_small: string;
    cover_big: string;
  };
  artist: {
    name: string;
  };
}

export interface BannerProps {
  children: React.ReactNode;
  showBg: boolean;
  showBorder: boolean;
  image?: string;
  blur?: boolean;
}
