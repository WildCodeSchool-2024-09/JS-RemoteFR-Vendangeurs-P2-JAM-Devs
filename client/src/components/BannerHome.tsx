import { Link } from "react-router-dom";
import Play from "../assets/icons/Play.svg";

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
        <button
          type="button"
          className="flex justify-center items-center bg-accent laptop:my-2 rounded-full w-12 h-12 laptop:w-14 laptop:h-14"
        >
          <img src={Play} alt="play" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default BannerHome;
