import React from 'react'
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
//import ProfileStatus from "./ProfileStatus"

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
      return <Preloader />
    }

    return (
      <div >
        <div className={s.descriptionBlock}>
          <img alt='' src={profile.photos.large} />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
  </div>
    )
}

export default ProfileInfo;