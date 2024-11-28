import LogoJam from "../assets/icons/LogoJamOrange.svg";

export default function Loader() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center laptop:gap-24 gap-14 py-16 laptop:py-20">
      <h2 className="laptop:text-6xl text-3xl text-primary font-title animate-pulse text-center">
        Chargement en cours...
      </h2>
      <div className=" flex justify-center items-center w-60 h-60 rounded-full bg-gradient-to-br from-accent to-secondary-100 animate-spin">
        <div className="w-28 h-28 rounded-full bg-background flex justify-center items-center">
          <img src={LogoJam} alt="Logo du site" className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
}
