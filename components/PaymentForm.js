import { createDonation } from '@/actions/donationActions'
import { Coffee } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const PaymentForm = () => {
  const [value, setValue] = useState(0)
  const [crypto, setCrypto] = useState("")
  function handleFormSubmit(formData){
    // formData.set('value', value.toString)
    // formData.set('crypto', crypto)
    console.log(Object.fromEntries(formData))
    // await createDonation(formData)
  }
  return (
    <form
        action = {handleFormSubmit} 
        className='grow bg-white flex flex-col rounded-lg p-10 gap-3'>
        <div id ="coffee-portion" 
            className='bg-yellow-100 p-5 rounded-lg grid grid-cols-5 items-center border-yellow-300 border'>
            <div className='flex items-center'><Coffee className='pr-1' size={28}/>x</div>
            <button 
                id = "one"
                className={'rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10 ' 
                    + (value ===1 ?'bg-yellow-300':'')
                }
                type = "button"
                onClick = {() => setValue(1)}
            >
                1
            </button>
            <button 
                id = "two"
                className={'rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10 ' 
                    + (value ===3 ? "bg-yellow-300":"")
                }
                type = "button"
                onClick = {() => setValue(3)}
                >
                3
            </button>
            <button 
                id = "three"
                className={'rounded-full border border-yellow-300 flex justify-center items-center aspect-square h-10 ' 
                    + (value ===5?"bg-yellow-300":"")
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
            name = "name"
            className='p-1 text-lg placeholder:text-md border border-yellow-300 rounded-lg'
        ></input>
        <textarea 
            type = "text"
            name = "message"
            placeholder = "Say Something Nice"
            className='p-1 text-lg h-20 placeholder:top-0 placeholder:left-0 border border-yellow-300 rounded-lg'
        ></textarea>
        <div className='flex flex-col gap-2'>
            <span className='text-gray-500'>Pay with selected crypto or with cc:</span>
            <div className='grid grid-cols-3 gap-2'>
                <button 
                    className={'crypto ' + (crypto === "BTC"?"active":"")}
                    type = "button"
                    onClick={()=>setCrypto('BTC')}
                >
                    <span>BTC</span>
                    <p>Bitcoin</p>
                </button>
                <button 
                    className={'crypto ' + (crypto === "ETH"?"active":"")}
                    type = "button"
                    onClick={()=>setCrypto('ETH')}
                >
                    <span>ETH</span>
                    <p>Ethereum</p>
                </button>
                <button 
                    className={'crypto ' + (crypto === "LTC"?'active':'')}
                    type = "button"
                    onClick={()=>setCrypto('LTC')}
                >
                    <span>LTC</span>
                    <p>Litecoin</p>
                </button>
            </div>
        </div>
        <button
            type = "submit"
            className='rounded-full p-2 bg-yellow-400'
        >
            Support ${value*5}
        </button>
        <input className='hidden' name = "payment" value = {crypto} readOnly/>
    </form>
  )
}

export default PaymentForm
