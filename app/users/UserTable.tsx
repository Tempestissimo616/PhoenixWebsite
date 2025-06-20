import Link from 'next/link'
import React from 'react'
import {sort} from 'fast-sort'

interface User {
    id: number
    name: string
    email: string
}

interface Props {
  sortOrder : string
}
const UserTable = async({sortOrder} : Props) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'}
  )
  const users: User[] = await res.json()

  const sortedUser = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name)

  return (
            <table className='table table-bordered'>
            <thead>
              <tr>
                <th>
                  <Link href="/users?sortOrder=name">Name</Link>
                </th>
                  <Link href="/users?sortOrder=email">Email</Link>
              </tr>
            </thead>
            <tbody>{sortedUser.map(user => <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td></tr>)}</tbody>
        </table>
  )
}

export default UserTable