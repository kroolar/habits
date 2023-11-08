import React from 'react'

const Icon = ({
  className,
  icon,
  onClick
}) => (
  <i
    className={`material-icons material-icons-outlined ${className}`}
    onClick={onClick}
  >
    {icon}
  </i>
)

export default Icon