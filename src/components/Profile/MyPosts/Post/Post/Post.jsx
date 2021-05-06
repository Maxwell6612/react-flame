import React from 'react'
import s from './Post.module.css';

const Post = (props) => {

    return <div className={s.item}>
          <img src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg' alt=''/>
          {props.message}
          <div>
            <span>like</span> { props.likesCount }
          </div>
        </div>
}

export default Post;