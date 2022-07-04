import Card from "./Card";

const calculateFraction = (numer: number, denom: number) => {
  let result = [];
  let finished = false;
  for (let i = 1; i <= denom; i++) {
    if (denom * numer > i) {
      result.push("100%");
    } else {
      if (!finished) {
        finished = true;
        result.push(`${(denom * numer - (i - 1)) * 100}%`);
      } else {
        result.push("0%");
      }
    }
  }
  return result;
};

export default function TechnologyElement({
  completed,
  text,
  name,
}: {
  completed: number;
  text: string;
  name: string;
}) {
  return (
    <div className="flex gap-7 w-72 items-center flex-grow">
      <Card className="rounded-[20px] flex-shrink flex-grow-0 h-16">
        <div className="p-3 w-16 h-16 flex justify-center items-center">
          <span className="text-center font-mirava text-brand-dark text-3xl pt-1">
            {text}
          </span>
        </div>
      </Card>
      <div className="space-y-2">
        <h3 className="font-mirava text-2xl text-title">{name}</h3>
        <div className="flex gap-5 items-end">
          <div className="gap-0.5 flex grid-cols-5 w-[98px] flex-wrap">
            {calculateFraction(completed, 10).map((percent, idx) => (
              <div key={idx} className="w-[18px] h-[18px] bg-gray rounded-md">
                <div
                  style={{
                    borderRadius: "inherit",
                    width: percent,
                    height: "100%",
                  }}
                  className={`bg-button`}
                ></div>
              </div>
            ))}
          </div>

          <span className="font-alt text-md font-bold text-title">
            {(completed * 100).toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
}
