'use client'

import {saveProfile} from '@/actions/profileInfoActions'
import ProfileImageForm from './ProfileImageForm'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react';

const ProfileInfoForm = () => {
  const [userName, setUserName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [bio, setBio] = useState('')
  const [avatarURL, setAvatarURL] = useState('')
  const [coverURL, setCoverURL] = useState('')
  const [showPop, setShowPop] = useState(false)

  async function handleFormAction(e){
    e.preventDefault()
    const formData = new FormData(e.target);
    const response = await saveProfile(formData)
    setShowPop(true)
    try{
        new Promise(resolve => setTimeout(()=>{setShowPop(false)},3000))
    }catch(err){
        console.log(err)
    }
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
    <>
    {showPop && <Alert className = "fixed bottom-0 left-auto right-auto">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            You can add components and dependencies to your app using the cli.
        </AlertDescription>
    </Alert>}
    <form
        onSubmit = {handleFormAction}
    >
        <ProfileImageForm avatarURL = {avatarURL} coverURL = {coverURL}/>
            
        <div>
            <label className = "block mt-4" htmlFor='usernameIn'>username:</label>
            <input name = "username" defaultValue = {userName} type = "text" placeholder='username' id = "usernameIn" className='w-full border'></input>
        </div>
        <div>
            <label className = "block mt-4" htmlFor='displayNameIn'>display name:</label>
            <input name = "displayName" defaultValue = {displayName} type = "text" placeholder='display name' id ="displayNameIn" className='w-full border'></input>
        </div>
        <div>
            <label className = "block mt-4" htmlFor='bioIn'>bio:</label>
            <textarea name = "bio" defaultValue = {bio} placeholder='bio' id ="bioIn" className='w-full border'></textarea>
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
    </>
  )
}

export default ProfileInfoForm
