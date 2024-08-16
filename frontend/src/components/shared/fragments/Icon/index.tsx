interface Props {
  icon: "close" | "search" | "add";
}

export function Icon({ icon }: Props) {
  return <span className="material-symbols-outlined">{icon}</span>;
}
