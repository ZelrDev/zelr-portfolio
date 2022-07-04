import { motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import Title from "./Title";

export default function PageHeader({
  mainText,
  backgroundText,
  children,
  className,
  colorPos = "right",
  ...props
}: {
  mainText: string;
  backgroundText: string;
  colorPos?: "left" | "right";
  children?: any;
  className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`flex items-center justify-center pointer-events-none ${className}`}
    >
      <div className="absolute container flex justify-center items-center h-full w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{
            delay: 1.1,
          }}
          viewport={{ once: true }}
          className={`w-52 h-52 absolute rounded-full ${
            colorPos === "right" ? "ml-64" : "mr-64"
          } grad-circle`}
        ></motion.div>

        <div className="absolute leading-[0px] text-white opacity-50">
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Title className="opacity-20 mb-9 text-[16rem]">
              {backgroundText}
            </Title>
          </motion.div>
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            transition={{
              delay: 0.1,
            }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Title className="opacity-30 mb-9 text-[16rem]">
              {backgroundText}
            </Title>
          </motion.div>
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <Title className="opacity-50 text-[16rem]">{backgroundText}</Title>
          </motion.div>
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >
            <Title className="opacity-30 mt-9 text-[16rem]">
              {backgroundText}
            </Title>
          </motion.div>
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            <Title className="opacity-20 mt-9 text-[16rem]">
              {backgroundText}
            </Title>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.4,
          type: "spring",
          stiffness: 70,
        }}
        viewport={{ once: true }}
        className="text-center z-10"
      >
        <Title className="lg:text-[9rem] md:text-[7rem] text-7xl leading-tight text-title tracking-widest">
          {mainText}
        </Title>
        {children}
      </motion.div>
    </div>
  );
}
