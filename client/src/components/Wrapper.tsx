function Wrapper({
  children,
  variantWidth,
}: { children: React.ReactNode; variantWidth?: boolean }) {
  return (
    <div
      className={`mx-2 laptop:mx-auto max-w-[1200px] ${variantWidth ? "laptop:w-3/4" : "laptop:w-1/2"}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
