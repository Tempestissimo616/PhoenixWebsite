import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import profile from '@/public/images/profile-icon-design-free-vector.jpg'
import { Suspense } from 'react'
import HeavyComponent from './components/HeavyComponent'
import { authOptions } from './api/auth/authOptions'

export default async function Home() {
  const session = await getServerSession(authOptions)


  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href='/users'>Users</Link>
      <ProductCard/>
      <Image src={profile} alt='Profile' width={300} height={300} />
      <Image src="https://d12i7q49526cmu.cloudfront.net/media/original_images/cloud.webp"
       alt='123' width={300} height={170}/>   
       <HeavyComponent/>
    </main>
  )
}
