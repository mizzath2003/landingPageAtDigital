import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full">
      <img
        src="./heroimg.png"
        alt="hero image"
        className="w-full object-cover object-center"
      />
      <div className="relative z-20 flex flex-col hero-bg w-full md:p-9 p-5 gap-5 lg:max-w-[622px] lg:pr-0 lg:-top-[380px] lg:left-12">
        <p className="h2-bold md:h1-bold">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <Button type="button" title="Get free consultation" />
      </div>
    </section>
  );
};

export default Hero;
