import React from 'react'
import { Tooltip } from '@mui/material'

const Tip = ({
  arrow = true,
  children,
  className = '',
  placement = 'top',
  text = '',
  title = ''
}) => (
  <Tooltip
    arrow={arrow}
    className={className}
    placement={placement}
    title={title || text}
  >
    {children}
  </Tooltip>
)

export default Tip
