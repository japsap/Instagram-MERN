import React, { useState } from "react";

import { BsGearWide } from "react-icons/bs";
import { Data } from "../../Constants/Data";

import { Link } from "react-router-dom";

const UserProfile = () => {
  const [lid, setLid] = useState(1);

  return (
    <div className="userProfile__container">
      <div className="userProfile__inner">
        <div className="userProfile__data">
          <div className="userProfile__image-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" />
          </div>

          <div className="userProfile__cretentials-box">
            <div className="userProfile__usersname">
              <span>yourfavvalex</span>
              <button>Edit Profile</button>
              <BsGearWide className="icon" />
            </div>

            <div className="userProfile__followings">
              <p>
                <span>2</span>Posts
              </p>
              <p>
                <span>101</span>Followers
              </p>
              <p>
                <span>104</span>Followings
              </p>
            </div>

            <div className="userProfile__bio">
              <p>22</p>
            </div>
          </div>
        </div>

        <div className="userProfile__postsPreference">
          {Data.usersPostsLinks.map((link) => (
            <li className={lid === link.id ? "active": ""} onClick={() => setLid(link.id)} key={link.id}>
              <Link>
                <i>{link.icon}</i>
                {link.name}
              </Link>
            </li>
          ))}
        </div>


        <div className="userProfile__gallery">
          <img src='https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'/>
          <img src='https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'/>
          <img src='https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'/>
        </div>


      </div>
    </div>
  );
};

export default UserProfile;
