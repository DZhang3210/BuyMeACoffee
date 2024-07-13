import { Coffee } from 'lucide-react'
import React from 'react'

const PaymentForm = () => {
  return (
    <form className='grow bg-white flex flex-col rounded-lg p-10 gap-3'>
        <div id ="coffee-portion" 
            className='bg-yellow-100 p-5 rounded-lg grid grid-cols-5 items-center border-yellow-300 border'>
            <div className='flex items-center'><Coffee className='pr-1' size={28}/>x</div>
            <button 
                className='rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10'
                type = "button"
            >
                1
            </button>
            <button 
                className='rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10'
                type = "button"
                >
                3
            </button>
            <button 
                className='rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10'
                type = "button"
            >
                5
            </button>
            <input
                type = "number"
                className='h-10 indent-2 rounded-lg'
            >
            </input>
        </div>
        <input 
            type = "text"
            placeholder = "Your name"
            className='p-1 text-lg placeholder:text-md border border-yellow-300 rounded-lg'
        ></input>
        <textarea 
            type = "text"
            placeholder = "Say Something Nice"
            className='p-1 text-lg h-20 placeholder:top-0 placeholder:left-0 border border-yellow-300 rounded-lg'
        ></textarea>
        <button
            type = "submit"
            className='rounded-full p-2 bg-yellow-400'
        >
            Support $5
        </button>
    </form>
  )
}

export default PaymentForm
