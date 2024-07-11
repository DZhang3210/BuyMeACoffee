'use client'


import {saveProfile} from '@/actions/profileInfoActions'
import React from 'react'

const ProfileInfoForm = () => {
  async function handleFormAction(e){
    const formData = new FormData(e.target);
    const response = await saveProfile(formData)
  }
  return (
    <form
        onSubmit = {handleFormAction}
    >
    <div className='bg-gray-200 p-4 rounded-lg'>
        <div className='bg-gray-300 size-24 rounded-full'>
            avatar
        </div>
        <div>
            cover image
        </div>
        </div>
        <div>
            <label className = "block mt-4" htmlFor='usernameIn'>username:</label>
            <input name = "username" type = "text" placeholder='username' id = "usernameIn"></input>
        </div>
        <div>
            <label className = "block mt-4" htmlFor='displayNameIn'>display name:</label>
            <input name = "displayName" type = "text" placeholder='display name' id ="displayNameIn"></input>
        </div>
        <div>
            <label className = "block mt-4" htmlFor='bioIn'>bio:</label>
            <textarea name = "bio" placeholder='bio' id ="bioIn"></textarea>
        </div>
        <div>
            <button 
                className='bg-yellow-300 px-4 py-2 rounded-full mt-4'
                type = "submit"
            >
                Save Profile
            </button>
        </div>
    </form>
  )
}

export default ProfileInfoForm
