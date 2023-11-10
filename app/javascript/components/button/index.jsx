import React from 'react'

const Button = ({ children, className, onClick, text, variant = 'button' }) => (
  <button
    className={`${className} h-10 flex items-center justify-center px-3 text-white bg-sky-700 font-medium cursor-pointer duration-300 rounded ${variant === 'outlined' ? 'bg-white border-2 border-sky-700 !text-sky-700 hover:bg-sky-900 hover:border-sky-900 hover:text-white' : 'hover:bg-sky-900'}`}
    onClick={onClick}
  >
    {children || text}
  </button>
)

export default Button
