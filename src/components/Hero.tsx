import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import PageHeader from "./PageHeader";
import Title from "./Title";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ArrowDownIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

library.add(fab, faGithub);

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const scrollListener = function (e) {
    setScrolled(true);
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollListener);
    return () => document.removeEventListener("scroll", scrollListener);
  });
  return (
    <div className="p-4 mx-auto min-h-screen flex justify-center items-center flex-col">
      <PageHeader mainText="zelr" backgroundText="portfolio" className="py-16">
        <p className="flex md:gap-20 gap-5 justify-center text-white font-semibold text-lg">
          <div>2</div>
          <div>0</div>
          <div>2</div>
          <div>2</div>
        </p>
        <p className="flex md:gap-20 gap-5 justify-center mt-2 -ml-5 text-white font-semibold text-lg opacity-50">
          <div>2</div>
          <div>0</div>
          <div>2</div>
          <div>2</div>
        </p>
      </PageHeader>

      <div className="z-20 flex flex-col justify-center items-center gap-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.25,
          }}
        >
          <a href="https://github.com/zelrdev" target="_blank">
            <Button>
              <span className="inline-flex justify-center items-center gap-3">
                <FontAwesomeIcon className="h-4" icon={["fab", "github"]} />
                view on github
              </span>
            </Button>
          </a>
        </motion.div>
        {/* <a className="text-title border-b-2 pb-1 cursor-pointer decoration-transparent tracking-[.15rem] font-alt inline-flex justify-center items-center gap-3">
          <FontAwesomeIcon className="h-5" icon={["fab", "github"]} />
          View on Github
        </a> */}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 100 }}
        transition={{
          delay: 1.5,
        }}
        className={`bottom-10 absolute font-alt2 text-xl font-bold text-title inline-flex justify-center items-center gap-3 transition duration-1000 animate-bounce`}
      >
        <ArrowDownIcon height={30} />
        Scroll down
      </motion.div>
    </div>
  );
}
