import React from 'react'
import Profile from '../assets/ProfileCropped.jpg'

const Welcome = (props) => {
return(
  <div className="welcome-container">
    <div className="profile-wrapper">
      <img className="profile-picture" src={Profile} alt="Greg Johnston Profile" />
    </div>
    <h2>Greg Johnston</h2>
    <p>Web Developer and Composer</p>
  </div>
  )
}
export default Welcome
