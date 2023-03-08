import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BsArrowLeft, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ImBin } from "react-icons/im"
import { BiPencil } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { deletePost } from '../store/post'
import toast from 'react-hot-toast'


export default function ProductDetails() {

    const [postId, setPostId] = useState({})
    let { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostId(data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = () => {
        dispatch(deletePost(postId))
        navigate("/", {
            replace: true
        })
        if (!postId) {
            toast.success(`${postId.title} başarıyla silindi`)
        }

    }

    return (
        <div className='bg-white mt-5 h-[620px] p-10 flex flex-col gap-y-4'>
            <div className='flex items-center gap-x-5 font-semibold text-xl'>
                <Link to='/'><div className='h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center'><BsArrowLeft size={20} /></div></Link>
                <div>Posts</div>
            </div>
            <div className='flex items-center gap-x-5 justify-center mr-48'>
                <Link to="/newPost"><button className='text-white p-1 px-2 flex items-center rounded-lg bg-blue-600 w-28 gap-x-2'><BsPlus />New Post</button></Link>
            </div>
            <div className='border border-gray-400 w-[600px] ml-16 hover:border-purple-700 hover:border-4'>
                <div className='border-b border-dashed border-gray-400 text-sm font-medium'>Title</div>
                <div className='p-5 font-bold text-xl bg-blue-100'>{postId.id},{postId.title}</div>
            </div>
            <div className='border border-gray-400 w-[600px] ml-16 hover:border-purple-700 hover:border-4'>
                <div className='border-b border-dashed border-gray-400 text-sm font-medium '>Detail</div>
                <div className='p-5 font-bold text-xl bg-blue-100'>{postId.body}</div>
            </div>
            <div className='flex items-center gap-x-5 justify-center mr-72'>
                <button onClick={handleDelete} className='flex gap-x-2 p-2 bg-red-600 rounded-lg items-center text-white'><ImBin />Delete</button>
                <button className='flex gap-x-2 p-2 bg-blue-600 rounded-lg items-center text-white'><BiPencil />Upgrade</button>
            </div>

        </div>
    )
}
