import React from 'react'
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/zoom.jpg'
//import ProfileStatus from "./ProfileStatus"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
      return <Preloader />
    }

    const onMainPhotoselected = (e) => {
      if (e.target.length) {
         savePhoto(e.target.files[0]);
      }
    }

    return (
      <div >
        <div className={s.descriptionBlock}>
          <img alt='' src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
          { isOwner && <input type={"file"} onChange={onMainPhotoselected}/>}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
  </div>
    )
}

export default ProfileInfo;