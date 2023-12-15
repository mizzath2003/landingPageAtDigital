import React from "react";
import Button from "./Button";

const Strategy = () => {
  return (
    <section className="w-full my-40">
      <div className="sm:flexCenter padding-container relative overflow-hidden">
        <div className="mx-auto w-[275px] h-[276px] lg:w-[346px] lg:h-[348px] xl:w-[414px] xl:h-[416px] block sm:hidden">
          <img
            src="./search.png"
            alt="desktop-image"
            width={414}
            height={416}
          />
        </div>

        <div className=" flex flex-1 flex-col gap-5">
          <h2 className="h3-semibold text-primary-500 text-center  sm:text-start">
            Digital Strategy Consulting
          </h2>
          <p className="regular-16 text-center sm:text-start">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div className="flexCenter sm:justify-start">
            <Button type="button" title="Learn More" />
          </div>
        </div>

        <div className="mx-auto w-[275px] h-[276px] lg:w-[346px] lg:h-[348px] xl:w-[414px] xl:h-[416px] sm:block hidden">
          <img
            src="./search.png"
            alt="desktop-image"
            width={414}
            height={416}
          />
        </div>
      </div>
    </section>
  );
};

export default Strategy;
