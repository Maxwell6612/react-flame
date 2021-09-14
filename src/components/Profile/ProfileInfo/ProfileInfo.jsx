import React from 'react'
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
      return <Preloader />
    }

    return (
      <div >
        {/* <div>
          <img src="https://www.ephotozine.com/articles/how-to-use-horizontal-lines-successfully-in-your-images-17104/images/P9020034_dxo.jpg" alt=''/>
        </div> */}
        <div className={s.descriptionBlock}>
          <img alt='' src={props.profile.photos.large} />
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  </div>
    )
}

export default ProfileInfo;