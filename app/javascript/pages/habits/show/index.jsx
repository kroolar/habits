import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../components/breadcrumbs'
import Button from '../../../components/button'
import { apiDelete, apiGet } from '../../../utilities/apiClient'
import { Dialog, IconButton } from '@mui/material'
import Icon from '../../../components/icon'

const Habit = ({ id }) => {
  const [habit, setHabit] = useState({})
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const getHabit = () => apiGet(`habits/${id}`).then(setHabit)

  useEffect(getHabit, [])

  const destroy = () => {
    apiDelete(`habits/${id}`).then(() => window.location.replace('/habits?message=Habit has been deleted!') )
  }

  return (
    <div>
      <Dialog open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <div style={{ width: '400px' }} className="p-10">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl text-gray-700">
              Delete Habit
            </div>

            <IconButton>
              <Icon onClick={() => setIsDeleteOpen(false)} icon="close" />
            </IconButton>
          </div>

          Are you sure you want to deleted this habit?

          <div className="flex justify-end mt-6">        
            <Button
              className="mr-4 w-24"
              variant="outlined"
              onClick={() => setIsDeleteOpen(false)}
              text="Discard"
            />

          <button
            className={`w-24 mr-4 h-10 flex items-center justify-center px-3 text-white bg-red-700 font-medium cursor-pointer duration-300 rounded hover:bg-red-900`}
            onClick={destroy}
          >
            Destroy
          </button>
          </div>
        </div>
      </Dialog>

      <div className="flex mb-10">
        <Breadcrumbs
          className="flex-1"
          data={[
            { isActive: true, href: '/habits', text: 'Habits' },
            { isActive: false, href: '', text: habit?.name },
          ]}
        />

        <Button className="w-20" text="Edit" />

        <button
          className={`ml-4 h-10 flex items-center justify-center w-20 text-red-700 border-2 border-red-700 font-medium cursor-pointer duration-300 rounded hover:bg-red-700 hover:text-white`}
          onClick={() => setIsDeleteOpen(true)}
        >
          <span>Destroy</span>
        </button>
      </div>
    </div>
  )
}

export default Habit
