import React from 'react'
import { Outlet } from 'react-router'

const DashBoardLayout = () => {
  return (
    <div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardLayout