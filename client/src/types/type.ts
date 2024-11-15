export interface Song {
  id: number;
  name: string;
  image: string;
  audio: string;
}

export interface Album {
  id: number;
  name: string;
  image: string;
  songs: Song[];
}

export interface Artist {
  id: number;
  name: string;
  image?: string;
  description: string;
  albums: Album[];
}

export interface Playlist {
  id: number;
  name: string;
  image?: string;
  songs: Song[];
}
