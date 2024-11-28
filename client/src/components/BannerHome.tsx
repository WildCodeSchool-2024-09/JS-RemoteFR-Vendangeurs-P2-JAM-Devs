import { Link } from "react-router-dom";
import PlayButton from "./PlayButton";

interface BannerHomeProp {
  id: number | undefined;
  picture: string | undefined;
  title: string | undefined;
}

function BannerHome({ id, picture, title }: BannerHomeProp) {
  return (
    <div className="flex flex-col laptop:flex-row justify-between items-center mx-auto p-4 ">
      <div className="flex laptop:w-1/2">
        <Link to={`playlist/${id}`}>
          <img
            src={picture}
            alt="playlist"
            className="w-52 h-52 rounded-md laptop:w-80 laptop:h-80"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-start items-center laptop:w-2/3 laptop:gap-y-6">
        <Link to={`playlist/${id}`}>
          <h1 className="my-4 text-3xl laptop:text-6xl text-primary font-title w-full">
            {title}
          </h1>
        </Link>
        <PlayButton playlistId={id} />
      </div>
    </div>
  );
}

export default BannerHome;
