import React from "react";
import { MdSearch } from "react-icons/md";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import "./header.css";
import Search from "../Search/Search";

function Header() {
  return (
    <>
      <header>
        <div className="headerInner">
          <div className="headerColLeft">
            <div className="headerHamburger">__</div>

            <div className="logoWrapper">
                <b>Technext</b>
            </div>

            <nav className="navWrapper">
              <ul className="navList">
                <li className="navItem active">Home</li>
                <li className="navItem">Coinference</li>
                <li className="navItem">Stories</li>
                <li className="navItem">Reviews</li>
                <li className="navItem">Women in Tech</li>
                <li className="navItem">Videos</li>
                <li className="navItem">Contact Us</li>
              </ul>
            </nav>
          </div>

          <div className="headerColRight">
            <ul className="socialMediaWrapper">
              <li className="twitterIcon">
                <BsTwitter color="black" />
              </li>
              <li>
                <BsFacebook color="black" />
              </li>
              <li>
                <BsInstagram color="black" />
              </li>
              <li>
                <BsYoutube color="black" />
              </li>
              <li>
                <BsLinkedin color="black" />
              </li>
            </ul>

            <div className="themeSwitch">
              <span className="switchIcon">
                <span className="switchRoll"></span>
              </span>
              <small>DARK</small>
            </div>

            <div className="searchIconWrapper">
              <MdSearch size={20} />
            </div>
          </div>
        </div>
      </header>

      {/* <Search /> */}
      
    </>
  );
}

export default Header;
