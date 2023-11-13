import { isNull } from "lodash"
import React from "react"

const Label = ({
  className = '',
  label = '',
  required = false,
  error = false
}) => {
  if (isNull(label)) return

  return (
    <div className={`leading-none ${error ? 'text-red-700' : 'text-gray-700'} ${className}`}>
      {label}
      {required && '*'}
    </div>
  )
}

export default Label
