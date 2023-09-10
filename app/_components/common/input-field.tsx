import { HTMLAttributes, InputHTMLAttributes } from "react";

interface InputFieldProps extends HTMLInputElement {
  blah?: string;
}

export default function InputField(
  props: InputHTMLAttributes<HTMLInputElement>,
) {
  return <input className="p-2 w-full border-2 rounded-lg" {...props} />;
}
