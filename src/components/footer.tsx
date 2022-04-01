export const Footer = () => {
  return (
    <footer
      className={"items-center justify-center mt-6  w-full bg-black text-white"}
    >
      <div className={"pl-4 pr-4 md:pl-32 md:pr-32 flex-grow pt-4 pb-4 h-100"}>
        <div className={"mt-3"}></div>
        <div>
          <span className={"text-xs"}>
            Made with ❤️ using{" "}
            <a href="https://nextjs.com" className="underline">
              NextJS
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com" className="underline">
              TailwindCSS
            </a>
            . Check out the{" "}
            <a
              href="https://github.com/riansaunders/dotcom"
              target="_blank"
              className={"underline"}
            >
              Source Code
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
