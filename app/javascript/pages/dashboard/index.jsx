import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import { apiGet, apiPost } from '../../utilities/apiClient'
import Button from '../../components/button'
import { Tooltip } from '@mui/material'
import Icon from '../../components/icon'

const Dashboard = () => {
  const [habits, setHabits] = useState([])

  const createStat = (habitID, status) => {
    apiPost('stats', { stat: { habit_id: habitID, status }})
      .then(e => {
        getHabits()
        // if (e.errors) setErrors(e.errors)
        // else {
          // getHabits();
          // setisFormOpen(false)
          // setToastMessage('Habit has been created successfully')
        // }
      })
  } 

  const getHabits = () => apiGet('habits')
    .then(setHabits)
    // .finally(() => setTableLoading(false))

    useEffect(() => {
      getHabits()
      // getParams()
    }, [])

  // const update = () => 

  return (
    <div>
      <Breadcrumbs
        className="flex-1"
        data={[
          { isActive: false, href: '/', text: 'Dashboard' },
        ]}
      />

      <h2 className="text-gray-400 text-xl mt-10 mb-4 font-medium">Today's Habits</h2>

      <div className="bg-white w-1/3">
        {habits.map(habit => (
          <div className="flex border-gray-200 border-b-2 p-2">
            <Icon style={{ color: habit.color }} className="text-3xl" icon={habit.icon} />
            
            <div className="mx-4 flex-1 flex items-center text-lg" style={{ color: habit.color }}>
              {habit.name}
            </div>

            <div className="flex items-center">
              <Tooltip className="mr-4" arrow placement="top" title="Not Completed">
                <div onClick={() => createStat(habit.id, 'not completed')} className={`flex items-center justify-center duration-300 h-6 w-6 border-2 ${habit.today_stat?.status == 'not completed' ? 'text-red-700 border-red-700' : 'text-gray-300 border-gray-300'} rounded cursor-pointer duration-300 hover:border-red-700 hover:text-red-700`}>
                  <Icon className="text-xl" icon="close" />
                </div>
              </Tooltip>

              <Tooltip className="mr-4" arrow placement="top" title="Not Completed">
                <div onClick={() => createStat(habit.id, 'skipped')} className={`flex items-center justify-center duration-300 h-6 w-6 border-2 ${habit.today_stat?.status == 'skipped' ? 'text-yellow-700 border-yellow-700' : 'text-gray-300 border-gray-300'} rounded cursor-pointer duration-300 hover:border-yellow-700 hover:text-yellow-700`}>
                  <Icon className="text-xl" icon="chevron_right" />
                </div>
              </Tooltip>

              <Tooltip className="mr-4" arrow placement="top" title="Not Completed">
                <div onClick={() => createStat(habit.id, 'completed')} className={`flex items-center justify-center duration-300 h-6 w-6 border-2 ${habit.today_stat?.status == 'completed' ? 'text-green-700 border-green-700' : 'text-gray-300 border-gray-300'} rounded cursor-pointer duration-300 hover:border-green-700 hover:text-green-700`}>
                  <Icon className="text-xl" icon="done" />
                </div>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
