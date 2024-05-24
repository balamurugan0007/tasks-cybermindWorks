import React from 'react'
import { FaRegCalendar } from "react-icons/fa6";

export const Event = () => {
  return (
    <div className='w-full h-full p-3 mt-4'>
          <div className='px-5  '>
              <div className=' p-2 bg-none border border-slate-200 rounded-full'>
                    <h4 className='font-bold text-xl text-red-600 font-inter text-center'>Flower Arrangement</h4>
              </div>

              <div className=' py-3  justify-center bg-none border border-slate-200 rounded-full mt-2 flex items-center '>
                <div className='w-5/6 flex items-center justify-between'>
                    <FaRegCalendar className='text-slate-300 w-4 h-5 '/>
                            <h4 className='font-semibold text-xs  text-slate-900 font-inter  ' >Dec 5, 2024 at 8:00-10:00 AM </h4>
                </div>
              </div>
          </div>
    </div>
  )
}
