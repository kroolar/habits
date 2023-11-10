import { Dialog as DialogMUI, IconButton } from '@mui/material'
import React from 'react'
import Button from '../button'
import Icon from '../icon'

const Dialog = ({
  children,
  discardText = "Discard",
  onClose,
  onSuccess,
  open = false,
  successText,
  title = ""
}) => (
  <DialogMUI open={open} onClose={onClose}>
    <div style={{ width: '400px' }} className="p-10">
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl text-gray-700">{title}</div>

        <IconButton onClick={onClose}>
          <Icon icon="close" />
        </IconButton>
      </div>

      {children}

      <div className="flex justify-end mt-6">        
        <Button
          className="mr-2 w-24"
          variant="outlined"
          onClick={onClose}
          text={discardText}
        />

        <Button
          className="w-24"
          onClick={onSuccess}
          text={successText}
        />
      </div>
    </div>
  </DialogMUI>
)

export default Dialog
