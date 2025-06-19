import React, { Suspense, use } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
  searchParams : Promise<{sortOrder : string}>
}

const UsersPage = async ({searchParams} : Props) => {
  const {sortOrder} = await searchParams

  return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <Link href="/users/new" className='btn m-2'>New User</Link>
        <Suspense fallback={<div className="m-30 p-20 ml-80">
          <span className="loading loading-spinner loading-xl"></span>
        </div>}>
          <UserTable sortOrder={sortOrder}/>      
        </Suspense>

    </>
  )
}

export default UsersPage