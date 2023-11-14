import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs';
import ReactTable from 'react-table'
import Icon from '../../components/icon';
import { apiGet, apiPost } from '../../utilities/apiClient'
import Button from '../../components/button'
import Dialog from '../../components/dialog';
import { IconButton, TextField, Tooltip } from '@mui/material';
import IconPicker from '../../components/iconPicker.jsx';
import ColorPicker from '../../components/colorPicker/index.jsx';
import Table from '../../components/table/index.jsx';
import ToggleButton from '../../components/toggleButton/index.jsx';
import Input from '../../components/input'
import Textarea from '../../components/textarea'
import Toast from '../../components/toast'

const COLUMNS = [
  { Header: 'Icon', width: 100, accessor: 'icon', Cell: (row) => (
    <div className="ml-3">
      <Icon
        style={{color: row.original.color}}
        icon={row.original.icon}
      />
    </div>
  )},
  { Header: 'Name', width: 300, accessor: 'name', Cell: (row) => <span style={{color: row.original.color}}>{row.original.name}</span> },
  { Header: 'History', accessor: 'stats_json', Cell: (row) => (
    <div className="flex items-center justify-center">
      {row.original.stats_json.map(stat => (
        <Tooltip className="mr-4" arrow placement="top" title={stat.title}>
          <div className={`flex items-center justify-center duration-300 h-6 w-6 border-2 border-${stat.color} rounded cursor-pointer`}>
            <Icon className={`text-xl text-${stat.color}`} icon={stat.icon} />
          </div>
        </Tooltip>
      ))}
    </div>
  )},
  { Header: 'Type', width: 100, accessor: 'icon', Cell: (row) => (
    <Tooltip className="ml-3" arrow placement="top" title={row.original.kind}>
      <span>
        <Icon
          className={`${row.original.kind === 'good' ? 'text-green-700' : 'text-red-700'} cursor-default`}
          icon={`${row.original.kind === 'good' ? 'mood' : 'mood_bad'}`}
        />
      </span>
    </Tooltip>
  )},
  { Header: 'Description', accessor: 'description', Cell: row => <div className="flex flex-1">{row.original.description}</div> },
  { Header: '', width: 100, Cell: row => (
    <div className="flex justify-end items-center">
      <Tooltip arrow title="Open" placement="top">
        <IconButton href={`/habits/${row.original.id}`}>
          <Icon icon="open_in_new" />
        </IconButton>
      </Tooltip>
    </div>
  )}
]

const Habits = () => {
  const [habits, setHabits] = useState([])
  const [name, setName] = useState('')
  const [color, setColor] = useState('#456789')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('dashboard')
  const [isFormOpen, setisFormOpen] = useState(false)
  const [tableLoading, setTableLoading] = useState(true)
  const [type, setType] = useState('good')
  const [errors, setErrors] = useState({})
  const [toastMessage, setToastMessage] = useState('')


  const getHabits = () => apiGet('habits')
    .then(setHabits)
    .finally(() => setTableLoading(false))

  const getParams = () => {
    const message = window.location.search.replace('?message=', '').replaceAll('%20', ' ')

    setToastMessage(message)
  }

  useEffect(() => {
    getHabits()
    getParams()
  }, [])

  const createHabit = () => {
    apiPost('habits', { habit: { name, icon, description, color, kind: type }})
      .then(e => {
        if (e.errors) setErrors(e.errors)
        else {
          getHabits();
          setisFormOpen(false)
          setToastMessage('Habit has been created successfully')
        }
      })
  } 

  return (
    <div>
      <Toast
        type="success"
        text={toastMessage}
        onClose={() => setToastMessage('')}
      />

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
        
        <Input
          className="w-full"
          onChange={e => setName(e.target.value)}
          value={name}
          label="Name"
          error={errors?.name}
        />

        <div className="flex mb-4 items-start">
          <ColorPicker
            className="mt-4 mr-4"
            value={color}
            onChange={setColor}
          />

          <IconPicker
            className="mt-4"
            value={icon}
            onChange={setIcon}
          />
        </div>

        <ToggleButton
          className="mb-6"
          value={type}
          onChange={setType}
        />

        <Textarea
          className="w-full"
          onChange={e => setDescription(e.target.value)}
          value={description}
          label="Description"
          rows={4}
        />
      </Dialog>

      <Table
        className="w-2/3"
        columns={COLUMNS}
        data={habits}
        loading={tableLoading}
      />
    </div>
  )
}

export default Habits
