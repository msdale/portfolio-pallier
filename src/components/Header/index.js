import React from 'react';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';
import profileImage from "../../assets/profile/profile-pic.png";

function Header() {

  return (
    <header>
      <nav>
        <ul className="flex-row">
          <li>
            <section id="my-name">
              <img id="my-profile" src={profileImage} alt="profile" />
              Mark Dale
            </section>
          </li>
          <ul className="flex-row center-content">
            <li className="mx-5">
              <a href="#about">
                About me
              </a>
            </li>
            <li className="mx-5">
              {/*<Project></Project>*/}
              <p>Projects</p>
            </li>
            <li className="mx-5">
              {/*<Contact></Contact>*/}
              <p>Contact</p>
            </li>
            <li className="mx-5">
              <p>Resume</p>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;