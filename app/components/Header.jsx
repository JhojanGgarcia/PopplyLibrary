"use client";
import React, { useState } from "react";
import "../styles/animations.css";
import Link from "next/link";


const socialMedia = [
  {
    githubLink: "https://github.com/JhojanGgarcia/PopplyLibrary",
    githubIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="#000000"
        fill="none"
      >
        <path
          d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    nameForTooltipContentGithub: "Github",
  },
  {
    twitterLink: "https://twitter.com/MrcGgarcia",
    twitterIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="#000000"
        fill="none"
      >
        <path
          d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    nameForTooltipContentTwitter: "Twitter",
  },
];

const createTooltipsPage = [
  {
    iconForCreateTooltipsPage: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="#000000"
        fill="none"
      >
        <path
          d="M4 5C4 4.25579 4 3.88369 4.08912 3.58019C4.30005 2.86183 4.86183 2.30005 5.58019 2.08912C5.88369 2 6.25579 2 7 2H14C14.7442 2 15.1163 2 15.4198 2.08912C16.1382 2.30005 16.7 2.86183 16.9109 3.58019C17 3.88369 17 4.25579 17 5C17 5.74421 17 6.11631 16.9109 6.41981C16.7 7.13817 16.1382 7.69995 15.4198 7.91088C15.1163 8 14.7442 8 14 8H7C6.25579 8 5.88369 8 5.58019 7.91088C4.86183 7.69995 4.30005 7.13817 4.08912 6.41981C4 6.11631 4 5.74421 4 5Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M12 17.5C12 17.0341 12 16.8011 12.0761 16.6173C12.1776 16.3723 12.3723 16.1776 12.6173 16.0761C12.8011 16 13.0341 16 13.5 16C13.9659 16 14.1989 16 14.3827 16.0761C14.6277 16.1776 14.8224 16.3723 14.9239 16.6173C15 16.8011 15 17.0341 15 17.5V20.5C15 20.9659 15 21.1989 14.9239 21.3827C14.8224 21.6277 14.6277 21.8224 14.3827 21.9239C14.1989 22 13.9659 22 13.5 22C13.0341 22 12.8011 22 12.6173 21.9239C12.3723 21.8224 12.1776 21.6277 12.0761 21.3827C12 21.1989 12 20.9659 12 20.5V17.5Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M17.249 5C18.1037 5 18.531 5 18.8681 5.15224C19.9978 5.6624 20.0005 6.86278 20.0005 8.00422C20.0005 8.96065 20.0005 9.43886 19.8701 9.84219C19.4513 11.1378 17.7387 11.768 16.0836 12.2373C14.9006 12.5727 14.3091 12.7404 13.9045 13.2756C13.5 13.8107 13.5 14.4389 13.5 15.6952V16"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    route: "/createTooltipSample",
  },
];

export const Header =()=> {
  let [openIcon, setOpenIcon] = useState(false);
  let [isOpenTooltipForCreateTooltips, setIsOpenTooltipForCreateTooltips] =
    useState(false);

  let handleMouseEnterForCreateTooltips = () => {
    setIsOpenTooltipForCreateTooltips(true);
  };

  let handleMouseLeaveForCreateTooltips = () => {
    setIsOpenTooltipForCreateTooltips(false);
  };

  let mouseEnter = (index) => {
    setOpenIcon(index);
  };
  let mouseLeave = () => {
    setOpenIcon(false);
  };

  return (
    <header className="w-screen flex items-center border bg-white  shadow-[0_0px_30px_rgba(133,_127,_250,_0.5)]  rounded-b-3xl justify-center   max-w-3xl absolute  top-0 h-16 ">
      <ul className="flex items-center absolute  bg-white rounded-2xl border p-2  left-0 mx-5  justify-center gap-2">
        {socialMedia.map((icon, index) => (
          <>
            <Link
              href={index === 0 ? icon.githubLink : icon.twitterLink}
              onMouseEnter={() => mouseEnter(index)}
              onMouseLeave={mouseLeave}
              key={index}
              className="cursor-pointer backdrop-blur-sm flex items-center justify-center"
            >
              {icon.githubIcon}
              {icon.twitterIcon}
              {openIcon === index && (
                <p
                  className="  tada absolute top-14 border p-1 rounded-xl"
                  role="tooltip"
                  aria-label={
                    index === 0
                      ? icon.nameForTooltipContentGithub
                      : icon.nameForTooltipContentTwitter
                  }
                >
                  {index === 0
                    ? icon.nameForTooltipContentGithub
                    : icon.nameForTooltipContentTwitter}
                </p>
              )}
            </Link>
          </>
        ))}
      </ul>
        <p className="text-xl  text-nowrap">RousDev</p>
      <ul
        onMouseEnter={handleMouseEnterForCreateTooltips}
        onMouseLeave={handleMouseLeaveForCreateTooltips}
        className="flex items-center absolute  bg-white rounded-xl border p-1 cursor-pointer right-0 mx-5  justify-center gap-2 "
      >
        {createTooltipsPage.map((tooltip, index) => (
          <Link
            href={tooltip.route}
            className="flex items-center justify-center realtive"
            key={index}
          >
            {tooltip.iconForCreateTooltipsPage}
            {isOpenTooltipForCreateTooltips && (
              <p className="absolute top-14 tada  backdrop-blur-sm border p-1 rounded-xl text-nowrap">
                View the code
              </p>
            )}
          </Link>
        ))}
      </ul>
    </header>
  );
}

