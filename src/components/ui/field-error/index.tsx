import * as React from "react";

type FieldErrorProps = {
  errorMessage: string | undefined;
};

const FieldError = ({ errorMessage }: FieldErrorProps) => {
  if (!errorMessage) return null;
  return <p className="text-xs text-red-800">{errorMessage}</p>;
};

export default FieldError;
