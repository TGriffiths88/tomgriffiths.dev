import * as React from "react";

type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
};

const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="uppercase text-xs tracking-wide font-bold"
    >
      {children}
    </label>
  );
};

export default Label;
