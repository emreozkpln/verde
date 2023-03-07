import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function ProductDetails() {

    const [postId, setPostId] = useState({})
    let { id } = useParams()
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostId(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='bg-white mt-5 h-[620px] p-10 flex flex-col gap-y-8'>
            <div className='flex items-center gap-x-5 font-semibold text-xl'>
                <Link to='/'><div className='h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center'><BsArrowLeft size={20}/></div></Link>
                <div>Posts</div>
            </div>
            <div className='border border-gray-400 w-96 ml-16 hover:border-purple-700 hover:border-4'>
                <div className='border-b border-dashed border-gray-400 text-sm font-medium'>Title</div>
                <div className='p-5 font-bold text-xl bg-blue-100'>{postId.title}</div>
            </div>
            <div className='border border-gray-400 w-96 ml-16 hover:border-purple-700 hover:border-4'>
                <div className='border-b border-dashed border-gray-400 text-sm font-medium '>Detail</div>
                <div className='p-5 font-bold text-xl bg-blue-100'>{postId.body}</div>
            </div>
        </div>
    )
}
