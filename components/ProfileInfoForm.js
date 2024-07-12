'use client'

import {saveProfile} from '@/actions/profileInfoActions'
import ProfileImageForm from './ProfileImageForm'
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileInfoForm = () => {
  const [userName, setUserName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [bio, setBio] = useState('')
  const [avatarURL, setAvatarURL] = useState('')
  const [coverURL, setCoverURL] = useState('')

  async function handleFormAction(e){
    const formData = new FormData(e.target);
    const response = await saveProfile(formData)
  }
  useEffect((()=>{
    async function getProfile (){
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email')
        if(email){
            const response = await axios.get(`/api/profile/${email}`) 
            const {username, displayName, bio, avatarURL, coverURL} = response.data
            setUserName(username)
            console.log('username',username)
            setDisplayName(displayName)
            setBio(bio)
            setAvatarURL(avatarURL)
            setCoverURL(coverURL)
            console.log("RESPONSE",response.data)   
        }
    }
    getProfile()
  }),[])
  
  return (
    <form
        onSubmit = {handleFormAction}
    >
        <ProfileImageForm avatarURL = {avatarURL} coverURL = {coverURL}/>
    
        <div>
            <label className = "block mt-4" htmlFor='usernameIn'>username:</label>
            <input name = "username" defaultValue = {userName} type = "text" placeholder='username' id = "usernameIn"></input>
        </div>
        <div>
            <label className = "block mt-4" htmlFor='displayNameIn'>display name:</label>
            <input name = "displayName" defaultValue = {displayName} type = "text" placeholder='display name' id ="displayNameIn"></input>
        </div>
        <div>
            <label className = "block mt-4" htmlFor='bioIn'>bio:</label>
            <textarea name = "bio" defaultValue = {bio} placeholder='bio' id ="bioIn"></textarea>
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
