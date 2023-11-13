import React from 'react'
import Label from '../label'

const Textarea = ({
  className = '',
  error,
  label,
  onChange,
  value,
  type = 'text',
  placeholder,
  required = false,
  rows
}) => (
  <label className={className}>
    <Label
      label={label}
      required={required}
      error={error}
    />

    <textarea
      type={type}
      className={`w-full bg-gray-50 border rounded p-2 border-gray-300 h-full ${error && 'border-red-700'}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />

    {error ? <div className="text-red-700 text-xs font-light">{error}</div> : null}
  </label>
)

export default Textarea
