import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

type Ref = ForwardedRef<HTMLInputElement>;

export const Input = forwardRef(({ label, ...rest }: Props, ref: Ref) => {
  return (
    <div className="field">
      {label ? <label htmlFor={rest.id}>{label}</label> : null}
      <input ref={ref} {...rest} />
    </div>
  );
});
