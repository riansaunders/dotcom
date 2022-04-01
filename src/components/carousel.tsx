import { useState } from "react";
import { items as showcases } from "../showcase-item";
const items = showcases.filter((i) => i.imageURL);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveNext = () => {
    if (currentIndex + 1 < items.length) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const item = items[currentIndex];

  return (
    <>
      <img
        src={item.imageURL}
        alt={item.name}
        className={"h-full w-full aspect-square object-contain"}
      />
      <div
        className={
          "relative  -top-96 left-0 h-full w-full opacity-0 hover:opacity-100 cursor-pointer "
        }
        onClick={moveNext}
      >
        <div
          className={
            "w-full text-center bg-black/60 rounded-sm text-lg p-2 text-white font-semibold select-none"
          }
        >
          {item.name}
        </div>
      </div>
    </>
  );
};

export default Carousel;
