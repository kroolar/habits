import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import { apiGet, apiPost } from '../../utilities/apiClient'
import Button from '../../components/button'
import { Tooltip } from '@mui/material'
import Icon from '../../components/icon'

const top_5 = [
  { icon: 'home', color: '#b91c1c', streak: 10, width: 100 },
  { icon: 'dashboard', color: '#15803d', streak: 7, width: 70 },
  { icon: 'window', color: '#0e7490', streak: 6, width: 60 },
  { icon: 'people', color: '#7e22ce', streak: 3, width: 30 },
  { icon: 'done', color: '#be123c', streak: 3, width: 30 },
]

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
        className="flex-1 mb-10"
        data={[
          { isActive: false, href: '/', text: 'Dashboard' },
        ]}
      />
      <div className="flex items-start">
        <div className="w-2/3 shadow rounded">
          <div className="bg-white py-2">
            <h2 className="text-gray-700 text-xl font-medium p-4">
              Today's Habits
            </h2>
            {habits.map(habit => (
              <div className="flex border-gray-200 border-b-2 p-2 mx-4">
                <Icon style={{ color: habit.color }} icon={habit.icon} />
                
                <div className="mx-4 flex-1 flex items-center font-medium" style={{ color: habit.color }}>
                  {habit.name}
                </div>

                <div className="flex items-center">
                  <Tooltip className="mr-4" arrow placement="top" title="Not Completed">
                    <div onClick={() => createStat(habit.id, 'not_completed')} className={`flex items-center justify-center duration-300 h-6 w-6 border-2 ${habit.today_stat?.status == 'not_completed' ? 'text-red-700 border-red-700' : 'text-gray-300 border-gray-300'} rounded cursor-pointer duration-300 hover:border-red-700 hover:text-red-700`}>
                      <Icon className="text-xl" icon="close" />
                    </div>
                  </Tooltip>

                  <Tooltip className="mr-4" arrow placement="top" title="Not Completed">
                    <div onClick={() => createStat(habit.id, 'skipped')} className={`flex items-center justify-center duration-300 h-6 w-6 border-2 ${habit.today_stat?.status == 'skipped' ? 'text-yellow-700 border-yellow-700' : 'text-gray-300 border-gray-300'} rounded cursor-pointer duration-300 hover:border-yellow-700 hover:text-yellow-700`}>
                      <Icon className="text-xl" icon="chevron_right" />
                    </div>
                  </Tooltip>

                  <Tooltip className="" arrow placement="top" title="Not Completed">
                    <div onClick={() => createStat(habit.id, 'completed')} className={`flex items-center justify-center duration-300 h-6 w-6 border-2 ${habit.today_stat?.status == 'completed' ? 'text-green-700 border-green-700' : 'text-gray-300 border-gray-300'} rounded cursor-pointer duration-300 hover:border-green-700 hover:text-green-700`}>
                      <Icon className="text-xl" icon="done" />
                    </div>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/3 ml-10">
          <div className="flex flex-col px-3 bg-white mb-10 shadow rounded">
            <h2 className="text-gray-700 text-xl font-medium my-4">
              Habits Stats
            </h2>

            <div className="flex items-center px-2 py-3">
              <Icon className="text-sky-700 w-8" icon="all_inclusive" />
              <div className="font-medium text-sky-700 flex-1">All Habits</div>
              <div className="text-gray-700 font-semibold text-sky-700">
                {habits.length}
              </div>
            </div>

            <div className="flex items-center py-3 px-2 border-t-2 border-gray-300">
              <Icon className="text-green-700 w-8" icon="mood" />
              <div className="font-medium text-green-700 flex-1">Good Habits</div>
              <div className="text-gray-700 font-semibold text-green-700">
                {habits.filter(h => h.kind == 'good').length}
              </div>
            </div>

            <div className="flex items-center py-3 px-2 border-t-2 border-gray-300">
              <Icon className="text-red-700 w-8" icon="mood_bad" />
              <div className="font-medium text-red-700 flex-1">Bad Habits</div>
              <div className="text-gray-700 font-semibold text-red-700">
                {habits.filter(h => h.kind == 'bad').length}
              </div>
            </div>
          </div>

          <div className="">
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-gray-700 text-xl mb-10 font-medium">
                Best Streaks
              </h2>

              {top_5.map(habit => (
                <div class="flex items-center mb-6">
                  <Tooltip title="Home" placement="top" arrow>
                    <div className="mr-2 h-6">
                      <Icon style={{ color: habit.color }} icon={habit.icon} />
                    </div>
                  </Tooltip>

                  <div style={{ borderColor: habit.color }} className="w-full border-2 h-5 rounded">
                    <div style={{ width: `${habit.width}%`, backgroundColor: habit.color }} className="h-full" />
                  </div>
                  <div className="ml-2 font-medium" style={{ color: habit.color }}>{habit.streak}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        

        {/* <div class="p-10 bg-white ml-10 mt-10">
          <div class="text-gray-700 text-2xl font-medium">
            Habits
            <span className="text-4xl font-bold ml-2">99</span>
          </div>
        </div> */}
      </div>



      {/* All habits Size */}
      {/* All Completed Size */}
    </div>
  )
}

export default Dashboard
