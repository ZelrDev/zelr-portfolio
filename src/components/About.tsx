import Card from "./Card";
import Image from "./Image";
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import TechnologyElement from "./TechnologyElement";

library.add(fab, faDiscord);

export default function About() {
  return (
    <div className="max-w-6xl px-7 xl:px-0 mx-auto space-y-24">
      <div className="flex justify-start md:items-center md:gap-20 gap-5 md:flex-row flex-col">
        <Image
          width="210"
          height="210"
          src="https://avatars.githubusercontent.com/u/85405932"
        />
        <div className="space-y-5">
          <div>
            <h2 className="font-brand text-6xl text-title">zelr</h2>
            <p className="font-alt2 text-2xl font-semibold text-brand-dark">
              software developer
            </p>
          </div>
          <div>
            <p className="text-gray font-alt text-md">
              Hi, I'm zelr. I've been coding for 3 years and I am experienced in
              React {"&"} Typescript. I have built a couple projects such as
              BetterCharts and Netor. I use VSCode as my IDE and usually use
              Debian on WSL. My favourite hosting platforms Heroku{" "}
              {"(for Python & Elixir)"} and Vercel for web hosting.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Card className="rounded-3xl">
          <div className="md:px-16 px-10 py-3 flex font-alt text-md text-title md:flex-row flex-col gap-3">
            <div className="flex md:justify-center items-center gap-2 w-full">
              <LocationMarkerIcon className="text-brand-dark w-8" />
              <p>UK, Nottingham</p>
            </div>
            <div className="flex md:justify-center items-center gap-2 w-full">
              <MailIcon className="text-brand-dark w-8" />
              <p>{"jacob@zelr.me"}</p>
            </div>
            <div className="flex md:justify-center items-center gap-2 w-full">
              <FontAwesomeIcon
                className="text-brand-dark h-7"
                icon={["fab", "discord"]}
              />
              <p>zelr#5635</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex gap-10 flex-wrap md:flex-row flex-colr">
        <TechnologyElement name="Typescript" text="TS" completed={0.75} />
        <TechnologyElement name="React" text="R" completed={0.85} />
        <TechnologyElement name="Python" text="PY" completed={0.6} />
        <TechnologyElement name="Elixir" text="EX" completed={0.5} />
      </div>
    </div>
  );
}
