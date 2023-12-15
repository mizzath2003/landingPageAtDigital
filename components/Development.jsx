import React from "react";
import Button from "./Button";

const Development = () => {
  return (
    <section className="w-full lg:-mt-40 my-28">
      <div className="sm:flexCenter padding-container relative overflow-hidden">
        <div className="mx-auto w-[275px] h-[275px] lg:w-[346px] lg:h-[346px] xl:w-[414px] xl:h-[414px]">
          <img
            src="./desktop.png"
            alt="desktop-image"
            width={414}
            height={414}
          />
        </div>

        <div className=" flex flex-1 flex-col gap-5">
          <h2 className="h3-semibold text-primary-500 text-center sm:text-start lg:whitespace-nowrap">
            Web & Mobile App Development
          </h2>
          <p className="regular-16 text-center sm:text-start">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <div className="flexCenter sm:justify-start">
            <Button type="button" title="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
