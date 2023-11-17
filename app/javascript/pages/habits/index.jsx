import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs';
import Icon from '../../components/icon';
import { apiGet } from '../../utilities/apiClient'
import Button from '../../components/button'
import { IconButton } from '@mui/material';
import Table from '../../components/table/index.jsx';
import Toast from '../../components/toast'
import Form from './form/index.jsx';
import { Tip } from '../../components'

const COLUMNS = [
  { Header: 'Icon', width: 70, accessor: 'icon', Cell: (row) => (
    <div className="ml-3">
      <Icon
        className="cursor-default"
        style={{color: row.original.color}}
        icon={row.original.icon}
      />
    </div>
  )},
  { Header: 'Name', width: 300, accessor: 'name', Cell: (row) => <span className="text-gray-700">{row.original.name}</span> },
  { Header: 'History', accessor: 'stats_json', Cell: (row) => (
    <div className="flex items-center justify-center">
      {row.original.stats_json.map(stat => (
        <Tip className="mr-4" title={stat.title}>
          <div className={`flex items-center justify-center duration-300 h-6 w-6 border-2 border-${stat.color} rounded cursor-pointer`}>
            <Icon className={`text-xl text-${stat.color}`} icon={stat.icon} />
          </div>
        </Tip>
      ))}
    </div>
  )},
  { Header: 'Type', width: 100, accessor: 'icon', Cell: (row) => (
    <Tip className="ml-3" title={row.original.kind}>
      <span>
        <Icon
          className={`${row.original.kind === 'good' ? 'text-green-700' : 'text-red-700'} cursor-default`}
          icon={`${row.original.kind === 'good' ? 'mood' : 'mood_bad'}`}
        />
      </span>
    </Tip>
  )},
  { Header: 'Description', accessor: 'description', Cell: row => <div className="flex flex-1">{row.original.description}</div> },
  { Header: '', width: 100, Cell: row => (
    <div className="flex justify-end items-center">
      <Tip title="Open">
        <IconButton href={`/habits/${row.original.id}`}>
          <Icon icon="open_in_new" />
        </IconButton>
      </Tip>
    </div>
  )}
]

const Habits = () => {
  const [habits, setHabits] = useState([])
  const [isFormOpen, setisFormOpen] = useState(false)
  const [tableLoading, setTableLoading] = useState(true)
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

      <Form
        isOpen={isFormOpen}
        onClose={setisFormOpen}
        onSuccess={getHabits}
      />

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
