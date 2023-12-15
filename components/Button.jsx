import React from "react";

const Button = ({ type, title }) => {
  return (
    <button
      type={type}
      className=" bg-secondary-500 w-fit px-[20px] py-[12px] rounded-[4px] capitalize"
    >
      <label className="bold-14 cursor-pointer"> {title} </label>
    </button>
  );
};

export default Button;
