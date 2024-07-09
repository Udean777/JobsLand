import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Vacancy from './pages/Vacancy.tsx'
import Home from './pages/Home.tsx'
import Footer from './components/FooterHome.tsx'
import LockerTips from './pages/LockerTips.tsx'
import SearchForJobs from './pages/SearchForJobs.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import RegisterForJobSeekers from './pages/RegisterForJobSeekers.tsx'
import RegisterForCompany from './pages/RegisterForCompany.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: "/pasang-lowongan-pekerjaan",
    element: <Vacancy />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: "/tips-loker",
    element: <LockerTips />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: "/cari-pekerjaan",
    element: <SearchForJobs />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: "/register-for-job-seekers",
    element: <RegisterForJobSeekers />,
    errorElement: <h1>Not Found</h1>
  },
  {
    path: "/register-for-company",
    element: <RegisterForCompany />,
    errorElement: <h1>Not Found</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />

    <RouterProvider router={router} />

    <Footer />
  </React.StrictMode>,
)
