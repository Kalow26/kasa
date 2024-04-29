import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Button = ({ text, color = "black", icon }) => {
  const icons = [
    {
      name: "phone",
      icon: <FiPhoneCall />,
    },
    {
      name: "arrow",
      icon: <FaArrowRight />,
    },
  ];

  const variants = [
    {
      name: "black",
      className: "main_btn-black",
    },
    {
      name: "white",
      className: "main_btn-white",
    },
  ];

  const variant = variants.find((variant) => variant.name === color);
  const iconType = icons.find((item) => item.name === icon);

  return (
    <button type="button" className={`main_btn ${variant.className}`}>
      <div className="main_btn_icon">{icon && iconType.icon}</div>
      {text}
    </button>
  );
};

export default Button;
