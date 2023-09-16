"use client";
import { classnames } from "@/lib/utils/classnames";
import * as React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <textarea
        className={classnames("border p-4 rounded-md text-sm", className)}
        rows={8}
        ref={ref}
        {...rest}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
