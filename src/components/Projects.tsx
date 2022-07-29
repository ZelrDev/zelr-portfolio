import Bettercharts from "./Bettercharts";
import Card from "./Card";
import Image from "./Image";
import Netor from "./Netor";
import PageHeader from "./PageHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="pt-52">
      <div className="flex justify-center pb-32">
        <PageHeader
          colorPos="left"
          backgroundText="portfolio"
          mainText="projects"
          className="py-16"
        />
      </div>
      <div className="flex gap-7 p-10 flex-col lg:flex-row">
        <ProjectCard
          name="BetterCharts"
          description="A ClassCharts experience that is more simple and quicker to use."
          link="/bettercharts"
          image={{
            url: "/images/bc-tw-beh.png",
            height: "900",
            width: "1600",
          }}
        />
        <ProjectCard
          name="Netor"
          description="A Discord Bot that fully integrates with Discord's new
                features."
          link="/netor"
          image={{
            url: "/images/netor-ums.png",
            height: "886",
            width: "1706.66666667",
          }}
        />
      </div>
    </div>
  );
}
