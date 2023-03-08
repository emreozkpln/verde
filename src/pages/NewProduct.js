import React,{useState,useEffect} from 'react'
import { addPost } from '../store/post'
import { useDispatch } from 'react-redux'

export default function NewProduct() {

    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = e=>{
        e.preventDefault()
        const data = {
            userId:1,
            title,
            body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:JSON.stringify(data)})
            .then(res=>res.json())
            .then(data=>dispatch(addPost(data)))
            .catch(err=>console.log(err))
    }

  return (
    <div className='bg-white mt-5 h-[620px] p-10 gap-y-4'>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label for='title'>Title</label>
            <input id='title' value={title} placeholder="title" onChange={e=>setTitle(e.target.value)} className='outline-none border border-gray-500 w-60'/>
            <label for='body'>Body</label>
            <input id='body' value={body} placeholder="body" onChange={e=>setBody(e.target.value)} className='outline-none border border-gray-500 w-60'/>
            <button type='submit'>New post</button>
        </form>
    </div>
  )
}
