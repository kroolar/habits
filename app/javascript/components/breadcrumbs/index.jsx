import React from 'react'

const Breadcrumbs = ({ className, data }) => (
  <div className={`${className} font-medium text-gray-500 flex items-center`}>
    {data.map(({ href, isActive = false, text }, index) => (
      <>
        <a
          className={`${isActive ? 'text-sky-700 hover:text-emerald-900 cursor-pointer' : 'text-gray-700'} text-lg duration-300`}
          href={href}
        >
          {text}
        </a>

        {index != (data.length - 1) && <div className="mx-1 text-xs font-bold">/</div>}
      </>
    ))}
  </div>
)

export default Breadcrumbs
