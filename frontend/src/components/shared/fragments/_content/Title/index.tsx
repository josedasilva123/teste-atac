import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4";
  titleSize: "one" | "two" | "three" | "four" | "five";
  textAlign?: "center" | "";
  titleColor?: "white" | "";
}

export function Title({
  children,
  tag,
  titleSize,
  textAlign = "",
  titleColor = "",
  ...rest
}: Props) {
  const titleClassName = `title ${titleSize} ${textAlign} ${titleColor}`;
  const properties = { ...rest, className: titleClassName };

  return (
    <>
      {tag === "h1" ? <h1 {...properties}>{children}</h1> : null}
      {tag === "h2" ? <h2 {...properties}>{children}</h2> : null}
      {tag === "h3" ? <h3 {...properties}>{children}</h3> : null}
      {tag === "h4" ? <h4 {...properties}>{children}</h4> : null}
    </>
  );
}
