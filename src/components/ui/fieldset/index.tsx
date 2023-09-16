import { classnames } from "@/lib/utils/classnames";
import * as React from "react";

type FieldSetProps = {
  children: React.ReactNode;
  className?: string;
};

const FieldSet = ({ children, className }: FieldSetProps) => {
  return (
    <fieldset className={classnames("flex flex-col space-y-1", className)}>
      {children}
    </fieldset>
  );
};

export default FieldSet;
