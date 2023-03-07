import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/post'
import { useSelector } from 'react-redux'

export default function ProductList() {

    
    // const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => dispatch(addPost(data)))
            .catch(err => console.log(err))
    }, [])
    const {posts} = useSelector(state=>state.posts)
    
    console.log(posts.title)
    
    return (
        <div className='bg-white mt-5 grid grid-cols-3 gap-4 p-2'>
            {
                posts.map(post => (
                    <div key={post.id} className="cursor-pointer">
                        <div className='text-sm text-gray-400'>card-body</div>
                        <Link to={`/${post.id}`}>
                            <div className=' border-2 hover:border-blue-400 overflow-auto'>
                                <div className=' font-semibold text-lg'>
                                    {post.id},{post.title}
                                </div>
                                <div className='text-sm text-gray-300'>
                                    {post.body}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
