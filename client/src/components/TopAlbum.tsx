import type { Albums } from "../types/type";
import { formatDate } from "../utils/formatDate";
import formatNb from "../utils/formatNb";
import Wrapper from "./Wrapper";

function TopAlbum({ cover, title, release, nbFan }: Albums) {
  return (
    <Wrapper variantWidth={true}>
      <section className="flex flex-col gap-y-16 laptop:gap-y-20 my-10 laptop:my-20">
        <h2 className="text-primary text-3xl laptop:text-6xl font-bold text-center laptop:pl-3 font-title laptop:self-start">
          Album le plus populaire
        </h2>
        <div className="flex flex-col laptop:flex-row justify-center gap-4 laptop:gap-60 items-center w-full border-b-2 laptop:border-b-2 border-secondary-250 pb-8">
          <img
            src={cover}
            alt={`Pochette de l'album ${title}`}
            className="w-32 h-32 rounded-md border-accent border-4"
          />
          <div>
            <h3 className="font-title text-center text-primary text-2xl laptop:text-4xl pb-2">
              {title}
            </h3>
            <div className="flex justify-center items-center gap-4">
              <code className="text-xs font-bold laptop:text-md text-primary font-text text-center bg-accent/50 rounded-md py-1 px-3 border-accent/70 border-2">
                {formatDate(`${release}`)}
              </code>
              <code className="text-xs font-bold laptop:text-md text-primary font-text text-center bg-secondary-200/50 rounded-md py-1 px-3 border-secondary-200/70 border-2">
                {formatNb(nbFan)} <span>Fans</span>
              </code>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default TopAlbum;
