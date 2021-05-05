import React from 'react'
import MyPosts from './MyPosts/Post/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div>
    <div><img src="https://www.ephotozine.com/articles/how-to-use-horizontal-lines-successfully-in-your-images-17104/images/P9020034_dxo.jpg" alt=''/></div>
    <div>
      ava+desc
    </div>
    <MyPosts />
  </div>
}

export default Profile;