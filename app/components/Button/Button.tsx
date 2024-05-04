"use client"

import React from "react";
import { useRouter } from 'next/navigation'

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface ButtonProps {
  text: string;
  styles: string;
  type?: ButtonType;
  handleClick?: () => void;
  redirectTo?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const router = useRouter();

  const onClickHandler = () => {
    if (props.redirectTo) {
      router.push(props.redirectTo);
    }
  }

  return (
    // the tailwind is ripped from somewhere else and isn't really working
    <button
      className="${props.styles} bg-white px-3 py-2 rounded-lg font-medium hover:ring-2 hover:border-2 border-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
      onClick={onClickHandler}
      disabled={props.disabled}
      >
      {props.text}
    </button>
  )
}

export default Button;