import type { Track } from "../types/type";
import formatDuration from "../utils/formatDuration";

function TrackList({
  title,
  duration,
  artist,
  imageBig,
  imageSmall,
  index,
}: Track) {
  return (
    <li className="text-primary flex justify-between items-center gap-y-8 gap-x-4 laptop:gap-20 border-secondary-250 border-b-4 w-full max-w-[800px] p-4 laptop:py-6 laptop:px-8 hover:bg-primary/5">
      <div className="flex justify-center items-center gap-10">
        <span className="hidden laptop:block text-lg w-6 text-center">
          {index + 1}
        </span>
        <div className="bg-secondary-200 w-[60px] h-[60px] laptop:w-[100px] laptop:h-[100px] rounded-full flex items-center justify-center">
          <img
            src={window.innerWidth > 1024 ? imageBig : imageSmall}
            alt={`Vignette de ${title}`}
            className="rounded-full border-2 border-accent w-14 h-14 laptop:w-24 laptop:h-24"
          />
        </div>
      </div>
      <div className="w-52 laptop:w-56 text-start laptop:text-center">
        <p className="font-text font-bold">{artist?.name}</p>
        <p className="text-sm">{title}</p>
      </div>
      <p>{formatDuration(duration)}</p>
    </li>
  );
}

export default TrackList;
