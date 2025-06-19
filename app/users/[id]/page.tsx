import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: Promise<{id : string}>
}
const UserDetailPage = async ({params} : Props) => {
  const {id} = await params

  const userId = parseInt(id)

  if(userId > 10) notFound()
  return (
    <div>UserDetailPage {userId}</div>
  )
}

export default UserDetailPage