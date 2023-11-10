import React, { useState } from "react"
import Icon from "../icon"
import { Dialog, IconButton } from "@mui/material"

const IconPicker = ({
  value,
  onChange,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const icons = [
    'account_circle',
    'alarm',
    'attach_file',
    'book',
    'cake',
    'camera',
    'chat',
    'cloud',
    'directions_car',
    'event',
    'favorite',
    'home',
    'info',
    'language',
    'mail',
    'music_note',
    'pets',
    'search',
    'star',
    'work',
    'add',
    'build',
    'cast',
    'dashboard',
    'edit',
    'face',
    'grade',
    'headset',
    'invert_colors',
    'local_grocery_store',
    'navigate_next',
    'open_in_new',
    'payment',
    'queue_music',
    'restore',
    'settings',
    'thumb_up',
    'vpn_lock',
    'watch_later',
    'zoom_in',
    'done_all',
    'brush',
    'cloud_upload',
    'done',
    'extension',
    'gavel',
    'insert_chart',
    'local_airport',
    'movie',
    'palette',
    'restaurant',
    'send',
    'time_to_leave',
    'whatshot',
    'accessibility',
    'battery_charging_full',
    'check_circle',
    'group_work',
    'language',
    'mood',
    'person_add',
    'repeat',
    'smoke_free',
    'trending_up',
    'videogame_asset',
    'wb_sunny',
    'cloud_done',
    'euro_symbol',
    'grade',
    'local_bar',
    'mouse',
    'person_pin',
    'room',
    'timer',
    'wifi',
    'cloud_queue',
    'error',
    'highlight',
    'local_florist',
    'new_releases',
    'people',
    'rowing',
    'train',
    'work_off',
    'cloud_off',
    'ev_station',
    'history',
  ];

  const handleChange = (icon) => {
    onChange(icon)
    setIsOpen(false)
  }

  return (
    <>
      <Icon
        className={`flex items-center justify-center p-2 border rounded h-10 w-10 cursor-pointer duration-300 hover:bg-gray-100 ${className}`}
        icon={value}
        onClick={() => setIsOpen(true)}
      />

      <Dialog open={isOpen}>
        <div className="w-80 h-96 p-4">
          {icons.map((icon) => (
            <IconButton onClick={() => handleChange(icon)}>
              <Icon icon={icon} />
            </IconButton>
          ))}
        </div>
      </Dialog>
    </>
  )
}
export default IconPicker
