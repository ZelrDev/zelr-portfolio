import Card from "./Card";
import Image from "./Image";

export default function Bettercharts() {
  return (
    <div className="space-y-32 py-16">
      <div className="lg:px-20 md:px-10 px-5 space-y-10">
        <div className="font-alt2 text-2xl text-title pb-20">project 2</div>

        <div className="text-center font-serif text-title text-6xl">
          Bettercharts
        </div>
        <div
          className={`w-52 h-52 absolute opacity-[30%] rounded-full grad-circle left-1/2 -translate-x-1/2 ml-32 -translate-y-32`}
        ></div>
        <div className="text-center max-w-lg mx-auto font-alt2 font-black text-lg text-brand-dark">
          Bettercharts is a more aesthetically pleasing version of ClassCharts.
          It{"'"}s aimed at creating the ClassCharts experience more simple and
          quicker to use.
        </div>
        <div className="lg:flex justify-between items-center">
          <div className="space-y-5">
            <h2 className="font-serif text-title text-3xl">The beginning</h2>
            <div className="max-w-lg font-alt2 font-black text-md text-brand-dark">
              At first Bettercharts was a slightly different UI change of
              ClassCharts, however as the project evolved it needed to have
              advantages over ClassCharts so it used Socket.IO to create a
              faster experience by adding caching.
            </div>
          </div>
          <div className="py-10 w-[500px]">
            <Image borderRadius={20} src="/images/bc-tw-dash.png" />
            <p className="font-alt2 text-brand-dark text-sm font-semibold pt-2">
              Image of Bettercharts Dashboard with TailwindUI
            </p>
          </div>
        </div>

        <div className="lg:flex justify-between items-center">
          <div className="w-[500px] py-10">
            <Image borderRadius={20} src="/images/bc-tw-beh.png" />
            <p className="font-alt2 text-brand-dark text-sm font-semibold text-right pt-2">
              Image of Bettercharts Behaviour with TailwindUI
            </p>
          </div>
          <div className="flex justify-end">
            <div className="space-y-5 text-right">
              <h2 className="font-serif text-title text-3xl">Speed</h2>
              <div className="max-w-lg font-alt2 font-black text-md text-brand-dark">
                There were many issues with BetterCharts, such as all requests
                having to go through a personal API server, because of CORS
                which blocked direct requests to ClassCharts, this impacted the
                speed and there should of been a cache at the BetterCharts API
                Server.
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="space-y-5 text-left">
            <h2 className="font-serif text-title text-3xl">
              Issues with the front-end
            </h2>
            <div className="max-w-lg font-alt2 font-black text-md text-brand-dark">
              The project was originally built with TailwindCSS and used
              components from TailwindUI. This was hard to maintain to my
              standard of UI, without months of work on it. This resulted of me
              quickly switching over to Mantine UI, which had it{"'"}s own
              issues.
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="space-y-5 text-right">
            <h2 className="font-serif text-title text-3xl">Mobile first</h2>
            <div className="max-w-lg font-alt2 font-black text-md text-brand-dark">
              A huge oversite of BetterCharts was making it web only which
              blocked out many mobile uses by making the official ClassCharts
              app easier to open then navigate to BetterCharts with a browser.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
