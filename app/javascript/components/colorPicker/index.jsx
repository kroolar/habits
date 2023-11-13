import React, { useEffect, useState } from "react"
import Icon from "../icon"
import { Dialog, IconButton, Tooltip } from "@mui/material"
import COLOR_PALETTE from "../../utilities/colorPalette"

const ColorPicker = ({
  value,
  onChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (icon) => {
    onChange(icon)
    setIsOpen(false)
  }

  const getColorPallete = () => {
    let palettes = COLOR_PALETTE.filter(pallete => (
      !['stone', 'slate', 'zinc', 'neutral'].includes(pallete.palette)
    ))
      
    palettes = palettes.map(palette => {
      const colors = palette.colors.filter(color => (
        ![50, 100, 900, 950].includes(color.name)
      ))

      return { palette: palette.palette, colors }
    })

    return palettes.map(palette => (
      palette.colors.map(color => (
        {
          color: color.color,
          title: `${palette.palette}-${color.name}`
        }
      )) 
    )).flat()
  }

  return (
    <div className={className}>
      <label className="flex text-xs -pb-1 text-gray-700 leading-none">Color</label>

        <div
          className={`duration-300 bg-gray-50 h-10 w-10 flex items-center justify-center border border-gray-300 rounded cursor-pointer duration-300 hover:brightness-90`}
          onClick={() => setIsOpen(true)}
        >
          <div style={{ backgroundColor: value }} className="rounded w-6 h-6" />
        </div>

      <Dialog open={isOpen}>
        <div className="p-4 flex flex-wrap" style={{ width: '312px', height: '312px' }}>
          {getColorPallete().map(({ color, title }) => (
            <Tooltip arrow title={title} placement="top">
              <div className="w-10 h-10">
                <IconButton onClick={() => handleChange(color)}>
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: color}} />
                </IconButton>
              </div>
            </Tooltip>
          ))}
        </div>
      </Dialog>
    </div>
  )
}
export default ColorPicker
