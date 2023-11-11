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
    noDataText={<div className="flex items-center justify-center text-gray-700 text-lg font-semibold">
      <Icon className="w-20" icon="database" />
      <span>There is no data here</span>
    </div>}
  />
)
export default Table