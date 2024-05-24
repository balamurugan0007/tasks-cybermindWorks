import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import women from './assets/woman.jpeg'

export const Comment = ({user}) => {

    const [message,setmessage]=useState()
    const [value,setvalue]=useState([
        {name:'Jane Smith',image:women,text:'Thanks for assigning me on the task. We’ll get the details ironed out.'}
    ])
   
  return (
    <div className='w-full h-full px-3'>
         <h3 className='text-slate-700 mt-4 text-sm font-inter font-bold italic ml-2'>Comments</h3>

         <div className='py-6'>
             {
                value && value.map((res)=>(
                    <div className='py-3 flex '>
                            <div className='w-1/6'>
                                    <div className='w-7 h-7 '>
                                            <Image src={res.image} className='w-full h-full object-cover rounded-full ' alt='pic'/>
                                    </div>
                            </div>
                            <div className='w-5/6'>
                                 <h3 className='font-inter font-semibold text-base text-emerald-600'>{res.name}</h3>
                                 <p className='font-inter text-xs font-normal text-slate-600'>{res.text}</p>
                            </div>
                    </div>
                ))
             }
             
         </div>

         <div className='flex items-center'>
              <div className='w-1/6'>
                    <div className='w-7 h-7 '>
                            <Image src={user.image} className='w-full h-full object-cover rounded-full ' alt='pic'/>
                    </div>
              </div>

              

              <div className='w-5/6 flex items-center py-4 px-2 mb-4 rounded-full shadow'>
                   <input className='w-4/6 h-8  placeholder:ml-4 font-inter text-sm font-normal bg-none border-none outline-none' placeholder='Write comment' onChange={(e)=>setmessage(e.target.value)}/>

                   <div className='w-2/6 flex justify-end'>
                        <IoMdSend className='w-5 h-5 text-red-500' onClick={()=>{
                            value.push({name:user.name,image:user.image,text:message})
                            
                        }}/>
                   </div>

              </div>

         </div>
    </div>
  )
}
