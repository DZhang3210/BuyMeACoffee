'use server'
import { ProfileInfo} from '@/models/ProfileInfo'
import ProfileInfoForm from '@/components/ProfileInfoForm'
import { getServerSession } from 'next-auth'
import React, { Suspense } from 'react'
import ProfilePage from '@/components/ProfilePage'

const Profile = async () => {
//   const session = await getServerSession(authOptions)
  return (
    <div className='max-w-3xl mx-auto p-4 min-h-screen'>
      <ProfilePage/>
    </div>
  )
}

export default Profile
