import React, { memo } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = memo(({className, ...rest}: ButtonProps) => {
  return (
    <button className={`${className} cursor-pointer`} {...rest}></button>
  )
})

Button.displayName = "Button";

export default Button