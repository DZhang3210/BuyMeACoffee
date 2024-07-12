'use client'
import axios from 'axios'
import { Pen, User } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const ProfileImageForm = ({avatarURL = "", coverURL = ""}) => {
    const avatarRef = useRef()
    const coverRef = useRef()
    const [avatarImg, setAvatarImg] = useState(avatarURL)
    const [coverImg, setCoverImg] = useState(coverURL)
    // console.log("HELLO\n\n\n\n")
    // useEffect(()=>{setAvatarImg(avatarURL); setCoverImg(coverURL)},[])
    useEffect(()=>{setAvatarImg(avatarURL)},[avatarURL])
    useEffect(()=>{setCoverImg(coverURL)},[coverURL])
    // console.log('IMAGE FORM',avatarURL, coverURL)
    
    async function upload(e){
        e.preventDefault()
        console.log(e)
        const id = e.target.id
        const target = e.target
        if(target.files?.length){
            const file = target.files[0]
            const data = new FormData;
            data.set('file', file)
            const response = await axios.post('/api/upload', data)
            console.log(response)
            if(id === 'avatarRef')
                setAvatarImg(response.data.url)
            else if(id === 'coverRef')
                setCoverImg(response.data.url) 
        }
      }
  return (
    <div className='relative bg-gray-200 p-4 rounded-lg h-40'>
        {coverImg && 
            <img src = {coverImg} alt = "avatar logo" className='absolute inset-0 object-fill w-full h-40'/>
        }

        <input onChange = {upload} ref = {coverRef} type = "file" className='hidden' id = "coverRef"/>
        <input onChange = {upload} ref = {avatarRef} type = "file" className='hidden' id = "avatarRef"/>
        <input type = "text" name = "avatarURL" value = {avatarImg} style={{ display: 'none' }} className='hidden' readOnly/>
        <input type = "text" name = "coverURL" value = {coverImg} style={{ display: 'none' }} className='hidden' readOnly/>

        <div className='absolute top-1/2 left-5 bg-gray-400 size-24 rounded-full'>
            <div className='h-full w-full rounded-lg flex justify-center items-center overflow-hidden z-[10]'>
                {avatarImg ? 
                    <img src = {avatarImg} alt = "avatar logo" className='size-24'/>:
                    <User/>    
                }
             </div>
             <button
            type = "button"
            onClick = {() => avatarRef.current.click()}
            className='flex justify-center items-center overflow-hidden border border-black bg-gray-200 size-9 rounded-full absolute right-[-10px] bottom-[-10px] hover:scale-105 transition'
            >
            <Pen size = {15} />
            </button>
        </div>

        <button
            type = "button"
            onClick = {() => coverRef.current.click()}
            className='flex justify-center items-center overflow-hidden bg-gray-300 size-10 rounded-full absolute right-2 bottom-2 hover:scale-105 transition'
        >
           <Pen size = {15} />
        </button>

    </div>
  )
}

export default ProfileImageForm
