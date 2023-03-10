import React from 'react'
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route
} from 'react-router-dom'

import Login from '../view/login'
import App from '../App'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
)
export default router
