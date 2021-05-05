import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
      My posts 
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='hi, how are you?' likesCount='0'/>
        <Post message='this is a post?' likesCount='23'/>
        <Post />
      </div>
    </div>
}

export default MyPosts;