import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineVideoCamera,
} from "react-icons/ai";



import { BsPlusSquare, BsGrid3X3 } from "react-icons/bs";

import { HiOutlineBookmark } from 'react-icons/hi'
import { PiUserRectangleLight } from 'react-icons/pi'

export const Data = {
  sidebarLinks: [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      id: 2,
      name: "Search",
      path: "/",
      icon: <AiOutlineSearch />,
    },
    {
      id: 3,
      name: "Research",
      path: "/",
      icon: <AiOutlineCompass />,
    },
    {
      id: 4,
      name: "Reels",
      path: "/",
      icon: <AiOutlineVideoCamera />,
    },
    {
      id: 5,
      name: "Messages",
      path: "/",
      icon: <AiOutlineMessage />,
    },
    {
      id: 6,
      name: "Notifications",
      path: "/",
      icon: <AiOutlineHeart />,
    },
    {
      id: 7,
      name: "Create",
      path: "/",
      icon: <BsPlusSquare />,
    },
  ],
  
  sidebarMobileLinks: [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      id: 2,
      name: "Search",
      path: "/",
      icon: <AiOutlineSearch />,
    },
    {
      id: 3,
      name: "Research",
      path: "/",
      icon: <AiOutlineCompass />,
    },
    {
      id: 4,
      name: "Reels",
      path: "/",
      icon: <AiOutlineVideoCamera />,
    },
  ],
  usersPostsLinks: [
    {
      id: 1,
      name: "Posts",
      icon: <BsGrid3X3/>,
    },
    {
      id: 2,
      name: "Saved",
      icon: <HiOutlineBookmark />,
    }, {
      id: 3,
      name: "Tagged",
      icon: <PiUserRectangleLight/>,
    }
  ],
  stories: [
    {
      name: "caressmil2001",
      active: true,
    }
    ,{
      name: "deal_cereal",
      active: true,
    },
    {
      name: "drugmylife",
      active: true,
    },
    {
      name: "fake_guy",
      active: true,
    },
    {
      name: "famous_guy",
      active: false,
    },
    {
      name: "singletomorrow",
      active: false,
    },
    {
      name: "hunk",
      active: false,
    },
    {
      name: "macho_moron",
      active: false,
    },
    {
      name: "unused_guy",
      active: false,
    },
  ]
};
