import React from 'react'
import ReactTable from 'react-table'
import Icon from '../icon'

const Table = ({
  className = '',
  columns = [],
  data = {},
  defaultPageSize = 10,
  minRows = 1,
  loading = false,
}) => (
  <ReactTable
    className={className}
    columns={columns}
    data={data}
    defaultPageSize={defaultPageSize}
    minRows={minRows}
    loading={loading}
    loadingText={<Icon className="animate-spin text-6xl -mt-32 text-sky-700" icon="sync" />}
  />
)
export default Table