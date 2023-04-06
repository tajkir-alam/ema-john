import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import loadData from './LoadData/loadData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Shop />
      },
      {
        path: '/order-review',
        element: <Order />,
        loader: loadData,
      },
      {
        path: '/checkout',
        element: <Inventory />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
