"use client";

import style from "./button.module.css";

interface ButtonProps {
  label: string;
  className?: string;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ label, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`${style.button} bg-secondary text-white ${className}`}
    >
      <span className="relative z-[1000]">{label}</span>
    </button>
  );
};

export default Button;
