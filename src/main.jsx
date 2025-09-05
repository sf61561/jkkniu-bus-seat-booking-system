import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Student from './Components/Student/Student.jsx'
import Driver from './Components/Driver/Driver.jsx'
import Busroute from './Components/Student/Busroute.jsx'
import CampusToMymensingh from './Components/Student/CampusToMymensingh.jsx'
import Seatsctom from './Components/Student/Seatsctom.jsx'
import Seatsmtoc from './Components/Student/Seatsmtoc.jsx'
import MymensinghToCampus from './Components/Student/MymensinghToCampus.jsx'
import CampustoBhaluka from './Components/Student/CampustoBhaluka.jsx'
import Seatsctob from './Components/Student/Seatsctob.jsx'
import BhalukaToCampus from './Components/Student/BhalukaToCampus.jsx'
import Seatsbtoc from './Components/Student/Seatsbtoc.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/student',
      element: <Student />,
      children: [
        {
          path: '/student',
          element: <Busroute />,
        },
        {
          path: '/student/campustomymensingh',
          element: <CampusToMymensingh />,
        },
        {
          path: '/student/campustobhaluka',
          element: <CampustoBhaluka />,
        },
        {
          path: '/student/mymensinghtocampus',
          element: <MymensinghToCampus />,
        },
        {
          path: '/student/bhalukatocampus',
          element: <BhalukaToCampus />,
        },
        {
          path: '/student/campustomymensingh/:paramsId',
          element: <Seatsctom />,
        },
        {
          path: '/student/mymensinghtocampus/:paramsId',
          element: <Seatsmtoc />,
        },
        {
          path: '/student/campustobhaluka/:paramsId',
          element: <Seatsctob />,
        },
        {
          path: '/student/bhalukatocampus/:paramsId',
          element: <Seatsbtoc />,
        }
      ],
    },
    {
      path: '/driver',
      element: <Driver />,
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
