'use client'
import ProfileInfoFormSkeleton from '@/skeletons/ProfileInfoFormSkeleton'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const userPage = ({params}) => {
    const [userName, setUserName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [bio, setBio] = useState('')
    const [avatarURL, setAvatarURL] = useState('')
    const [coverURL, setCoverURL] = useState('')
    const [showPop, setShowPop] = useState(false)
    const [load, setLoading] = useState(true)
    const { email } = params;

  useEffect(()=>{
    const fetchUser = async () => {
        if(email){
            const response = await axios.get('/api/profile/' + email)
            const {username, displayName, bio, avatarURL, coverURL} = response.data
            setUserName(username)
            console.log('username',username)
            setDisplayName(displayName)
            setBio(bio)
            setAvatarURL(avatarURL)
            setCoverURL(coverURL)
            setLoading(false)
        }
    }
    fetchUser()
  }, [email])
  return (
    load ?
    <ProfileInfoFormSkeleton/>
    :(
    <section className='bg-slate-300'>
    <div>
        <div className='relative bg-gray-200 p-4 h-60'>
            {coverURL && 
                <img src = {coverURL} alt = "avatar logo" className='absolute inset-0 object-fill w-full h-60'/>
            }
        </div>
        <div className='relative max-w-3xl mx-auto pt-20'>
            <div className='absolute bottom-[80%] left-0 ml-30 bg-gray-400 size-36 rounded-lg'>
                <div className='h-full w-full rounded-lg flex justify-center items-center overflow-hidden z-[10]'>
                    {avatarURL ? 
                        <img src = {avatarURL} alt = "avatar logo" className='size-36'/>:
                        <User/>    
                    }
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='grow bg-white'>
                    
                </div>
                <div className='grow bg-white'>
                    
                </div>
            </div>
        </div>
    </div>
    </section>
    )
  )
}

export default userPage
