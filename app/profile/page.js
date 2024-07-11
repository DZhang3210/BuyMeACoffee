'use server'
import React from 'react'

const ProfilePage = async () => {
  
  return (
    <div className='max-w-3xl mx-auto p-4'>
        <div className='bg-gray-200 p-4 rounded-lg'>
            <div className='bg-gray-300 size-24 rounded-full'>
                avatar
            </div>
            <div>
                cover image
            </div>
        </div>
        <div>
            <input type = "text" placeholder='username'></input>
        </div>
        <div>
            <input type = "text" placeholder='display name'></input>
        </div>
        <div>
            <textarea name = "bio" placeholder='bio'></textarea>
        </div>
        <div>
            <button type = "submit">Save Profile</button>
        </div>
        <div>
            donations lists...
        </div>
    </div>
  )
}

export default ProfilePage
