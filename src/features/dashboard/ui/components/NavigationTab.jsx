import { ChartArea } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const NavigationTab = ({path,title,Icon}) => {
  return (
    <NavLink className={"flex gap-4 pl-4"} to={path}>
        <ChartArea size={21}/>
        {title}
    </NavLink>
  )
}

export default NavigationTab