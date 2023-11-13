import React from 'react'
import Label from '../label'

const Input = ({
  className = '',
  error,
  label,
  onChange,
  value,
  type = 'text',
  placeholder
}) => (
  <label className={className}>
    <Label
      label={label}
      required
      error={error}
    />

    <input
      type={type}
      className={`w-full bg-gray-50 border rounded h-10 px-2 border-gray-300 ${error && 'border-red-700'}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />

    {error ? <div className="text-red-700 text-xs font-light">{error}</div> : null}
  </label>
)

export default Input
