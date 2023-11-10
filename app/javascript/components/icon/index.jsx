import React from 'react'

const Icon = ({
  className,
  icon,
  onClick,
  style
}) => (
  <i
    className={`material-icons material-icons-outlined ${className}`}
    onClick={onClick}
    style={style}
  >
    {icon}
  </i>
)

export default Icon