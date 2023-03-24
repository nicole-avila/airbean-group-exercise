import './App.css'

import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom'

import Landing from './views/Landing'
import Nav from './views/Nav'
import Menu from './views/Menu'
import About from './views/About'
import Cart from './views/Cart'
import Status from './views/Status'
import Error from './views/Error'

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
