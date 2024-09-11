import React from 'react'

const ListEmployeeComponent = () => {

    const dummyDate = [
        {
            "id": "1",
            "firstName": "Karan",
            "lastName": "Singh",
            "email": "karan@gmail.com"
        },
        {
            "id": "2",
            "firstName": "Arjun",
            "lastName": "Bhardwaj",
            "email": "arjun@gmail.com"
        },
        {
            "id": "3",
            "firstName": "Krishna",
            "lastName": "Vasudev",
            "email": "krishna@gmail.com"
        }
    ]

  return (
    <div>
      <h2>List of Emoloyees</h2>
      <table>
        <thead>
            <tr>
                <th>Employee first name</th>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
