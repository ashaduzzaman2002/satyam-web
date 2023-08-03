import React, { useEffect, useState } from 'react';
import Style from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  const handleClick = (path) => {
    setActiveLink(path);
    setToggle(false);
  };

  return (
    <nav className="absolute top-0 w-full z-50 bg-[#232323] lg:bg-inherit py-2 lg:py-0 pr-4 lg:pr-0">
      {/* ---- Number ---- */}
      <div
        className={`lg:flex py-2 hidden  bg-[#232323] ${Style.navContact}`}
      >
        <div className=' max-w-7xl w-full mx-auto flex justify-between items-center px-4'>
          <div className='flex items-center gap-[10px] md:gap-5'>
            <div className="flex gap-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_86_323)">
                    <path
                      d="M15.2053 13.2304C14.5519 12.5853 13.7362 12.5853 13.087 13.2304C12.5917 13.7215 12.0965 14.2126 11.6095 14.712C11.4764 14.8493 11.364 14.8785 11.2017 14.7869C10.8812 14.6121 10.54 14.4706 10.232 14.2792C8.79616 13.3761 7.5934 12.2149 6.52797 10.9081C5.99942 10.2589 5.52914 9.56384 5.20036 8.78142C5.13377 8.62327 5.14625 8.51923 5.27527 8.39021C5.77052 7.9116 6.25329 7.42051 6.74022 6.92942C7.4186 6.24688 7.4186 5.44781 6.73606 4.76111C6.34902 4.3699 5.96197 3.98702 5.57492 3.59581C5.17538 3.19627 4.78001 2.79258 4.37632 2.3972C3.72291 1.76045 2.9072 1.76045 2.25795 2.40137C1.75854 2.89246 1.27993 3.39604 0.772188 3.87881C0.301903 4.32412 0.0646799 4.86932 0.0147382 5.50608C-0.0643362 6.54237 0.189534 7.52039 0.54745 8.47345C1.27993 10.4461 2.39529 12.1983 3.74788 13.8047C5.57492 15.9772 7.75571 17.696 10.3069 18.9362C11.4556 19.4939 12.6458 19.9226 13.9402 19.9933C14.8308 20.0433 15.6049 19.8185 16.225 19.1235C16.6495 18.6491 17.1281 18.2162 17.5776 17.7626C18.2435 17.0884 18.2476 16.2727 17.5859 15.6068C16.7952 14.8119 16.0003 14.0211 15.2053 13.2304ZM14.2239 9.15834C14.3571 9.56725 14.7539 9.8548 15.1778 9.78243C15.6021 9.70998 15.8917 9.30532 15.7718 8.89191C15.4499 7.78217 14.8541 6.77714 14.0276 5.94723C13.1441 5.06377 12.0676 4.45005 10.88 4.14594C10.4628 4.03911 10.067 4.34094 10.0072 4.76741C9.94747 5.19383 10.2472 5.58226 10.6606 5.70286C11.5129 5.95155 12.2871 6.40837 12.9288 7.05011C13.5263 7.64757 13.966 8.36638 14.2239 9.15834ZM16.8118 3.23789C15.224 1.65006 13.2589 0.586319 11.0871 0.133369C10.6657 0.0454841 10.271 0.345435 10.2112 0.771732C10.1514 1.19825 10.4498 1.58934 10.8703 1.68204C12.7055 2.08652 14.3669 2.9982 15.7131 4.34077C16.9808 5.60846 17.868 7.16781 18.3029 8.88602C18.4084 9.30266 18.8074 9.58846 19.2311 9.51613C19.6554 9.44368 19.943 9.03969 19.8414 8.6214C19.3465 6.58441 18.3083 4.73807 16.8118 3.23789Z"
                      fill="#FF7100"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_86_323">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="hidden lg:block text-[12px]">+91 99099 83100</p>
            </div>

            <div className="flex gap-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M12.9592 10.8301L11.2841 12.5108C10.6049 13.1924 9.40973 13.2071 8.71578 12.5108L7.04066 10.8301L1.02441 16.8659C1.24836 16.9694 1.49527 17.0312 1.75777 17.0312H18.2421C18.5046 17.0312 18.7515 16.9695 18.9754 16.8659L12.9592 10.8301Z"
                    fill="#FF7100"
                  />
                  <path
                    d="M18.2422 2.96875H1.75781C1.49531 2.96875 1.2484 3.03055 1.02453 3.1341L7.45332 9.58422C7.45375 9.58465 7.45426 9.58473 7.45469 9.58516C7.45495 9.58544 7.45513 9.58579 7.4552 9.58617L9.54555 11.6834C9.76758 11.9055 10.2325 11.9055 10.4545 11.6834L12.5445 9.58652C12.5445 9.58652 12.545 9.58559 12.5454 9.58516C12.5454 9.58516 12.5463 9.58465 12.5468 9.58422L18.9754 3.13406C18.7515 3.03047 18.5047 2.96875 18.2422 2.96875ZM0.186953 3.95359C0.0710937 4.18789 0 4.44797 0 4.72656V15.2734C0 15.552 0.0710156 15.8121 0.186914 16.0464L6.21359 10.0002L0.186953 3.95359ZM19.813 3.95352L13.7864 10.0002L19.813 16.0465C19.9289 15.8122 20 15.5521 20 15.2734V4.72656C20 4.44789 19.9289 4.18781 19.813 3.95352Z"
                    fill="#FF7100"
                  />
                </svg>
              </div>
              <p className="hidden lg:block text-[12px]">+91 99099 83100</p>
            </div>


          </div>

          <div className='flex items-center gap-5'>
            <a href="#"><img src="/images/twitter.svg" alt="twitter" /></a>

            <a href="#"><img src="/images/facebook-f.svg" alt="twitter" /></a>
            <a href="#"><img src="/images/linkedin-in.svg" alt="twitter" /></a>
            <a href="#"><img src="/images/youtube.svg" alt="twitter" /></a>
          </div>
        </div>


      </div>
      <div className={`grid grid-cols-5 pl-4 xl:pl-[2.5vw] gap-2 ${Style.navBrand}`}>

        {/* ---- Logo ---- */}
        <Link
          onClick={() => setActiveLink('/')}
          to="/"
          className={`flex items-center col-span-1 w-full`}
        >
          <img src={'/images/logo.svg'} className="object-contain w-24 lg:hidden" alt="Logo" />
          <img src={'/images/logo-2.svg'} className="object-contain w-24 hidden lg:block pt-2" alt="Logo" />
        </Link>

        <div className="col-span-4  w-full flex lg:block flex-col justify-between">

          {/* ---- Number ---- */}
          <div
            className={`flex lg:hidden justify-end gap-4  ${Style.navContact}`}
          >

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_86_323)">
                  <path
                    d="M15.2053 13.2304C14.5519 12.5853 13.7362 12.5853 13.087 13.2304C12.5917 13.7215 12.0965 14.2126 11.6095 14.712C11.4764 14.8493 11.364 14.8785 11.2017 14.7869C10.8812 14.6121 10.54 14.4706 10.232 14.2792C8.79616 13.3761 7.5934 12.2149 6.52797 10.9081C5.99942 10.2589 5.52914 9.56384 5.20036 8.78142C5.13377 8.62327 5.14625 8.51923 5.27527 8.39021C5.77052 7.9116 6.25329 7.42051 6.74022 6.92942C7.4186 6.24688 7.4186 5.44781 6.73606 4.76111C6.34902 4.3699 5.96197 3.98702 5.57492 3.59581C5.17538 3.19627 4.78001 2.79258 4.37632 2.3972C3.72291 1.76045 2.9072 1.76045 2.25795 2.40137C1.75854 2.89246 1.27993 3.39604 0.772188 3.87881C0.301903 4.32412 0.0646799 4.86932 0.0147382 5.50608C-0.0643362 6.54237 0.189534 7.52039 0.54745 8.47345C1.27993 10.4461 2.39529 12.1983 3.74788 13.8047C5.57492 15.9772 7.75571 17.696 10.3069 18.9362C11.4556 19.4939 12.6458 19.9226 13.9402 19.9933C14.8308 20.0433 15.6049 19.8185 16.225 19.1235C16.6495 18.6491 17.1281 18.2162 17.5776 17.7626C18.2435 17.0884 18.2476 16.2727 17.5859 15.6068C16.7952 14.8119 16.0003 14.0211 15.2053 13.2304ZM14.2239 9.15834C14.3571 9.56725 14.7539 9.8548 15.1778 9.78243C15.6021 9.70998 15.8917 9.30532 15.7718 8.89191C15.4499 7.78217 14.8541 6.77714 14.0276 5.94723C13.1441 5.06377 12.0676 4.45005 10.88 4.14594C10.4628 4.03911 10.067 4.34094 10.0072 4.76741C9.94747 5.19383 10.2472 5.58226 10.6606 5.70286C11.5129 5.95155 12.2871 6.40837 12.9288 7.05011C13.5263 7.64757 13.966 8.36638 14.2239 9.15834ZM16.8118 3.23789C15.224 1.65006 13.2589 0.586319 11.0871 0.133369C10.6657 0.0454841 10.271 0.345435 10.2112 0.771732C10.1514 1.19825 10.4498 1.58934 10.8703 1.68204C12.7055 2.08652 14.3669 2.9982 15.7131 4.34077C16.9808 5.60846 17.868 7.16781 18.3029 8.88602C18.4084 9.30266 18.8074 9.58846 19.2311 9.51613C19.6554 9.44368 19.943 9.03969 19.8414 8.6214C19.3465 6.58441 18.3083 4.73807 16.8118 3.23789Z"
                    fill="#FF7100"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_86_323">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.9592 10.8301L11.2841 12.5108C10.6049 13.1924 9.40973 13.2071 8.71578 12.5108L7.04066 10.8301L1.02441 16.8659C1.24836 16.9694 1.49527 17.0312 1.75777 17.0312H18.2421C18.5046 17.0312 18.7515 16.9695 18.9754 16.8659L12.9592 10.8301Z"
                  fill="#FF7100"
                />
                <path
                  d="M18.2422 2.96875H1.75781C1.49531 2.96875 1.2484 3.03055 1.02453 3.1341L7.45332 9.58422C7.45375 9.58465 7.45426 9.58473 7.45469 9.58516C7.45495 9.58544 7.45513 9.58579 7.4552 9.58617L9.54555 11.6834C9.76758 11.9055 10.2325 11.9055 10.4545 11.6834L12.5445 9.58652C12.5445 9.58652 12.545 9.58559 12.5454 9.58516C12.5454 9.58516 12.5463 9.58465 12.5468 9.58422L18.9754 3.13406C18.7515 3.03047 18.5047 2.96875 18.2422 2.96875ZM0.186953 3.95359C0.0710937 4.18789 0 4.44797 0 4.72656V15.2734C0 15.552 0.0710156 15.8121 0.186914 16.0464L6.21359 10.0002L0.186953 3.95359ZM19.813 3.95352L13.7864 10.0002L19.813 16.0465C19.9289 15.8122 20 15.5521 20 15.2734V4.72656C20 4.44789 19.9289 4.18781 19.813 3.95352Z"
                  fill="#FF7100"
                />
              </svg>
            </div>




          </div>


          {/* ---- Menu ---- */}
          <div
            className={`hidden lg:flex items-center py-2  justify-between xl:gap-28 gap-6 pr-4 xl:pr-[2vw] pl-4 lg:pl-16 xl:pl-[4vw] ms-auto ${Style.navMenu}`}
          >
            <ul className="flex justify-between gap-10">
              <li>
                <Link
                  onClick={() => setActiveLink('/')}
                  className={`font-medium text-base text-[#232323] ${Style.navLink} ${activeLink === '/' && Style.active
                    }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveLink('/about-us')}
                  className={`font-medium text-base text-[#232323] ${Style.navLink} ${activeLink === '/about-us' && Style.active
                    } `}
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveLink('/media')}
                  className={`font-medium text-base text-[#232323] ${Style.navLink} ${activeLink === '/media' && Style.active
                    }`}
                  to="/media"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveLink('/recent-work')}
                  className={`font-medium text-base text-[#232323] ${Style.navLink} ${activeLink === '/recent-work' && Style.active
                    }`}
                  to="/recent-work"
                >
                  Recent Work
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveLink('/contact-us')}
                  className={`font-medium text-base text-[#232323] ${Style.navLink} ${activeLink === '/contact-us' && Style.active
                    }`}
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <button
              className={`flex gap-2 text-white px-4 lg:px-0 py-2 items-center w-36 xl:w-48 justify-center bg-[#ff7100] rounded-[5px]`}
            >
              <span className="text-white text-sm font-semibold">
                Get A Quote
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M18.025 11C18.0251 10.89 18.0035 10.781 17.9614 10.6794L17.8228 10.7368L17.9614 10.6794C17.9193 10.5777 17.8575 10.4854 17.7795 10.4077L10.9047 3.53286C10.5776 3.20553 10.0476 3.20585 9.72045 3.53279C9.39317 3.85987 9.39321 4.38988 9.72041 4.71708L16.0033 11L9.72045 17.2828C9.72044 17.2828 9.72043 17.2828 9.72041 17.2828C9.39312 17.6099 9.39345 18.1399 9.72038 18.4671C10.0475 18.7943 10.5775 18.7943 10.9047 18.4671L17.7795 11.5922C17.8575 11.5145 17.9193 11.4222 17.9614 11.3205L17.8228 11.2631L17.9614 11.3205C18.0035 11.2189 18.0251 11.11 18.025 11ZM18.025 11C18.025 11 18.025 11.0001 18.025 11.0001L17.875 11L18.025 10.9998C18.025 10.9999 18.025 10.9999 18.025 11ZM12.2797 10.4078L5.40467 3.53283C5.07747 3.20563 4.54745 3.20558 4.22038 3.53286C3.89344 3.86001 3.89312 4.39 4.22045 4.71712L10.5033 11L4.22041 17.2828C3.89321 17.61 3.89317 18.14 4.22045 18.4671C4.54759 18.794 5.07755 18.7944 5.40467 18.4671C5.40468 18.4671 5.40469 18.4671 5.40471 18.4671L12.2797 11.5921C12.4431 11.4286 12.525 11.214 12.525 11C12.525 10.7859 12.4431 10.5713 12.2797 10.4078Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.3"
                />
              </svg>
            </button>
          </div>


          {/* ---- Bar ---- */}
          <div className="flex lg:hidden justify-end">
            <button  aria-label="Toggle Menu" onClick={() => setToggle(!toggle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M7.5 6C7.5 5.1716 8.1716 4.5 9 4.5H28.5C29.3284 4.5 30 5.1716 30 6C30 6.8284 29.3284 7.5 28.5 7.5H9C8.1716 7.5 7.5 6.82834 7.5 6ZM28.5 13.5H1.5C0.671602 13.5 0 14.1717 0 15C0 15.8284 0.671602 16.5 1.5 16.5H28.5C29.3284 16.5 30 15.8284 30 15C30 14.1717 29.3284 13.5 28.5 13.5ZM28.5 22.5H15C14.1717 22.5 13.5 23.1716 13.5 24C13.5 24.8283 14.1717 25.5 15 25.5H28.5C29.3284 25.5 30 24.8283 30 24C30 23.1716 29.3284 22.5 28.5 22.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>


      {/* ---- Mobile menu ---- */}
      {toggle && (
        <div className=" lg:hidden fixed top-0 right-0 w-screen h-screen z-50 flex justify-end">
          <div
            onClick={() => setToggle(false)}
            className="w-full h-full bg-black bg-opacity-20"
          ></div>

          <ul className="flex flex-col gap-4 bg-white drop-shadow h-full p-5 pt-14">
            <div className=" absolute top-4 left-5">
              <svg
                onClick={() => setToggle(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
                style={{ fill: '#ff7100' }}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </div>
            <li>
              <Link
                onClick={() => handleClick('/')}
                className={`font-medium uppercase ${Style.navLink} ${activeLink === '/' && Style.active
                  }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick('/about-us')}
                className={`font-medium uppercase ${Style.navLink} ${activeLink === '/about-us' && Style.active
                  } `}
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick('/media')}
                className={`font-medium uppercase ${Style.navLink} ${activeLink === '/media' && Style.active
                  }`}
                to="/media"
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick('/recent-work')}
                className={`font-medium uppercase ${Style.navLink} ${activeLink === '/recent-work' && Style.active
                  }`}
                to="/recent-work"
              >
                Recent Work
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick('/contact-us')}
                className={`font-medium uppercase ${Style.navLink} ${activeLink === '/contact-us' && Style.active
                  }`}
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>

            <button
              className={`flex gap-2 text-white px-4 py-2 items-center w-52 justify-center ${Style.btn}`}
            >
              <span className="text-white text-sm font-semibold">
                Get A Quote
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M18.025 11C18.0251 10.89 18.0035 10.781 17.9614 10.6794L17.8228 10.7368L17.9614 10.6794C17.9193 10.5777 17.8575 10.4854 17.7795 10.4077L10.9047 3.53286C10.5776 3.20553 10.0476 3.20585 9.72045 3.53279C9.39317 3.85987 9.39321 4.38988 9.72041 4.71708L16.0033 11L9.72045 17.2828C9.72044 17.2828 9.72043 17.2828 9.72041 17.2828C9.39312 17.6099 9.39345 18.1399 9.72038 18.4671C10.0475 18.7943 10.5775 18.7943 10.9047 18.4671L17.7795 11.5922C17.8575 11.5145 17.9193 11.4222 17.9614 11.3205L17.8228 11.2631L17.9614 11.3205C18.0035 11.2189 18.0251 11.11 18.025 11ZM18.025 11C18.025 11 18.025 11.0001 18.025 11.0001L17.875 11L18.025 10.9998C18.025 10.9999 18.025 10.9999 18.025 11ZM12.2797 10.4078L5.40467 3.53283C5.07747 3.20563 4.54745 3.20558 4.22038 3.53286C3.89344 3.86001 3.89312 4.39 4.22045 4.71712L10.5033 11L4.22041 17.2828C3.89321 17.61 3.89317 18.14 4.22045 18.4671C4.54759 18.794 5.07755 18.7944 5.40467 18.4671C5.40468 18.4671 5.40469 18.4671 5.40471 18.4671L12.2797 11.5921C12.4431 11.4286 12.525 11.214 12.525 11C12.525 10.7859 12.4431 10.5713 12.2797 10.4078Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.3"
                />
              </svg>
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
