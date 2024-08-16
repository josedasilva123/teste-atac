import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  tag: "p" | "span";
  textAlign?: "center" | "";
  titleColor?: "white" | "";
}

export function Text({
  children,
  tag,
  textAlign = "",
  titleColor = "",
  ...rest
}: Props) {
  const textClassName = `text ${textAlign} ${titleColor}`;

  const properties = { ...rest, className: textClassName };

  return (
    <>
      {tag === "p" ? <p {...properties}>{children}</p> : null}
      {tag === "span" ? <span {...properties}>{children}</span> : null}
    </>
  );
}
