'use server'
import { ProfileInfoModel } from '@/models/ProfileInfo'
import ProfileInfoForm from '@/components/ProfileInfoForm'
import { getServerSession } from 'next-auth'
import React from 'react'

const ProfilePage = async () => {
//   const session = await getServerSession(authOptions)
  return (
    <div className='max-w-3xl mx-auto p-4'>
        <ProfileInfoForm/>
        <div>
            donations lists...
        </div>
    </div>
  )
}

export default ProfilePage
