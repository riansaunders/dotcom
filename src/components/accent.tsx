interface AccentProps {
  color?: string;
}

export function Accent({ color }: AccentProps) {
  return (
    <div className={`rounded-md ml-1 w-16 border-4   border-[#${color}]`} />
  );
}
