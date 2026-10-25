import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const RoleBaseRoute = ({ allowedRoles }) => {
    // Get the details of the employee who is logged in.
    let { employee } = useSelector(store => store.auth)

    // Check if the logged-in user's role is allowed to open this page.
    // Admin cannot open employee-only pages, and employee cannot open admin-only pages.
    if (!allowedRoles.includes(employee?.role)) {
        // If the user's role is not allowed, send them to the unauthorized page.
        return <Navigate to={"/unauthorized"} />
    }

    // If the user's role is allowed, show the requested page.
    return <Outlet />
}

export default RoleBaseRoute