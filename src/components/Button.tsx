import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <div className="white-glow hover:white-glow-strong rounded-full active:scale-95 transition z-10">
      <button
        {...props}
        className={`tracking-widest text-button text-md font-title bg-background p-3 px-10 shadow-xl rounded-full ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
