interface Props {
  icon: "close";
}

export function Icon({ icon }: Props) {
  return <span className="material-symbols-outlined">{icon}</span>;
}
