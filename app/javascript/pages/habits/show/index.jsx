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


      <div className="bg-white rounded shadow p-10 w-1/2">
        <div className="flex items-center">
          <Icon className="mr-2 text-3xl text-gray-600" icon={habit.icon} />
          <span className="font-medium text-xl text-gray-600" >{habit.name}</span>
        </div>

        <div className="mt-10">
          <span className="text-gray-700 font-medium">Description</span>
          <div className="text-gray-700 font-light text-justify">{habit.description}</div>
        </div>

        <div className="flex">
          <div className="mt-10 w-1/3">
            <span className="text-gray-700 font-medium">Type</span>
            <div className={`${habit.kind === 'good' ? 'text-green-700' : 'text-red-700'} font-medium flex items-center mt-1`}>
              <Icon className="mr-2" icon={habit.kind === 'good' ? 'mood' : 'mood_bad'} />
              {habit.kind === 'good' ? 'Good Habit' : 'Bad Habit'}
            </div>
          </div>

          <div className="mt-10 w-1/3">
            <span className="text-gray-700 font-medium">Icon</span>
            <div className={`font-medium text-gray-700 flex items-center mt-1`}>
              <Icon className="mr-2" icon={habit.icon} />
              {habit.icon}
            </div>
          </div>

          <div className="mt-10 w-1/3">
            <span className="text-gray-700 font-medium">Color</span>
            <div className="flex items-center mt-1">
              <div style={{ backgroundColor: habit.color}} className={`font-medium h-6 w-6 rounded mr-2`}>
              </div>
              {habit.color}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Habit
