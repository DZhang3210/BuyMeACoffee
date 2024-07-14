'use client'

import ProfileInfoFormSkeleton from '@/skeletons/ProfileInfoFormSkeleton'
import axios from 'axios'
import { User } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProfilePage = () => {

    const [userName, setUserName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [bio, setBio] = useState('')
    const [avatarURL, setAvatarURL] = useState('')
    const [coverURL, setCoverURL] = useState('')
    const [showPop, setShowPop] = useState(false)
    const [load, setLoading] = useState(true)
    const [email, setEmail] = useState()
    const router = useRouter();
    useEffect(()=>{
        async function getProfile (){
            const urlParams = new URLSearchParams(window.location.search);
            const email = urlParams.get('email')
            if(email){
                try{
                    const response = await axios.get(`/api/profile/${email}`) 
                    const {username, displayName, bio, avatarURL, coverURL} = response.data
                    setUserName(username)
                    console.log('username',username)
                    setDisplayName(displayName)
                    setBio(bio)
                    setAvatarURL(avatarURL)
                    setCoverURL(coverURL)
                    setLoading(false)
                    setEmail(email)
                    console.log("RESPONSE",response.data)
                } catch(err){
                    router.push('/profile/edit?email=' + email);
                    // router.push('/about')
                }
            }
        }

        getProfile()
        },[])
  return ((
    <div>
    <div>
        <div className='relative bg-gray-200 p-4 rounded-lg h-40'>
            {coverURL && 
                <img src = {coverURL} alt = "avatar logo" className='absolute inset-0 object-fill w-full h-40 rounded-lg'/>
            }

            <div className='absolute top-2/4 left-5 bg-gray-400 size-24 rounded-lg'>
                <div className='h-full w-full rounded-lg flex justify-center items-center overflow-hidden z-[10]'>
                    {avatarURL ? 
                        <img src = {avatarURL} alt = "avatar logo" className='size-24'/>:
                        <User/>    
                    }
                </div>
            </div>
        </div>
        <div className='flex gap-2'>
            <div className='grow'>
                <label className = "block mt-4 font-semibold" htmlFor='usernameIn'>Username:</label>
                <div className='indent-2'>{userName}</div>
            </div>
            <div className='grow'>
                <label className = "block mt-4 font-semibold" htmlFor='displayNameIn'>Display Name:</label>
                <div className='indent-2'>{displayName} </div>
            </div>
        </div>
        <div className='mb-10'>
            <label className = "block mt-4 font-semibold indent-1" htmlFor='bioIn'>Bio:</label>
            <div className='indent-2'>{bio}</div>
        </div>
        <div className='mt-4'>
            <Link 
                href = {"/profile/edit?email="+email}
                className='bg-yellow-300 px-4 py-2 rounded-full mt-4'
            >
                Edit
            </Link>
            <Link 
                href = {"/"+email}
                className='bg-yellow-300 px-4 py-2 rounded-full mt-4 ml-4'
            >
                View Profile
            </Link>
        </div>
    </div>
    </div>
    )
  )
}

export default ProfilePage
