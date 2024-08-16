import { HTMLAttributes } from "react";

export type TextTags = "p" | "span";

export type TextColors = "white" | "";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: TextTags;
  textAlign?: "center" | "";
  textColor?: TextColors;
}

export function Text({
  children,
  tag,
  textAlign = "",
  textColor = "",
  ...rest
}: Props) {
  const textClassName = `text ${textAlign} ${textColor}`;

  const properties = { ...rest, className: textClassName };

  return (
    <>
      {tag === "p" ? <p {...properties}>{children}</p> : null}
      {tag === "span" ? <span {...properties}>{children}</span> : null}
    </>
  );
}
