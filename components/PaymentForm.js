import { Coffee } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const PaymentForm = () => {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    one.style.backgroundColor = value === 1 ? "#FACC15" : ""
    two.style.backgroundColor = value === 3 ? "#FACC15" : ""
    three.style.backgroundColor = value === 5 ? "#FACC15" : ""
  },[value])
  return (
    <form className='grow bg-white flex flex-col rounded-lg p-10 gap-3'>
        <div id ="coffee-portion" 
            className='bg-yellow-100 p-5 rounded-lg grid grid-cols-5 items-center border-yellow-300 border'>
            <div className='flex items-center'><Coffee className='pr-1' size={28}/>x</div>
            <button 
                id = "one"
                className={'rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10' 
                    // + (value ===1 ?'bg-yellow-300':'')
                }
                type = "button"
                onClick = {() => setValue(1)}
            >
                1
            </button>
            <button 
                id = "two"
                className={'rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10' 
                    // + (value ===3 ? "bg-yellow-300":"")
                }
                type = "button"
                onClick = {() => setValue(3)}
                >
                3
            </button>
            <button 
                id = "three"
                className={'rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10' 
                    // + (value ===5?"bg-yellow-300":"")
                }
                type = "button"
                onClick = {() => setValue(5)}
            >
                5
            </button>
            <input
                type = "number"
                name = "number"
                value = {value}
                onChange={(e) => setValue(e.target.value)}
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
            Support ${value*5}
        </button>
    </form>
  )
}

export default PaymentForm
