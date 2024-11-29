import type { Artist, Playlist } from "../types/type";
import getRandomIds from "../utils/getRandomIds";
import shuffleArray from "../utils/shuffleArray";

const BASE_URL = "https://proxyapideezer.vercel.app/api";

// ********************** Fetch HomePage ***************************

// Playlist Top Banner
export async function searchBannerPlaylist(): Promise<Playlist | undefined> {
  try {
    const response = await fetch(`${BASE_URL}/chart/0/playlists`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches de playlist");
    }
    const data = await response.json();

    const shufflePlaylists: Playlist[] = shuffleArray(data.data);

    return shufflePlaylists[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchBannerPlaylist:", error.message);
    } else {
      console.error("Erreur inconnue dans searchBannerPlaylist");
    }
  }
}

// Playlists Home
export async function searchPlaylistHome() {
  const allPlaylistIds = [
    652109905, 751764391, 6156189524, 2474689942, 9559882142, 7532900862,
    11370702624, 11237471584, 6528108984, 9911094822, 7182512544, 6791265584,
    7182460504, 9959210002, 10820158102, 1390327745, 1581126725, 1290316405,
    1203212111, 1163842311, 705469375, 2268939442, 1600104235, 1075547691,
    1602108955, 178699142, 1911222042, 2153050122, 1082651151, 1044663671,
  ];
  const randomPlaylistId = getRandomIds(allPlaylistIds, 5);
  const playlistData: Playlist[] = [];

  for (const id of randomPlaylistId) {
    try {
      const response = await fetch(`${BASE_URL}/playlist/${id}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la recherche des playlists");
      }
      const data = await response.json();
      if (data && data) {
        playlistData.push(data);
      } else {
        console.error(`Aucune donnée trouvée pour la playlist ${id}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erreur dans searchPlaylist:", error.message);
      } else {
        console.error("Erreur inconnue dans searchPlaylist");
      }
    }
  }

  return playlistData;
}

// Artists Home
export async function searchArtistsHome() {
  const allArtistId = [
    13923487, 7010729, 7829130, 4331, 4872268, 4429712, 10189104, 1562681,
    9635624, 1164295, 482, 719, 174, 4050205, 1, 2519, 9, 10246324, 14107147,
    171885277, 705, 58707, 168047437, 308253, 1042268, 13358, 7912872, 5497121,
    457, 5542423,
  ];
  const randomPlaylistId = getRandomIds(allArtistId, 5);
  const artistData: Artist[] = [];

  for (const id of randomPlaylistId) {
    try {
      const response = await fetch(`${BASE_URL}/artist/${id}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la recherche des playlists");
      }
      const data = await response.json();
      if (data && data) {
        artistData.push(data);
      } else {
        console.error(`Aucune donnée trouvée pour la playlist ${id}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erreur dans searchArtistsHome:", error.message);
      } else {
        console.error("Erreur inconnue dans searchArtistsHome");
      }
    }
  }
  return artistData;
}

// ********************** Fetch Playlists ******************************

// Playlist
export async function searchPlaylist(id: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/playlist/${id}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchPlaylist:", error.message);
    } else {
      console.error("Erreur inconnue dans searchPlaylist");
    }
  }
}

// Playlists Tracks
export async function searchPlaylistTracks(id: string | number | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/playlist/${id}/tracks`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchPlaylistTracks:", error.message);
    } else {
      console.error("Erreur inconnue dans searchPlaylistTracks");
    }
  }
}

// ********************** Fetch Artists ******************************

// Artists
export async function searchArtist(id: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/artist/${id}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchArtist:", error.message);
    } else {
      console.error("Erreur inconnue dans searchArtist");
    }
  }
}

// Artist Albums
export async function searchArtistAlbums(id: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/artist/${id}/albums`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchArtistAlbums:", error.message);
    } else {
      console.error("Erreur inconnue dans searchArtistAlbums");
    }
  }
}

// Related Artists
export async function searchRelatedArtsits(id: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/artist/${id}/related`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchRelatedArtsits:", error.message);
    } else {
      console.error("Erreur inconnue dans searchRelatedArtsits");
    }
  }
}

// Album With Most Fans
export async function searchAlbumWithMostFans(id: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/album/${id}/tracks`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchAlbumWithMostFans:", error.message);
    } else {
      console.error("Erreur inconnue dans searchAlbumWithMostFans");
    }
  }
}

// ********************** Fetch Albums ******************************

// Album
export async function searchAlbum(id: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/album/${id}/`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchAlbum:", error.message);
    } else {
      console.error("Erreur inconnue dans searchAlbum");
    }
  }
}

// Albums Tracks
export async function searchAlbumsTracks(id: string | number | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/album/${id}/tracks`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchAlbumsTracks:", error.message);
    } else {
      console.error("Erreur inconnue dans searchAlbumsTracks");
    }
  }
}

// ********************** Fetch Search ******************************

// Search Query Artist
export async function searchQueryArtist(query: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/search/artist?q=${query}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchQueryArtist:", error.message);
    } else {
      console.error("Erreur inconnue dans searchQueryArtist");
    }
  }
}

// Search Query Album
export async function searchQueryAlbum(query: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/search/album?q=${query}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchQueryAlbum:", error.message);
    } else {
      console.error("Erreur inconnue dans searchQueryAlbum");
    }
  }
}

// Search Query Playlist
export async function searchQueryPlaylist(query: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/search/playlist?q=${query}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchQueryPlaylist:", error.message);
    } else {
      console.error("Erreur inconnue dans searchQueryPlaylist");
    }
  }
}

// Search Query Track
export async function searchQueryTrack(query: string | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/search/track?q=${query}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchQueryTrack:", error.message);
    } else {
      console.error("Erreur inconnue dans searchQueryTrack");
    }
  }
}

// ********************** Fetch Track ******************************

// Track
export async function searchTrack(id: string | number | undefined) {
  try {
    const response = await fetch(`${BASE_URL}/track/${id}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la recherches des pistes d'une playlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur dans searchTrack:", error.message);
    } else {
      console.error("Erreur inconnue dans searchTrack");
    }
  }
}
