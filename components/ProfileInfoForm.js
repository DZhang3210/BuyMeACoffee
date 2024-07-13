'use client'

import {saveProfile} from '@/actions/profileInfoActions'
import ProfileImageForm from './ProfileImageForm'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react';
import FadeIn from '@/animWrappers/FadeIn';
import ProfileInfoFormSkeleton from '@/skeletons/ProfileInfoFormSkeleton';
import { Skeleton } from './ui/skeleton';

const ProfileInfoForm = () => {
  const [userName, setUserName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [bio, setBio] = useState('')
  const [avatarURL, setAvatarURL] = useState('')
  const [coverURL, setCoverURL] = useState('')
  const [showPop, setShowPop] = useState(false)
  const [load, setLoading] = useState(true)

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
  useEffect(()=>{
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
            setLoading(false)
            console.log("RESPONSE",response.data)   
        }
    }

    getProfile()
  },[])
  
  return (
    load ?
    <ProfileInfoFormSkeleton/>
    :(
    <div>
        {showPop && 
        <div className = "w-[30rem] fixed top-0 right-0 left-0 mx-auto z-20">
        <FadeIn className= "pointer-events-none">
            <Alert className = "bg-yellow-300">
                <Terminal className="h-4 w-4" />
                <AlertTitle>You're Saved!</AlertTitle>
                <AlertDescription>
                    Your changes are now live!
                </AlertDescription>
            </Alert>
        </FadeIn>
        </div>
        }
    <form
        onSubmit = {handleFormAction}
    >
        <ProfileImageForm avatarURL = {avatarURL} coverURL = {coverURL}/>
        <div className='flex gap-3'>
            <div className='grow'>
                <label className = "block mt-4 font-semibold" htmlFor='usernameIn'>Username:</label>
                <input name = "username" defaultValue = {userName} type = "text" placeholder='username' id = "usernameIn" className='w-full border p-1 indent-2 rounded-lg border-yellow-500'></input>
            </div>
            <div className='grow'>
                <label className = "block mt-4 font-semibold" htmlFor='displayNameIn'>Display Name:</label>
                <input name = "displayName" defaultValue = {displayName} type = "text" placeholder='display name' id ="displayNameIn" className='w-full border p-1 indent-2 rounded-lg border-yellow-500'></input>
            </div>
        </div>
        <div>
            <label className = "block mt-4 font-semibold indent-2" htmlFor='bioIn'>Biography:</label>
            <textarea name = "bio" defaultValue = {bio} placeholder='Bio' id ="bioIn" className='w-full border h-40 p-1 indent-2 rounded-lg border-yellow-500'></textarea>
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
    </div>
    )
  )
}

export default ProfileInfoForm
