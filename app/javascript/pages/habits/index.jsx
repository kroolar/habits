import {  Button, TextField } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '../../components/breadcrumbs';
import ReactTable from 'react-table'
import Icon from '../../components/icon';

const COLUMNS = [
  { Header: 'Icon', accessor: 'icon', Cell: (row) => <Icon icon={row.original.icon} /> },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Description', accessor: 'description' },
]

const Habits = ({ habits }) => {
  return (
    <div>
      <Breadcrumbs className="mb-10"
        data={[
        { isActive: false, href: '', text: 'Habits' },
      ]} />

      <ReactTable
        className="w-full"
        columns={COLUMNS}
        data={habits}
        defaultPageSize={10}
      />
    </div>
  )
}

export default Habits
