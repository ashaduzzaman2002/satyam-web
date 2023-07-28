import React from 'react';
import Image from 'next/image';
import Style from './footer.module.css';
import Logo from '../../../public/assets/logo.svg';
import MobileIcon from '../../../public/assets/mobile-icon.svg';
import MailIcon from '../../../public/assets/mail-icon.svg';
import LocationIcon from '../../../public/assets/location-icon.svg';
import TimeIcon from '../../../public/assets/time-icon.svg';

const Footer = () => {
  return (
    <footer
      className={`${(Style.footer, Style.footer_container)} px-4 md:px-10 xl:px-20 pt-6 lg:pt-16`}
    >
      <div className="footer_up mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between md:py-10, gap-10 ">
        <div className="col-span-1 md:col-span-2 lg:col-span-1  w-full footer_up_1 flex flex-col gap-4 items-center ">
          <Image src={Logo} className="object-contain w-60 lg:mr-auto" alt="logo" />
          <div className="flex justify-between gap-2 mt-2 xl:hidden w-3/4 md:w-1/3 lg:w-3/4 max-w-sm">
            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7188 9.25C17.7188 13.6094 14.5195 17.2305 10.3359 17.8633V11.7812H12.375L12.7617 9.25H10.3359V7.63281C10.3359 6.92969 10.6875 6.26172 11.7773 6.26172H12.8672V4.11719C12.8672 4.11719 11.8828 3.94141 10.8984 3.94141C8.92969 3.94141 7.62891 5.17188 7.62891 7.35156V9.25H5.41406V11.7812H7.62891V17.8633C3.44531 17.2305 0.28125 13.6094 0.28125 9.25C0.28125 4.43359 4.18359 0.53125 9 0.53125C13.8164 0.53125 17.7188 4.43359 17.7188 9.25Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-10">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1367 4.59375C16.1367 4.76953 16.1367 4.91016 16.1367 5.08594C16.1367 9.97266 12.4453 15.5625 5.66016 15.5625C3.55078 15.5625 1.61719 14.9648 0 13.9102C0.28125 13.9453 0.5625 13.9805 0.878906 13.9805C2.60156 13.9805 4.18359 13.3828 5.44922 12.3984C3.83203 12.3633 2.46094 11.3086 2.00391 9.83203C2.25 9.86719 2.46094 9.90234 2.70703 9.90234C3.02344 9.90234 3.375 9.83203 3.65625 9.76172C1.96875 9.41016 0.703125 7.93359 0.703125 6.14062V6.10547C1.19531 6.38672 1.79297 6.52734 2.39062 6.5625C1.37109 5.89453 0.738281 4.76953 0.738281 3.50391C0.738281 2.80078 0.914062 2.16797 1.23047 1.64062C3.05859 3.85547 5.80078 5.33203 8.85938 5.50781C8.78906 5.22656 8.75391 4.94531 8.75391 4.66406C8.75391 2.625 10.4062 0.972656 12.4453 0.972656C13.5 0.972656 14.4492 1.39453 15.1523 2.13281C15.9609 1.95703 16.7695 1.64062 17.4727 1.21875C17.1914 2.09766 16.6289 2.80078 15.8555 3.25781C16.5938 3.1875 17.332 2.97656 17.9648 2.69531C17.4727 3.43359 16.8398 4.06641 16.1367 4.59375Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64062 16H0.371094V5.48828H3.64062V16ZM1.98828 4.08203C0.96875 4.08203 0.125 3.20312 0.125 2.14844C0.125 1.12891 0.96875 0.285156 1.98828 0.285156C3.04297 0.285156 3.88672 1.12891 3.88672 2.14844C3.88672 3.20312 3.04297 4.08203 1.98828 4.08203ZM15.8398 16H12.6055V10.9023C12.6055 9.67188 12.5703 8.125 10.8828 8.125C9.19531 8.125 8.94922 9.42578 8.94922 10.7969V16H5.67969V5.48828H8.80859V6.92969H8.84375C9.30078 6.12109 10.3555 5.24219 11.9375 5.24219C15.2422 5.24219 15.875 7.42188 15.875 10.2344V16H15.8398Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-10">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4.20703C10.2148 4.20703 12.043 6.03516 12.043 8.25C12.043 10.5 10.2148 12.293 8 12.293C5.75 12.293 3.95703 10.5 3.95703 8.25C3.95703 6.03516 5.75 4.20703 8 4.20703ZM8 10.8867C9.44141 10.8867 10.6016 9.72656 10.6016 8.25C10.6016 6.80859 9.44141 5.64844 8 5.64844C6.52344 5.64844 5.36328 6.80859 5.36328 8.25C5.36328 9.72656 6.55859 10.8867 8 10.8867ZM13.1328 4.06641C13.1328 4.59375 12.7109 5.01562 12.1836 5.01562C11.6562 5.01562 11.2344 4.59375 11.2344 4.06641C11.2344 3.53906 11.6562 3.11719 12.1836 3.11719C12.7109 3.11719 13.1328 3.53906 13.1328 4.06641ZM15.8047 5.01562C15.875 6.31641 15.875 10.2188 15.8047 11.5195C15.7344 12.7852 15.4531 13.875 14.5391 14.8242C13.625 15.7383 12.5 16.0195 11.2344 16.0898C9.93359 16.1602 6.03125 16.1602 4.73047 16.0898C3.46484 16.0195 2.375 15.7383 1.42578 14.8242C0.511719 13.875 0.230469 12.7852 0.160156 11.5195C0.0898438 10.2188 0.0898438 6.31641 0.160156 5.01562C0.230469 3.75 0.511719 2.625 1.42578 1.71094C2.375 0.796875 3.46484 0.515625 4.73047 0.445312C6.03125 0.375 9.93359 0.375 11.2344 0.445312C12.5 0.515625 13.625 0.796875 14.5391 1.71094C15.4531 2.625 15.7344 3.75 15.8047 5.01562ZM14.1172 12.8906C14.5391 11.8711 14.4336 9.41016 14.4336 8.25C14.4336 7.125 14.5391 4.66406 14.1172 3.60938C13.8359 2.94141 13.3086 2.37891 12.6406 2.13281C11.5859 1.71094 9.125 1.81641 8 1.81641C6.83984 1.81641 4.37891 1.71094 3.35938 2.13281C2.65625 2.41406 2.12891 2.94141 1.84766 3.60938C1.42578 4.66406 1.53125 7.125 1.53125 8.25C1.53125 9.41016 1.42578 11.8711 1.84766 12.8906C2.12891 13.5938 2.65625 14.1211 3.35938 14.4023C4.37891 14.8242 6.83984 14.7188 8 14.7188C9.125 14.7188 11.5859 14.8242 12.6406 14.4023C13.3086 14.1211 13.8711 13.5938 14.1172 12.8906Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="col-span-1 w-fullfooter_up_2 flex flex-col gap-3 md:gap-6">
          <h2 className="text-3xl">Office</h2>
          <div className="flex gap-3">
            <Image src={MobileIcon} alt='mobile icon' />
            <p className={`${Style.text_color}`}>+91 79 4000 8386</p>
          </div>
          <div className="flex gap-3">
            <Image src={MailIcon} alt='mail icon' />
            <p className={`${Style.text_color}`}>Info@satyamdevelopers.com</p>
          </div>
          <div className="flex gap-3">
            <Image src={LocationIcon} alt='location icon' />
            <p className={`${Style.text_color}`}>
              2231 Redbud Drive <br />
              Whitestone, NY 11357
            </p>
          </div>
          <div className="flex gap-3">
            <Image src={TimeIcon} alt='time icon' />
            <p className={`${Style.text_color}`}>
              Mon – Fri: 9 AM – 7 PM <br />
              Sat – Sun: Closed
            </p>
          </div>
        </div>

        <div className="col-span-1 w-full footer_up_3 flex flex-col gap-3">
          <h2 className={`text-3xl pb-2`}>Quick Links</h2>
          {/* <ul> */}
          <div className={`${Style.text_color}`}>
            <a href="#">Home</a>
          </div>
          <div className={`${Style.text_color}`}>
            <a href="#">About</a>
          </div>
          <div className={`${Style.text_color}`}>
            <a href="#">Media</a>
          </div>
          <div className={`${Style.text_color}`}>
            <a href="#">Recent Work</a>
          </div>
          <div className={`${Style.text_color}`}>
            <a href="#">Carrier</a>
          </div>
          <div className={`${Style.text_color}`}>
            <a href="#">Contact Us</a>
          </div>
          {/* </ul> */}
        </div>

        <div className="col-span-1 w-full footer_up_4 xl:flex flex-col md:gap-6 hidden">
          <h2 className="text-3xl">Social Links</h2>
          <div className="flex justify-between gap-3 mx-auto" style={{maxWidth: '230px'}}>
            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7188 9.25C17.7188 13.6094 14.5195 17.2305 10.3359 17.8633V11.7812H12.375L12.7617 9.25H10.3359V7.63281C10.3359 6.92969 10.6875 6.26172 11.7773 6.26172H12.8672V4.11719C12.8672 4.11719 11.8828 3.94141 10.8984 3.94141C8.92969 3.94141 7.62891 5.17188 7.62891 7.35156V9.25H5.41406V11.7812H7.62891V17.8633C3.44531 17.2305 0.28125 13.6094 0.28125 9.25C0.28125 4.43359 4.18359 0.53125 9 0.53125C13.8164 0.53125 17.7188 4.43359 17.7188 9.25Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-10">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1367 4.59375C16.1367 4.76953 16.1367 4.91016 16.1367 5.08594C16.1367 9.97266 12.4453 15.5625 5.66016 15.5625C3.55078 15.5625 1.61719 14.9648 0 13.9102C0.28125 13.9453 0.5625 13.9805 0.878906 13.9805C2.60156 13.9805 4.18359 13.3828 5.44922 12.3984C3.83203 12.3633 2.46094 11.3086 2.00391 9.83203C2.25 9.86719 2.46094 9.90234 2.70703 9.90234C3.02344 9.90234 3.375 9.83203 3.65625 9.76172C1.96875 9.41016 0.703125 7.93359 0.703125 6.14062V6.10547C1.19531 6.38672 1.79297 6.52734 2.39062 6.5625C1.37109 5.89453 0.738281 4.76953 0.738281 3.50391C0.738281 2.80078 0.914062 2.16797 1.23047 1.64062C3.05859 3.85547 5.80078 5.33203 8.85938 5.50781C8.78906 5.22656 8.75391 4.94531 8.75391 4.66406C8.75391 2.625 10.4062 0.972656 12.4453 0.972656C13.5 0.972656 14.4492 1.39453 15.1523 2.13281C15.9609 1.95703 16.7695 1.64062 17.4727 1.21875C17.1914 2.09766 16.6289 2.80078 15.8555 3.25781C16.5938 3.1875 17.332 2.97656 17.9648 2.69531C17.4727 3.43359 16.8398 4.06641 16.1367 4.59375Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64062 16H0.371094V5.48828H3.64062V16ZM1.98828 4.08203C0.96875 4.08203 0.125 3.20312 0.125 2.14844C0.125 1.12891 0.96875 0.285156 1.98828 0.285156C3.04297 0.285156 3.88672 1.12891 3.88672 2.14844C3.88672 3.20312 3.04297 4.08203 1.98828 4.08203ZM15.8398 16H12.6055V10.9023C12.6055 9.67188 12.5703 8.125 10.8828 8.125C9.19531 8.125 8.94922 9.42578 8.94922 10.7969V16H5.67969V5.48828H8.80859V6.92969H8.84375C9.30078 6.12109 10.3555 5.24219 11.9375 5.24219C15.2422 5.24219 15.875 7.42188 15.875 10.2344V16H15.8398Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-10">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4.20703C10.2148 4.20703 12.043 6.03516 12.043 8.25C12.043 10.5 10.2148 12.293 8 12.293C5.75 12.293 3.95703 10.5 3.95703 8.25C3.95703 6.03516 5.75 4.20703 8 4.20703ZM8 10.8867C9.44141 10.8867 10.6016 9.72656 10.6016 8.25C10.6016 6.80859 9.44141 5.64844 8 5.64844C6.52344 5.64844 5.36328 6.80859 5.36328 8.25C5.36328 9.72656 6.55859 10.8867 8 10.8867ZM13.1328 4.06641C13.1328 4.59375 12.7109 5.01562 12.1836 5.01562C11.6562 5.01562 11.2344 4.59375 11.2344 4.06641C11.2344 3.53906 11.6562 3.11719 12.1836 3.11719C12.7109 3.11719 13.1328 3.53906 13.1328 4.06641ZM15.8047 5.01562C15.875 6.31641 15.875 10.2188 15.8047 11.5195C15.7344 12.7852 15.4531 13.875 14.5391 14.8242C13.625 15.7383 12.5 16.0195 11.2344 16.0898C9.93359 16.1602 6.03125 16.1602 4.73047 16.0898C3.46484 16.0195 2.375 15.7383 1.42578 14.8242C0.511719 13.875 0.230469 12.7852 0.160156 11.5195C0.0898438 10.2188 0.0898438 6.31641 0.160156 5.01562C0.230469 3.75 0.511719 2.625 1.42578 1.71094C2.375 0.796875 3.46484 0.515625 4.73047 0.445312C6.03125 0.375 9.93359 0.375 11.2344 0.445312C12.5 0.515625 13.625 0.796875 14.5391 1.71094C15.4531 2.625 15.7344 3.75 15.8047 5.01562ZM14.1172 12.8906C14.5391 11.8711 14.4336 9.41016 14.4336 8.25C14.4336 7.125 14.5391 4.66406 14.1172 3.60938C13.8359 2.94141 13.3086 2.37891 12.6406 2.13281C11.5859 1.71094 9.125 1.81641 8 1.81641C6.83984 1.81641 4.37891 1.71094 3.35938 2.13281C2.65625 2.41406 2.12891 2.94141 1.84766 3.60938C1.42578 4.66406 1.53125 7.125 1.53125 8.25C1.53125 9.41016 1.42578 11.8711 1.84766 12.8906C2.12891 13.5938 2.65625 14.1211 3.35938 14.4023C4.37891 14.8242 6.83984 14.7188 8 14.7188C9.125 14.7188 11.5859 14.8242 12.6406 14.4023C13.3086 14.1211 13.8711 13.5938 14.1172 12.8906Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="footer_down py-4 px-5 md:px-0">
        <p className={`${Style.text_color} text-sm`}>
          © Copyright by Satyam Developers – All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;