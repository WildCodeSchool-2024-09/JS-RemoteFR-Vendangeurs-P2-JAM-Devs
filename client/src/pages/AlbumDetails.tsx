import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../components/BannerSection";
import HeroBanner from "../components/HeroBanner";
import TrackList from "../components/TrackList";
import Wrapper from "../components/Wrapper";
import type { Albums, Track } from "../types/type";

function AlbumDetails() {
  const { id } = useParams();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [album, setAlbum] = useState<Albums | null>(null);

  useEffect(() => {
    if (id) {
      Promise.all([
        fetch(`/api/album/${id}/tracks`).then((response) => response.json()),
        fetch(`/api/album/${id}`).then((response) => response.json()),
      ])
        .then(([dataTracks, dataAlbum]) => {
          setTracks(dataTracks.data);
          setAlbum(dataAlbum);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  return (
    <div className="laptop:flex laptop:flex-col laptop:gap-y-20">
      <BannerSection
        showBg={true}
        showBorder={true}
        image={album?.cover_big}
        blur={false}
      >
        <HeroBanner
          cover={album?.cover_big}
          title={album?.title}
          release={album?.release_date}
          nbFan={album?.fans}
        />
      </BannerSection>

      <Wrapper variantWidth={false}>
        {tracks?.length > 0 ? (
          tracks.map((track, index) => (
            <ul key={track.id}>
              <TrackList
                title={track.title_short}
                duration={track.duration}
                artist={track.artist}
                imageBig={album?.cover_big}
                imageSmall={album?.cover_small}
                index={index}
              />
            </ul>
          ))
        ) : (
          <p>Chargement des pistes...</p>
        )}
      </Wrapper>
    </div>
  );
}

export default AlbumDetails;
