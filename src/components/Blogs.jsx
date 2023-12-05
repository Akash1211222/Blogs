import React from 'react'
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import { useContext } from 'react';
// import "./Blogs.css";

const Blogs = () => {

  // consume all
  const { loading, posts } = useContext(AppContext);
  console.log("Printing blog posts...");
  console.log(posts);
  return (
    <div className=' w-11/12 max-w-[650px] py-3 flex flex-col gap-y-7 mt-[86px] mb-[86px] justify-center items-center h-screen'>
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ? (<div>
            <p>No post Found</p>
          </div>) : (posts.map((post) => (
            <div key={post.id}>
              {/* <img src={post.img} alt={post.title} width="120px"/> */}
              <p className=" font-bold text-[22px] ">{post.title}</p>
              <p className=' text=[10px]'>By <span className=' italic'>{post.author }</span> On <span className=' underline font-bold text-sm'>{post.category}</span></p>
              <p className=' text-[12px] underline mt-[4px]'>posted On {post.date }</p>
              <p className=' text-sm mt-[14px]'>{post.content}</p>
              <div className=' flex gap-x-3'>
                {post.tags.map((tag,index) => {
                  return <span key={index} className='text-blue-700 font-bold text-[11px] underline'>{`#${tag} `}</span>
                } )}
              </div>
            </div>
          )))
        )
      }
    </div>
  )
}

export default Blogs