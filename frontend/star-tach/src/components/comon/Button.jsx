import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`py-4 px-16 bg-[##23539F] text-white font-bold text-sm border border-solid border-black hover:bg-white hover:text-black duration-500 ${className}`}>{text}</button>
  )
}

export default Button