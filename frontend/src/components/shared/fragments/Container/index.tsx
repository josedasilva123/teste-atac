import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  children: React.ReactNode;
}

export function Container({ children, ...rest }: Props) {
  return (
    <div {...rest} className="container">
      {children}
    </div>
  );
}
