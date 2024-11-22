import type { HeroBannerProps } from "../types/type.ts";
import { formatDate } from "../utils/formatDate.ts";
import formatNb from "../utils/formatNb.ts";

function HeroBanner({
  name,
  picture,
  nbFan,
  cover,
  title,
  release,
}: HeroBannerProps) {
  return (
    <div className="flex flex-col gap-3 py-4 laptop:flex-row justify-center items-center laptop:items-start  laptop:gap-60 laptop:w-1/2 h-60 laptop:h-80">
      {picture || cover ? (
        <img
          src={picture || cover}
          alt={name || title}
          className={`border-accent border-2 laptop:border-4 ${picture ? "rounded-full" : "rounded-lg"} -z-10 w-32 laptop:w-56`}
        />
      ) : (
        ""
      )}
      <div className="flex flex-col gap-2 text-center items-center laptop:text-start laptop:gap-y-2">
        <h2
          className={`text-3xl laptop:text-6xl text-primary font-title w-auto ${title ? "text-center" : ""}`}
        >
          {name || title}
        </h2>
        <div className="flex justify-center items-center gap-4">
          {release ? (
            <code className="text-xs font-bold laptop:text-md text-primary font-text text-center bg-accent/50 rounded-md py-1 px-3 border-accent/70 border-2">
              {formatDate(`${release}`)}
            </code>
          ) : (
            ""
          )}
          {nbFan ? (
            <code className="text-xs font-bold laptop:text-md text-primary font-text text-center bg-secondary-200/50 rounded-md py-1 px-3 border-secondary-200/70 border-2">
              {formatNb(nbFan)} <span>Fans</span>
            </code>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
