import React from 'react'
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import {HiBell} from "react-icons/hi"
import {TbLayoutGrid} from "react-icons/tb"
import { Link } from 'react-router-dom'

export default function () {


  return (
    <div className='w-full h-14 bg-white px-6 flex items-center justify-between'>
            <div className='flex items-center gap-x-2'>
                <Link to='/'><div className='h-6 w-6 rounded-full border bg-blue-600 flex items-center justify-center'><MdOutlineArrowBackIosNew className='text-white'/></div></Link>
                <div className='text-xl font-semibold '>Arbit Blog</div>
            </div>
            <div className='flex items-center gap-x-4'>
                <div className='relative'>
                    <div className='font-medium'>
                        Posts
                    </div>
                    <div className='absolute bottom-4 left-8 text-xs border bg-green-400 text-slate-500'>
                        11
                    </div>
                </div>
                <div><HiBell size={18}/></div>
                <div><TbLayoutGrid size={20}/></div>
                <div className='h-6 w-6'>
                    <img className='rounded-full' src='https://pbs.twimg.com/profile_images/1585033811703865356/tdARebUj_400x400.jpg'/>
                </div>
            </div>
    </div>
  )
}
