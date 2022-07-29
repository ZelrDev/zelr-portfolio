import Link from "next/link";
import Card from "./Card";
import Image from "./Image";

export default function ProjectCard({
  name,
  description,
  link,
  image,
}: {
  name: string;
  description: string;
  link: string;
  image: {
    height: string;
    width: string;
    url: string;
  };
}) {
  return (
    <div>
      <Card className="rounded-xl group w-full h-full">
        <div className="relative w-full h-full">
          <Link href={link} passHref>
            <div className="absolute w-full h-full flex justify-center items-center text-center bg-white group-hover:opacity-100 group-hover:bg-opacity-60 group-hover:backdrop-blur-md rounded-xl opacity-0 transition z-10 cursor-pointer duration-500">
              <h3 className="z-40 text-black text-5xl font-alt2 tracking-wider border-b-2 pb-2">
                click to view more
              </h3>
            </div>
          </Link>
          <div className="p-5 space-y-6 ">
            <Image
              height={image.height}
              width={image.width}
              borderRadius={20}
              src={image.url}
            />
            <div>
              <h2 className="text-4xl font-serif text-center">{name}</h2>
              <p className="text-center text-title font-alt2 font-black text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
