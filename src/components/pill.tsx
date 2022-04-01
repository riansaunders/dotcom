interface PillProps {
  text: string;
}

export function Pill({ text }: PillProps) {
  return (
    <div
      className={
        "bg-[#201B22] text-[#eee] mr-1 py-1 px-2 text-xs inline-block shadow-lg rounded-md select-none"
      }
    >
      {text}
    </div>
  );
}
