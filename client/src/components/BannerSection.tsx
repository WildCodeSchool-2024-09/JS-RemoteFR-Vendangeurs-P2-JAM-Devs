import type { SectionBannerProps } from "../types/type";

function BannerSection({
  children,
  showBg,
  showBorder,
  image,
  blur,
}: SectionBannerProps) {
  return (
    <div className="relative">
      {image && (
        <img
          src={image}
          alt="Décoration de fond"
          className="absolute -z-20 w-full h-60 laptop:h-80 border-none"
        />
      )}
      <section
        className={`relative z-10 flex flex-col justify-center items-center w-full h-1/2 laptop:min-h-96 ${showBg ? "bg-secondary-200/40 backdrop-blur-3xl" : ""} ${showBorder ? "border-b-8 border-secondary-200" : ""}`}
      >
        {blur && (
          <div className="absolute top-18 -z-10 w-full h-72 laptop:h-96 blur-3xl bg-secondary-200/40" />
        )}
        {children}
      </section>
    </div>
  );
}

export default BannerSection;
