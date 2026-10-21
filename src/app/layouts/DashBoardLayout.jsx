import React from 'react'
import { Outlet } from 'react-router'

const DashBoardLayout = () => {
  return (
    <div>
        <h1>this is for navbar</h1>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardLayout