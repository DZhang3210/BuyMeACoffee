'use client'
import PaymentForm from '@/components/PaymentForm'
import ProfileInfoFormSkeleton from '@/skeletons/ProfileInfoFormSkeleton'
import ViewProfileSkeleton from '@/skeletons/ViewProfileSkeleton'
import axios from 'axios'
import { Coffee, User } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ViewProfile = ({email}) => {
    const [userName, setUserName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [bio, setBio] = useState('')
    const [avatarURL, setAvatarURL] = useState('')
    const [coverURL, setCoverURL] = useState('')
    const [showPop, setShowPop] = useState(false)
    const [load, setLoading] = useState(true)
    // const { email } = params;

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
  return ((
    <section className='bg-slate-200 pb-10'>
    <div>
        <div className='relative bg-gray-200 h-60'>
            {coverURL && 
                <img src = {coverURL} alt = "avatar logo" className='absolute inset-0 object-fill w-full h-60'/>
            }
        </div>
        <div className='relative max-w-3xl mx-auto pt-20'>
            <div className='absolute bottom-[92%] left-5 ml-30 bg-gray-400 size-36 rounded-lg border-4 border-white'>
                <div className='h-full w-full rounded-lg flex justify-center items-center overflow-hidden z-[10]'>
                    {avatarURL ? 
                        <img src = {avatarURL} alt = "avatar logo" className='size-36 '/>:
                        <User/>    
                    }
                    <div
                        className='absolute left-full bottom-0 ml-3'
                    >
                        <h1 className='font-bold text-4xl'>{displayName}</h1>
                        <h1 className='font-semibold flex'><Coffee/>/{displayName}</h1>
                    </div>
                </div>
            </div>
            <div className='grid grid-rows-2 sm:grid-cols-2 gap-2 max-w-xl sm:max-w-3xl mx-auto'>
                <div className='grow bg-white rounded-lg p-5'>
                    <h3
                        className='font-semibold'>About {userName}</h3>
                    <h3
                        className='font-semibold'
                        >Recent Supporters
                    </h3>
                    <hr/>
                </div>
                <PaymentForm/>
            </div>
        </div>
    </div>
    </section>
    )
  )
}

export default ViewProfile

