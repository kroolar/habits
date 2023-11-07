import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { map } from 'lodash'
import COMPONENTS from './components'

const renderComponents = () => {
  map(COMPONENTS, (component, name) => {
    // Get all entrypoints from the page. We need to get all the entrypoints in
    // case that we load more than one component on the page.
    const entrypoints = document.querySelectorAll(`.js-react-${name}`)

    map(entrypoints, entrypoint => {
      // Get props from the element.
      const props = entrypoint.dataset.props || {}

      // Create React element and pass props to it.
      const reactElement = createElement(component, JSON.parse(props))

      // Create root. It is new way of creating roots started with React 18.
      const root = createRoot(entrypoint)

      // Render an React element to the root.
      root.render(reactElement)
    })
  })
}

export default renderComponents
