import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs';
import ReactTable from 'react-table'
import Icon from '../../components/icon';
import { apiGet, apiPost } from '../../utilities/apiClient'
import Button from '../../components/button'
import Dialog from '../../components/dialog';
import { IconButton, TextField, TextareaAutosize, Tooltip } from '@mui/material';
import IconPicker from '../../components/iconPicker.jsx';
import ColorPicker from '../../components/colorPicker/index.jsx';

const COLUMNS = [
  { Header: 'Icon', width: 60, accessor: 'icon', Cell: (row) => <Icon style={{color: row.original.color}} icon={row.original.icon} /> },
  { Header: 'Name', accessor: 'name', Cell: (row) => <span style={{color: row.original.color}}>{row.original.name}</span> },
  { Header: 'Description', accessor: 'description' },
  { Header: '', Cell: row => (
    <Tooltip arrow title="Open" placement="top">
      <IconButton href={`/habits/${row.original.id}`}>
        <Icon icon="open_in_new" />
      </IconButton>
    </Tooltip>
  )}
]

const Habits = () => {
  const [habits, setHabits] = useState([])
  const [name, setName] = useState('')
  const [color, setColor] = useState('#456789')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('dashboard')
  const [isFormOpen, setisFormOpen] = useState(false)

  const getHabits = () => apiGet('habits').then(setHabits)

  useEffect(getHabits, [])

  const createHabit = () => {
    apiPost('habits', { habit: { name, icon, description, color }})
      .then(e => {
        if (e.errors) setErrors(e.errors)
        else { getHabits(); setisFormOpen(false) }
      })
  } 

  return (
    <div>
      <div className="flex justify-between mb-10">
        <Breadcrumbs
          data={[
          { isActive: false, href: '', text: 'Habits' },
        ]} />

        <Button onClick={() => setisFormOpen(true)} text="Create" />
      </div>

      <Dialog
        onClose={() => setisFormOpen(false)}
        onSuccess={createHabit}
        open={isFormOpen}
        discardText="Discard"
        successText="Create"
        title = "Create Habit"
      >
        <TextField
          className="w-full"
          onChange={e => setName(e.target.value)}
          value={name}
          label="Name"
          size="small"
        />

        <div className="flex mb-4">
          <IconPicker value={icon} onChange={setIcon} />
          <ColorPicker value={color} onChange={setColor} />
        </div>

        <TextField
          className="w-full"
          onChange={e => setDescription(e.target.value)}
          value={description}
          label="Description"
          size="small"
          rows={4}
          multiline
        />
      </Dialog>

      <ReactTable
        className="w-full"
        columns={COLUMNS}
        data={habits}
        defaultPageSize={10}
        minRows={1}
      />
    </div>
  )
}

export default Habits
