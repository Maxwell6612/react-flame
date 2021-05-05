import React from 'react'
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div >
        <div><img src="https://www.ephotozine.com/articles/how-to-use-horizontal-lines-successfully-in-your-images-17104/images/P9020034_dxo.jpg" alt=''/></div>
    <div className={s.descriptionBlock}>
      ava+desc
    </div>
  </div>
    )
}

export default ProfileInfo;