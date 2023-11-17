import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../components/breadcrumbs'
import Button from '../../../components/button'
import { apiDelete, apiGet } from '../../../utilities/apiClient'
import Icon from '../../../components/icon'
import { DeleteDialog } from '../../../components/index.js'
import Form from '../form/index.jsx'

const Habit = ({ id }) => {
  const [habit, setHabit] = useState({})
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const getHabit = () => apiGet(`habits/${id}`).then(setHabit)
  
  const destroy = () => apiDelete(`habits/${id}`)
    .then(() => window.location.replace('/habits?message=Habit has been deleted!') )

  useEffect(getHabit, [])

  return (
    <div>
      <Form
        isOpen={isEditOpen}
        habit={habit}
        onClose={setIsEditOpen}
        onSuccess={getHabit}
      />

      <DeleteDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDestroy={destroy}
        description="Are you sure you want to delete this habit?"
      />

      <div className="flex mb-10">
        <Breadcrumbs
          className="flex-1"
          data={[
            { isActive: true, href: '/habits', text: 'Habits' },
            { isActive: false, href: '', text: habit?.name },
          ]}
        />

        <Button className="w-20" text="Edit" onClick={() => setIsEditOpen(true)} />

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
