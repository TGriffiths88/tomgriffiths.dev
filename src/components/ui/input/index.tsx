import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input
      className="border py-2 px-4 rounded-md text-sm"
      {...rest}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export default Input;
