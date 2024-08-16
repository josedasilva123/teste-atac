interface Props {
  icon: "close" | "search" | "add" | "map";
}

export function Icon({ icon }: Props) {
  return <span className="material-symbols-outlined">{icon}</span>;
}
