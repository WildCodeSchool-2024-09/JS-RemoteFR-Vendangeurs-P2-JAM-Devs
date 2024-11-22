import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AlbumsList from "../components/AlbumsList";
import BannerSection from "../components/BannerSection";
import HeroBanner from "../components/HeroBanner";
import TopAlbum from "../components/TopAlbum";
import TrackList from "../components/TrackList";
import Wrapper from "../components/Wrapper";
import type { Albums, Artist, Track } from "../types/type";

function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [albums, setAlbums] = useState<Albums[]>([]);
  const [topAlbums, setTopAlbums] = useState<Albums[]>([]);
  const [tracksTopAlbum, setTracksTopAlbum] = useState<Track[]>([]);
  const [artistRelated, setArtistRelated] = useState<Artist[]>([]);

  useEffect(() => {
    if (id) {
      Promise.all([
        fetch(`/api/artist/${id}`).then((response) => response.json()),
        fetch(`/api/artist/${id}/albums`).then((response) => response.json()),
        fetch(`/api/artist/${id}/related&limit=6`).then((response) =>
          response.json(),
        ),
      ])
        .then(([artistData, albumsData, artistRelatedData]) => {
          setArtist(artistData);
          const albumsList = albumsData.data;

          const albumWithMostFans = albumsList.reduce(
            (max: Albums, album: Albums) => {
              const maxFans = max.fans ?? 0;
              const albumFans = album.fans ?? 0;
              return albumFans > maxFans ? album : max;
            },
            albumsList[0],
          );

          setTopAlbums([albumWithMostFans]);
          setAlbums(albumsList);
          setArtistRelated(artistRelatedData.data);

          if (albumWithMostFans.id) {
            fetch(`/api/album/${albumWithMostFans.id}/tracks`)
              .then((response) => response.json())
              .then((data) => {
                setTracksTopAlbum(data.data);
              })
              .catch((error) => console.error(error));
          }
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <>
      {/* Banner */}
      {artist ? (
        <BannerSection
          showBg={true}
          showBorder={true}
          image={artist.picture}
          blur={false}
        >
          <HeroBanner
            name={artist.name}
            picture={artist.picture_medium}
            nbFan={artist.nb_fan}
          />
        </BannerSection>
      ) : (
        <p className="text-primary">Chargement...</p>
      )}

      {/* Top Album Track List */}

      {topAlbums ? (
        <>
          <TopAlbum
            id={topAlbums[0]?.id}
            cover={topAlbums[0]?.cover_medium}
            title={topAlbums[0]?.title}
            release={topAlbums[0]?.release_date}
            nbFan={topAlbums[0]?.fans}
          />

          <Wrapper variantWidth={false}>
            {tracksTopAlbum.map((track, index) => (
              <ul
                key={track.id}
                className="w-full mx-auto flex flex-col items-center"
              >
                <TrackList
                  title={track.title_short}
                  duration={track.duration}
                  artist={track.artist}
                  imageBig={topAlbums[0].cover_big}
                  imageSmall={topAlbums[0].cover_small}
                  index={index}
                />
              </ul>
            ))}
          </Wrapper>
        </>
      ) : (
        <p className="text-primary">Chargement...</p>
      )}

      {/* Album List */}
      {albums ? (
        <section className="flex flex-col gap-y-14 laptop:gap-y-20 my-10 laptop:my-20">
          <Wrapper variantWidth={true}>
            <h2 className="text-primary text-3xl laptop:text-6xl font-bold  laptop:pl-3 font-title laptop:self-start">
              Albums de {artist?.name}
            </h2>
          </Wrapper>

          <Wrapper variantWidth={false}>
            <div className="flex overflow-y-auto scrollbar-hide laptop:grid laptop:grid-cols-5 laptop:justify-envenly laptop:gap-4 w-full">
              {albums.map((album) => (
                <AlbumsList
                  key={album.id}
                  album={album}
                  id={album.id}
                  topAlbums={topAlbums}
                />
              ))}
              {albums ? (
                ""
              ) : (
                <a
                  href={`https://www.deezer.com/fr/artist/${id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-40 h-36 flex justify-center items-start"
                >
                  <div className="bg-secondary-100 w-[136px] h-[136px] flex justify-center items-center rounded-full">
                    <div className="w-32 h-32 bg-background rounded-full border-accent border-4 flex justify-center items-center">
                      <p className="text-accent text-center font-text font-bold text-xs">
                        Voir l'artiste sur Deezer
                      </p>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </Wrapper>
        </section>
      ) : (
        <p className="text-primary">Chargement...</p>
      )}

      {/* Artistes Similaires */}
      {artistRelated.length > 0 ? (
        <section className="flex flex-col gap-y-14 laptop:gap-y-20 my-10 laptop:my-20">
          <Wrapper variantWidth={true}>
            <h2 className="text-primary text-3xl laptop:text-6xl font-bold laptop:pl-3 font-title laptop:self-start">
              Artistes similaires à {artist?.name}
            </h2>
          </Wrapper>
          <Wrapper variantWidth={false}>
            <div className="flex overflow-y-auto scrollbar-hide laptop:grid laptop:grid-cols-6 laptop:justify-envenly laptop:gap-4 w-full">
              {artistRelated.map((artistRelated) => (
                <article
                  key={artistRelated.id}
                  className="flex flex-col-reverse justify-center items-center gap-y-4"
                >
                  <p className="text-primary font-text text-sm w-40 h-20 laptop:h-24 text-center">
                    {artistRelated.name}
                  </p>
                  <div className="bg-secondary-100 w-[136px] h-[136px] flex justify-center items-center rounded-full">
                    <Link to={`/artist/${artistRelated.id}`}>
                      <img
                        src={artistRelated.picture}
                        alt={`Vignette de ${artistRelated.name}`}
                        className="w-32 h-32 rounded-full border-accent border-4 laptop:w-30 laptop:h-30"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Wrapper>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default ArtistPage;
