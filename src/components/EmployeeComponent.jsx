import React, { useState } from 'react'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className='container' >
      <div className="row">
        <div className="card"></div>
      </div> 
    </div>
  )
}

export default EmployeeComponent
