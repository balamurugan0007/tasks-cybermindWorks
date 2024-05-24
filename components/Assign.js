'use client'

import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import { Userlist } from './user';
import Image from 'next/image';
import { IoMdArrowDropdown } from "react-icons/io";

import women from './assets/woman.jpeg'
import { CiStickyNote } from "react-icons/ci";
import { Comment } from './Comment';


export const Assign = () => {

const [select ,setselcet]=useState({name:'Jane smith',image:women})
const [view,setview]=useState(false)
  

  return (
    <div className='w-full h-full px-5 mt-6 '>
          <div className='flex  items-center'>
              <div className='flex justify-between w-1/3'>
                  <FaRegUser className='w-4 h-4 text-red-400'/>
                  <h4 className='font-inter text-sm font-medium text-slate-600 italic'>Assign to:</h4>
              </div>
              <div className='w-2/3 px-2'>
                   <div className='bg-none px-4 py-2 border rounded-full '>

                               {
                                select ?
                                <div className='flex items-center cursor-pointer' onClick={()=>{
                                  setview(true)
                                }}>
                                            <Image className='w-6 h-6 object-cover rounded-full ' src={select.image} alt="img"/>
                                            <h3 className=' ml-3 font-inter font-semibold text-sm  text-emerald-600'>{select.name}</h3>
                                            <IoMdArrowDropdown className='w-5 h-6 text-slate-900 ml-auto'/>
                                        </div>
                                        :null
                               }
                                  
                     
                    
                        
                   </div>

                  
              </div>
              
          </div>

          <div className='flex relative justify-end px-6'>
          {
                      view && 

                      <div className='  w-4/6 '>
                      {
                              Userlist && Userlist.map(res=>(
                            
                            
                                    <div className='flex justify-between p-2 hover:text-red-400 border cursor-pointer border-slate-300' key={res.id} onClick={()=>{setselcet({name:res.name,image:res.image})
                                    setview(false)
                                    }}>
                                        <Image className='w-8 h-8 object-cover rounded-full' src={res.image} alt="img"/>
                                        <h3 className='font-inter font-semibold text-base text-green-400'>{res.name}</h3>
                                    </div>
                              
                              
                              ))
                            }
                   </div>

                     }
          </div>

          <div className='flex items-center'>

            <div className='notes w-1/3 flex'>
                <CiStickyNote className='w-5 h-5 text-red-400'/>
                <h3 className='text-sm ml-3 text-slate-600 font-inter font-medium italic'>Note:</h3>
            </div>

            <div className='w-2/3 py-2 px-1'>
                <textarea className='w-full mt-2 h-12 border border-slate-300 rounded-md font-inter font-medium text-sm'/>
            </div>


          </div>

          <div className='px-2 mt-4'>
             <hr className=''/>
          </div>

          <Comment user={select}/>

    </div>
  )
}
