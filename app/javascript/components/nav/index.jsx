import React from 'react'
import Icon from '../icon'

const Nav = () => {
  const pathname = window.location.pathname

  const items = [
    { title: 'Dashboard', icon: 'dashboard', href: '/', isActive: pathname == '/' },
    { title: 'Habits', icon: 'all_inclusive', href: '/habits', isActive: pathname.includes('/habits') },
  ]

  return (
    <div className="bg-white p-10 w-64 pt-64 h-screen">
      {items.map(({ title, icon, href, isActive }) => (
        <a className={`flex mb-2 rounded p-2 text-gray-700 font-medium leading-none flex items-center ${isActive ? 'bg-sky-700 text-white' : ''}`} href={href}>
          <Icon icon={icon} />
          <div className="ml-2">{title}</div>
        </a>
      ))}
    </div>
  )
}

export default Nav