import type { Artist } from "../types/type";

interface ArtistProps {
  dataArtist: Artist[];
}
function Artists({ dataArtist }: ArtistProps) {
  return (
    <section className="mb-8 w-full laptop:my-20">
      <h2 className="font-title text-primary mb-6 text-3xl text-center laptop:text-6xl">
        Artistes
      </h2>
      <div className="w-full px-2 laptop:px-10 ">
        <div className="flex justify-start gap-4 w-full laptop:gap-11 overflow-x-scroll">
          {dataArtist.map((artist) => {
            return (
              <article key={artist.id} className="ml-10">
                <div className="justify-center items-center flex flex-col gap-2 flex-shrink-0">
                  <div className="bg-secondary-100 w-[136px] h-[136px] rounded-full justify-center items-center flex laptop:w-[135px] laptop:h-[135px]">
                    <img
                      src={artist.picture}
                      alt="coup de coeur"
                      className="w-32 h-32 rounded-full border-4 border-accent laptop:w-30 laptop:h-30"
                    />
                  </div>
                  <span className="text-primary laptop:text-lg font-text max-w-36 text-center">
                    {artist.name}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Artists;
