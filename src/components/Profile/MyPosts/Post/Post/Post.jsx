import React from 'react'
import s from './Post.module.css';

const Post = () => {
    return <div className={s.item}>
          <img src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' />
          post 1
          <div>
            <span>like</span>
          </div>
        </div>
}

export default Post;