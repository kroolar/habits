import React from 'react'
import { Alert as MUIAlert, Snackbar } from '@mui/material'

const Toast = ({
  text,
  type,
  onClose
}) => {
  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      onClose={onClose}
      open={!!text}
    >
      <MUIAlert severity={type} variant="filled" onClose={onClose}>
        {text}
      </MUIAlert>
    </Snackbar>
  )
}

export default Toast