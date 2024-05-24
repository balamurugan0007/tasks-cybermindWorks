import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Event } from './Event';
import { Assign } from './Assign';


export const Mobile = () => {
  return (
    <div>
         <div className='flex justify-center py-10'>
              <div className='w-1/4 h-5/6 px-2 py-5 bg-white border-2 border-slate-200  rounded-3xl'>
                   <div className='flex justify-between px-5'>
                       <div className='tick icon'>
                             <CiCircleCheck className='w-5 h-5 text-red-500'/>

                            
                       </div>
                       <div className='flex'>
                                        <RiDeleteBin6Line className='w-5 h-5 text-red-500 ml-4'/>
                                        <IoIosCloseCircleOutline className='w-5 h-5 text-red-500 ml-4'/>
                                        
                             </div>
                   </div>

                   <Event/>
                   <Assign/>
                   
              </div>
         </div>
    </div>
  )
}
