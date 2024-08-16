import { ButtonHTMLAttributes } from "react";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: React.ReactNode;
  buttonVariant: "solid1" | "outline1";
  buttonSize?: "round" | "";
}

export function Button({
  children,
  buttonVariant,
  buttonSize = "",
  ...rest
}: Props) {
  const buttonClassName = `button ${buttonVariant} ${buttonSize}`;

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
}
