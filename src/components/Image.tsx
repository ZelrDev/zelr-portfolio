export default function Image({
  src,
  borderRadius = 50,
}: {
  src: string;
  borderRadius?: number;
}) {
  return (
    <div
      style={{
        flexBasis: 224,
        borderRadius: borderRadius,
      }}
      className="white-glow w-full flex-grow-0 flex-shrink-0"
    >
      <div
        style={{
          borderRadius: "inherit",
        }}
        className="w-full bg-white shadow-2xl border-8 border-background flex justify-center items-center overflow-hidden"
      >
        <img className="flex-shrink-0" src={src} />
      </div>
    </div>
  );
}
