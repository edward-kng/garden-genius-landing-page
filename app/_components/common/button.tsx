import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

export default function Button({onClick, children, disabled}: ButtonProps) {
    return (
        <button disabled={disabled} className={`rounded-full p-4 ${disabled ? "text-black" : "text-white bg-gg-primary"}`} {...onClick}>{children}</button>
    )
}