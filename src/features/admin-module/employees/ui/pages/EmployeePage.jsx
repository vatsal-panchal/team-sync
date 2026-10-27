import React from 'react'
import { getALLEmployee } from '../../api/employeeApis'

const EmployeePage = () => {

  getALLEmployee()
  return (
    <div>EmployeePage</div>
  )
}

export default EmployeePage