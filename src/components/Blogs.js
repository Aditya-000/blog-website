import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import Spinner from './Spinner';


const Blogs = () => {
  const {loading,posts} = useContext(AppContext);

  return (
    <div >
       {
        loading ? (<Spinner />): 
        (
          posts.length === 0 ?
           ( <div>
              <p>No posts Found</p>
            </div>
          ):(
            posts.map( (post) => (
              <div key={post.id}
               className='flex flex-col mb-6 p-3 shadow-md lg:w-[50%] lg:flex lg:flex-col lg:align-center lg:ml-[28%]'
              >
                <p className='font-bold text-2xl'>{post.title}</p>
                <p className='font-light'>
                  By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
                <p className='font-light'>posted on {post.date}</p>
                <p className='text-md font-medium'>{post.content}</p>
                <div>
                   {post.tags.map( (tag,index)=>{
                     return <span className='text-md text-sm text-blue-500' key={index}>{`#${tag}  `}</span>
                    })}
                </div>
              </div>
            ))
          ))
       }
    </div>
  )
}

export default Blogs;