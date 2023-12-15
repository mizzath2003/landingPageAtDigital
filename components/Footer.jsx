import React from "react";
import { FOOTER_LINKS } from "../constants/constants";

const Footer = () => {
  return (
    <footer className="bg-primary-500 flexCenter pb-5 ">
      <div className="flex flex-col">
        <div className="containerFooter flex w-full pt-12 md:mt-5 mb-8 md:mb-16">
          <div className="flex flex-col items-start justify-center gap-[15%] lg:flex-row ">
            <div className="flex flex-col gap-6 mb-12 md:mb-2 pr-0 md:pr-64 lg:pr-7 xl:pr-56 2xl:pr-80">
              <a href="/">
                <img src="./Logo.svg" alt="logo" />
              </a>
              <p className="regular-lato">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>

            <div className="flex flex-wrap gap-20  md:flex-1 md:flex-nowrap">
              {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 cursor-pointer">
                    {columns.links.map((link) => (
                      <a href="/" key={link}>
                        {link}
                      </a>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
          </div>
        </div>
        <div className="border bg-white mb-2  mx-7 md:mx-20 lg:mx-60" />
        <p className="regular-14 w-full text-center">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 whitespace-nowrap">
      <h4 className="semibold-21 "> {title} </h4>
      {children}
    </div>
  );
};

export default Footer;
