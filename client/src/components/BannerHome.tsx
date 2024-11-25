import Play from "../assets/icons/Play.svg";
import face_album from "../assets/icons/album_face.webp";

function BannerHome() {
  return (
    <div className="laptop:flex laptop:gap-64">
      <div className="flex justify-center">
        <img
          src={face_album}
          alt="playlist"
          className="w-52 h-52 rounded-md laptop:w-80 laptop:h-80"
        />
      </div>
      <div>
        <h1 className="my-4 text-3xl laptop:text-6xl text-primary font-title">
          Titre de la playlist
        </h1>
        <p className="text-primary text-sm font-text laptop:w-96 laptop:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          aperiam itaque ipsum fugit pariatur eum iste, molestias velit
          incidunt, officiis dignissimos rerum commodi.
        </p>
        <div className="flex justify-end">
          <button
            type="button"
            className="flex bg-accent p-3 my-2 rounded-full"
          >
            <img src={Play} alt="play" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
