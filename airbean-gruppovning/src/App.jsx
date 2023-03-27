import './App.css'

import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom'

import Landing from './views/Landing/Landing'
import Nav from './views/Nav/Nav'
import Menu from './views/Menu/Menu'
import About from './views/About/About'
import Cart from './views/Cart/Cart'
import Status from './views/Status/Status'
import Error from './views/Error/Error'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <Error />
    },
    {
      path: '/nav',
      element: <Nav />,
      errorElement: <Error />
    },
    {
      path: '/menu',
      element: <Menu />,
      errorElement: <Error />
    },
    {
      path: '/about',
      element: <About />,
      errorElement: <Error />
    },
    {
      path: '/cart',
      element: <Cart />,
      errorElement: <Error />
    },
    {
      path: '/status',
      element: <Status />,
      errorElement: <Error />
    }

  ])

  return (
    <div className="App">

    <RouterProvider router={ router } />

    </div>
  )
}

export default App
