import React, { useEffect, useState } from "react"
import Icon from "../icon"
import { Dialog, IconButton, Tooltip } from "@mui/material"
import COLOR_PALETTE from "../../utilities/colorPalette"

const ColorPicker = ({
  value,
  onChange,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [colors, setColors] = useState([])

  const handleChange = (icon) => {
    onChange(icon)
    setIsOpen(false)
  }

  const getColorPallete = () => (
    COLOR_PALETTE.map(palette => (
      palette.colors.map(color => (
        {
          color: color.color,
          title: `${palette.palette}-${color.name}`
        }
      )) 
    )).flat()
  )

  return (
    <div className="bg-gray-100">
      <div
        className={`flex items-center justify-center border rounded h-10 w-10 cursor-pointer duration-300 hover:bg-gray-100 ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <div style={{ backgroundColor: value }} className="w-6 h-6 rounded" />
      </div>

      <Dialog open={isOpen}>
        <div className="p-4" style={{ width: '480px', height: '480px' }}>
          {getColorPallete().map(({ color, title }) => (
            <Tooltip arrow title={title} placement="top">
              <IconButton onClick={() => handleChange(color)}>
                <div className="w-6 h-6 rounded border" style={{ backgroundColor: color}} />
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </Dialog>
    </div>
  )
}
export default ColorPicker
