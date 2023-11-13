import React from 'react'
import Icon from '../icon'

const ToggleButton = ({
  className = '',
  value = 'good',
  onChange
}) => {
  const isGood = (value === 'good')
  const isBad = (value === 'bad')

  return (
    <div className={`flex items-center leading-none border-2 rounded font-medium border-sky-700 ${className}`}>
      <div
        className={`w-1/2 h-10 flex items-center justify-center duration-300 ${isGood ? 'text-white bg-sky-700' : 'bg-gray-50 cursor-pointer text-sky-700 hover:bg-sky-700 hover:text-white'}`}
        onClick={() => onChange('good')}
      >
        <Icon className="mr-2" icon="mood" />
        <span>Good</span>
      </div>

      <div
        className={`w-1/2 h-10 flex items-center justify-center duration-300 ${isBad ? 'text-white bg-sky-700' : 'bg-gray-50 cursor-pointer text-sky-700 hover:bg-sky-700 hover:text-white'}`}
        onClick={() => onChange('bad')}
      >
        <Icon className="mr-2" icon="mood_bad" />
        <span>Bad</span>
      </div>
    </div>
  )
}
  

export default ToggleButton
