interface Props {
  icon:
    | "close"
    | "search"
    | "add"
    | "map"
    | "mail"
    | "phone"
    | "location_on"
    | "dark_mode"
    | "light_mode";
}

export function Icon({ icon }: Props) {
  return <span className="material-symbols-outlined">{icon}</span>;
}
