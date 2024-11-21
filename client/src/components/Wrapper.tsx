function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="mx-2 laptop:mx-auto laptop:w-1/2">{children}</div>;
}

export default Wrapper;
