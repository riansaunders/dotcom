import { ShowcaseItem } from "../showcase-item";

export interface ShowcaseCardProps {
  showcase: ShowcaseItem;
  whiteBackground?: boolean;
  onClick: (showcase: ShowcaseItem) => void;
}

export function ShowcaseCard({ showcase, onClick }: ShowcaseCardProps) {
  return (
    <div
      className={
        "overflow-hidden border-transparent ease-in hover:border hover:border-[#fcdc4d]  hover:-translate-y-2 hover:opacity-75 h-64 w-full rounded-md col-span-3 md:col-span-1 transition-all cursor-pointer  p-3 bg-[#201B22] shadow-lg "
      }
      onClick={() => {
        onClick(showcase);
      }}
      key={`item-${showcase.name}`}
    >
      <div className={"w-full h-40"}>
        <img
          src={showcase.imageURL || "/person.png"}
          className={"rounded-md object-contain aspect-auto h-full w-full"}
          alt={showcase.name}
        />
      </div>
      <div className={"mt-2 font-semibold text-lg"}>{showcase.name}</div>
      <p className={"text-white/60 mt-1 text-sm truncate "}>
        {showcase.description}
      </p>
    </div>
  );
}
