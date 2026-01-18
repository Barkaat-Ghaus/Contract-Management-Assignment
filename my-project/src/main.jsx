import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard'
import ContractView from './pages/ContractView'
import ContractCreator from './pages/ContractCreator'
import BlueprintBuilder from './pages/BlueprintBuilder'
import Blueprints from './pages/Blueprints'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'view-contract/:id',
        element: <ContractView />,
      },
      {
        path: 'create-contract',
        element: <ContractCreator />,
      },
      {
        path: 'create-blueprint',
        element: <BlueprintBuilder />,
      },
      {
        path: 'blueprints',
        element: <Blueprints />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
