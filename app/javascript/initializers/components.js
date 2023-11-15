import Button from '../components/button'
import Nav from '../components/nav'
import Dashboard from '../pages/dashboard'
import Habits from '../pages/habits'
import Habit from '../pages/habits/show'

// Entrypoint to load components to the application
const COMPONENTS = {
  button: Button,
  habits: Habits,
  nav: Nav,
  habit: Habit,
  dashboard: Dashboard
}

export default COMPONENTS
