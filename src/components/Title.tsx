import { DetailedHTMLProps, HTMLAttributes } from "react";

interface TitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  className?: string;
}

export default function Title({ className, children, ...props }: TitleProps) {
  return (
    <h1 {...props} className={`font-title tracking-widest ${className}`}>
      {children}
    </h1>
  );
}
