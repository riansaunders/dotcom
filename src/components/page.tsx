import { Navbar } from "./navbar";

interface PageProps {
  children?: React.ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className={" text-white"}>
      <Navbar />
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-8 pt-5 px-8">
        {children}
      </div>
    </div>
  );
}
