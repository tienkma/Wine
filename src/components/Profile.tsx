import React from 'react'
import userImage from "../images/user/userImage.png"
import "../css/profile.css"
import { getLocal } from '../context/UserContext'
const Profile: React.FC = (props) => {
  const user = getLocal('users')
  return (
    <div id="profile" style={{marginBottom: "30px"}}>
        <div className="userImg"><img src={userImage} alt="user" /></div>
        <div className="userInfo">{`${user.name}`}</div>
    </div>
  )
}

export default Profile