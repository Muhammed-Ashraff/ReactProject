import React from 'react'

export default function UserList() {
    const userList = [
        {id:'1', fullname: 'Idris Ashraff', email: 'idris@gmail.com'},
        {id:'2', fullname: 'Idris Taofiq', email: 'taofiq@gmail.com'},
        {id:'3', fullname: 'Idris Kamilu', email: 'kamilu@gmail.com'},
        {id:'4', fullname: 'Idris Ashraff', email: 'Maruf@gmail.com'},
        {id:'5', fullname: 'Idris Ashraff', email: 'mansur@gmail.com'},
    ]
  return (
    <>
    <ul>
        {userList.map((list=>(
            <li key={list.id}>
                <p>Full name: <b>{list.fullname}</b></p>
                <p>Email: <b>{list.email}</b></p>
            </li>
        )))}
    </ul>
    
    
    </>
  )
}
