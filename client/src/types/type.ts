export interface Artist {
  id: number;
  name: string;
  picture: string;
  error: string;
  picture_small: string;
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
  preview: string;
  album: {
    cover_small: string;
    cover_big: string;
  };
  artist: Artist;
}

export interface BannerProps {
  children: React.ReactNode;
  showBg: boolean;
  showBorder: boolean;
  image?: string;
  blur?: boolean;
}
