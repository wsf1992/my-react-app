import React from 'react'
import {
    createRoutesFromElements,
    createBrowserRouter,
  } from "react-router-dom";
  import { Route} from 'react-router'
import Login from '../view/login'
import App from '../App'


export default createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}>
            </Route>
      </Route>
    )
)



       




    
