import * as React from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: React.ReactNode;
}

const Form = ({ className, children, onSubmit }: FormProps) => {
  return (
    <form className="flex flex-col gap-y-3" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
