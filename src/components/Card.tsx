export default function Card({
  children,
  className,
}: {
  children?: any;
  className?: string;
}) {
  return (
    <div className={`white-glow ${className}`}>
      <div
        className={`w-full h-full bg-background shadow-xl`}
        style={{
          borderRadius: "inherit",
        }}
      >
        {children}
      </div>
    </div>
  );
}
