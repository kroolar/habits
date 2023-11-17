import React, { useState } from 'react'
import { Button, Icon } from '../'
import { Dialog, IconButton } from '@mui/material'

const DeleteDialog = ({
  isOpen,
  onClose,
  title = 'Delete',
  description = 'Are you sure you want to deleted it?',
  onDestroy,
  children
}) => (
  <Dialog open={isOpen} onClose={onClose}>
    <div style={{ width: '400px' }} className="p-10">
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl text-gray-700">
          {title}
        </div>

        <IconButton>
          <Icon onClick={onClose} icon="close" />
        </IconButton>
      </div>

      {children || description}

      <div className="flex justify-end mt-6">        
        <Button
          className="mr-4 w-24"
          variant="outlined"
          onClick={onClose}
          text="Discard"
        />

        <button
          className={`w-24 mr-4 h-10 flex items-center justify-center px-3 text-white bg-red-700 font-medium cursor-pointer duration-300 rounded hover:bg-red-900`}
          onClick={onDestroy}
        >
          Destroy
        </button>
      </div>
    </div>
  </Dialog>
)

export default DeleteDialog

