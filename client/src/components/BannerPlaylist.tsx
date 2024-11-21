function BannerPlaylist({
  image,
  title,
}: {
  image: string | undefined;
  title: string | undefined;
}) {
  return (
    <div className="w-full h-1/2 laptop:h-96 relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover block"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#130E1D] to-transparent">
        {" "}
      </div>
    </div>
  );
}

export default BannerPlaylist;
