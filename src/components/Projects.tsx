import Bettercharts from "./Bettercharts";
import Netor from "./Netor";
import PageHeader from "./PageHeader";

export default function Projects() {
  return (
    <div className="min-h-screen pt-52">
      <div className="flex justify-center pb-32">
        <PageHeader
          colorPos="left"
          backgroundText="portfolio"
          mainText="projects"
          className="py-16"
        />
      </div>
      <Netor />
      <Bettercharts />
    </div>
  );
}
