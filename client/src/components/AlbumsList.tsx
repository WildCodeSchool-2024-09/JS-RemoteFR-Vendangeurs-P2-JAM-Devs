import { Link } from "react-router-dom";
import type { Albums } from "../types/type";

function AlbumsList({
  album,
  topAlbums,
}: { album: Albums; id: number; topAlbums: Albums[] }) {
  return (
    <>
      {topAlbums[0].id === album.id ? null : (
        <article className="flex flex-col-reverse justify-center items-center gap-y-4">
          <p className="text-primary font-text text-sm w-40 h-20 laptop:h-24 text-center">
            {album.title}
          </p>
          <div className="bg-secondary-100 w-[136px] h-[136px] flex justify-center items-center rounded-md">
            <Link to={`/album/${album.id}`}>
              <img
                src={album.cover}
                alt={`Couverture de ${album.title}`}
                className="w-32 h-32 rounded-md border-accent border-4 laptop:w-30 laptop:h-30"
              />
            </Link>
          </div>
        </article>
      )}
    </>
  );
}

export default AlbumsList;
