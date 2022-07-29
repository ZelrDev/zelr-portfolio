import Card from "./Card";
import Image from "./Image";
import NextImage from "next/image";
import Link from "next/link";

export default function Netor() {
  return (
    <div className="space-y-32 bg-light-gray py-16">
      <div className="lg:px-20 md:px-10 px-5 space-y-10">
        <Link passHref href="/">
          <p className="font-alt2 text-2xl text-title font-black hover:border-b-2 hover:border-b-title cursor-pointer border-b-2 border-b-transparent transition-all pb-1 top-10 fixed">
            go back
          </p>
        </Link>

        <div className="flex justify-center">
          <NextImage width="96" height="96" src="/images/netor.png" />
        </div>

        <div className="text-center font-serif text-title text-6xl">Netor</div>
        <div
          className={`w-52 h-52 absolute opacity-[30%] rounded-full grad-circle left-1/2 -translate-x-1/2 ml-32 -translate-y-32`}
        ></div>
        <div className="text-center max-w-lg mx-auto font-alt2 font-black text-lg text-netor-text">
          Netor is a Discord bot that ditches normal discord authentication and
          uses links to automatically authenticate you with a server with
          features that intregrate with current Discord moderation features.
        </div>
        <div className="pt-28 space-y-5">
          <h2 className="font-serif text-title text-3xl">How does it work?</h2>
          <div className="max-w-lg font-alt2 font-black text-md text-netor-text">
            Netor uses an Elixir based API to ensure speed and reliablity. The
            dashboard is based on React {"("} NextJS {")"}, and the Discord Bot
            itself is coded in Python using the discord.py library.
          </div>
        </div>
        <Image
          height="886"
          width="1706.66666667"
          borderRadius={20}
          src="/images/netor-ums.png"
        />
        <div className="flex justify-start">
          <div className="space-y-5 text-left">
            <h2 className="font-serif text-title text-3xl">Development</h2>
            <div className="max-w-lg font-alt2 font-black text-md text-netor-text">
              It is currently in a development phase as it was originally built
              with Remix.JS, however was rebuilt in favour of Next.JS with a
              Elixir API. Set to release mid 2023.
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="space-y-5 text-right">
            <h2 className="font-serif text-title text-3xl">Styling</h2>
            <div className="max-w-lg font-alt2 font-black text-md text-netor-text">
              Underneath the React Dashboard is the UI framework Mantine. It has
              been styled with slightly different fonts in the later builds and
              uses Hero Icons.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
