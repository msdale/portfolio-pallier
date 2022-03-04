import React from 'react'
import profileImage from "../../assets/profile/profile-pic.png";

function Header() {

  return (
    <section>
      <h1 id="my-name"><img id="my-profile" src={profileImage} alt="profile" />Mark Dale</h1>
    </section>
  );
};

export default Header;