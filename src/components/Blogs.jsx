import React from 'react'
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import { useContext } from 'react';
import "./Blogs.css";

const Blogs = () => {

  // consume all
  const { loading, posts } = useContext(AppContext);
  console.log("Printing blog posts...");
  console.log(posts);
  return (
    <div>
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ? (<div>
            <p>No post Found</p>
          </div>) : (posts.map((post) => (
            <div key={post.id}>
              <img src={post.img} alt={post.title} width="120px"/>
              <p className=" font-bold border-l-amber-500">{post.title}</p>
              <p>By <span>{post.author }</span> On <span>{post.category}</span></p>
              <p>posted On {post.date }</p>
              <p>{post.content}</p>
              <div>
                {post.tags.map((tag,index) => {
                  return <span key={index}>{`#${tag}`}</span>
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