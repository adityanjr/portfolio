import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.8);
  }, []);

  return (
    <section className="my-5 pr-40 md:my-4 flex flex-col flex-wrap md:space-y-0 patterns">
      <div className="ml-auto w-50 md:w-50 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div>
      <div className="max-w-md mb-auto space-y-2">
        <h1 className="text-5xl font-bold md:text-6xl">
          Hello, <br></br>I’m Aditya
        </h1>
        <p className="tracking-wide leading-relaxed pt-3">
          I have a passion for developing apps and websites and coding real
          world problems. I never stop learning and take every project as
          another adventure.{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
