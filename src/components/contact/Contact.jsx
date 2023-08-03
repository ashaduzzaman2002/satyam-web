import React from 'react';
import Style from './contact.module.css';

const Contact = () => {
  
  return (
    <div className="contact_container bg-[#f5f3f4] md:p-8 pb-10 md:pb-16">
      <div className="heading flex flex-col justify-start items-center py-6">
        <h1 className='text-4xl font-semibold'>Contact Us</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="2" viewBox="0 0 106 2" fill="none">
        <line y1="1" x2="63" y2="1" stroke="#FF7100" stroke-width="2"/>
        <line x1="78" y1="1" x2="106" y2="1" stroke="#FF7100" stroke-width="2"/>
      </svg>
      </div>
      <div
        className={`${Style.contact_container_box} bg-[#ffffff] p-4 max-w-7xl mx-auto  w-full text-white grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 md:gap-0`}
      >

        <div className="left relative lg:py-8 bg-[#FF7100] p-5 w-full flex flex-col gap-2 md:gap-4 ">
          
          {/* small left box bg svg start */}
          <div className="absolute right-8 bottom-44 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">
              <ellipse cx="29" cy="29.5" rx="29" ry="29.5" fill="#FFF9F9" fill-opacity="0.13"/>
            </svg>
          </div>

          <div className="absolute right-0 bottom-28 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="114" viewBox="0 0 65 114" fill="none">
              <ellipse cx="56.5" cy="57" rx="56.5" ry="57" fill="white" fill-opacity="0.12"/>
            </svg>
          </div>
          {/* small left box bg svg end */}

          {/* md left box bg svg end */}
          <div className="absolute right-[35%] bottom-[20%] hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="138" height="138" viewBox="0 0 138 138" fill="none">
              <circle cx="69" cy="69" r="69" fill="#FFF9F9" fill-opacity="0.13"/>
            </svg>
          </div>

          <div className="absolute hidden md:block right-0 bottom-0">
            <svg width="243" height="218" viewBox="0 0 243 218" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="134.5" cy="134.5" r="134.5" fill="white" fill-opacity="0.12"/>
            </svg>
          </div>
          {/* md left box bg svg end */}

          <h3 className='text-2xl font-semibold'>Contact Information</h3>
          <p>Say something to start a live chat!</p>
          <div className="phone flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6666 9.16616H18.3333C18.3333 4.89116 15.1058 1.66699 10.825 1.66699V3.33366C14.21 3.33366 16.6666 5.78616 16.6666 9.16616Z" fill="white"/>
              <path d="M10.8333 6.66654C12.5858 6.66654 13.3333 7.41404 13.3333 9.16654H15C15 6.47904 13.5208 4.99987 10.8333 4.99987V6.66654ZM13.685 11.2024C13.5249 11.0568 13.3144 10.9792 13.0982 10.9859C12.8819 10.9926 12.6767 11.0831 12.5258 11.2382L10.5317 13.289C10.0517 13.1974 9.08666 12.8965 8.09332 11.9057C7.09999 10.9115 6.79916 9.94404 6.70999 9.46737L8.75916 7.47237C8.9145 7.32165 9.0051 7.11639 9.01179 6.90005C9.01848 6.6837 8.94073 6.47324 8.79499 6.31321L5.71582 2.92737C5.57003 2.76684 5.36739 2.66946 5.15095 2.65592C4.93451 2.64239 4.72132 2.71376 4.55666 2.85487L2.74832 4.40571C2.60425 4.5503 2.51826 4.74275 2.50666 4.94654C2.49416 5.15487 2.25582 10.0899 6.08249 13.9182C9.42082 17.2557 13.6025 17.4999 14.7542 17.4999C14.9225 17.4999 15.0258 17.4949 15.0533 17.4932C15.2571 17.4818 15.4494 17.3954 15.5933 17.2507L17.1433 15.4415C17.2845 15.277 17.3561 15.0639 17.3427 14.8474C17.3293 14.631 17.2321 14.4283 17.0717 14.2824L13.685 11.2024Z" fill="white"/>
            </svg>
            <span>+91 99099 83100</span>
          </div>
          <div className="email flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.3334 4.33301C18.3334 3.78072 17.8857 3.33301 17.3334 3.33301H2.66675C2.11446 3.33301 1.66675 3.78072 1.66675 4.33301V15.6663C1.66675 16.2186 2.11446 16.6663 2.66675 16.6663H17.3334C17.8857 16.6663 18.3334 16.2186 18.3334 15.6663V4.33301ZM16.6667 6.27467C16.6667 6.51832 16.5412 6.74479 16.3346 6.87392L10.5301 10.5018C10.2058 10.7044 9.79435 10.7044 9.47008 10.5018L3.66555 6.87392C3.45893 6.74479 3.33341 6.51832 3.33341 6.27467C3.33341 5.71963 3.94394 5.38125 4.41461 5.67542L9.47008 8.83509C9.79435 9.03776 10.2058 9.03776 10.5301 8.83509L15.5856 5.67542C16.0562 5.38125 16.6667 5.71963 16.6667 6.27467Z" fill="white"/>
            </svg>
            <span>info@satyamdevelopers.com</span>
          </div>
          <div className="location flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C6.48574 0 3.55469 2.83086 3.55469 6.44531C3.55469 7.82039 3.96789 9.04656 4.7609 10.1955L9.50676 17.601C9.73699 17.961 10.2635 17.9603 10.4932 17.601L15.2597 10.1704C16.0356 9.07344 16.4453 7.78543 16.4453 6.44531C16.4453 2.89137 13.5539 0 10 0ZM10 9.375C8.38465 9.375 7.07031 8.06066 7.07031 6.44531C7.07031 4.82996 8.38465 3.51562 10 3.51562C11.6154 3.51562 12.9297 4.82996 12.9297 6.44531C12.9297 8.06066 11.6154 9.375 10 9.375Z" fill="white"/>
              <path d="M14.5806 13.4648L11.6302 18.0776C10.8665 19.2683 9.12926 19.2644 8.36922 18.0787L5.41398 13.4661C2.81383 14.0672 1.21094 15.1685 1.21094 16.4846C1.21094 18.7682 5.73938 20.0002 10 20.0002C14.2606 20.0002 18.7891 18.7682 18.7891 16.4846C18.7891 15.1676 17.1839 14.0657 14.5806 13.4648Z" fill="white"/>
            </svg>
            <span>2231 Redbud Drive <br /> Whitestone, NY 11357</span>
          </div>
          <div className="time flex gap-2">          
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0.8125C15.3516 0.8125 19.6875 5.14844 19.6875 10.5C19.6875 15.8516 15.3516 20.1875 10 20.1875C4.64844 20.1875 0.3125 15.8516 0.3125 10.5C0.3125 5.14844 4.64844 0.8125 10 0.8125ZM10 18.3125C14.2969 18.3125 17.8125 14.8359 17.8125 10.5C17.8125 6.20312 14.2969 2.6875 10 2.6875C5.66406 2.6875 2.1875 6.20312 2.1875 10.5C2.1875 14.8359 5.66406 18.3125 10 18.3125ZM12.3828 14.25L9.0625 11.8281C8.94531 11.75 8.90625 11.5938 8.90625 11.4766V5.03125C8.90625 4.79688 9.10156 4.5625 9.375 4.5625H10.625C10.8594 4.5625 11.0938 4.79688 11.0938 5.03125V10.5781L13.6719 12.4922C13.9062 12.6484 13.9453 12.9219 13.7891 13.1562L13.0469 14.1328C12.8906 14.3672 12.6172 14.4062 12.3828 14.25Z" fill="white"/>
            </svg>
            <span>Mon – Fri: 9 AM – 7 PM <br /> Sat – Sun: Closed</span>
          </div>
          <h3 className='text-2xl font-semibold'>Social Links</h3>
          <div className="social_link_logo flex gap-4">
            <div className="fb w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-96">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9494 6.95898C13.9494 10.3496 11.4611 13.166 8.20724 13.6582V8.92773H9.79317L10.094 6.95898H8.20724V5.70117C8.20724 5.1543 8.48067 4.63477 9.32833 4.63477H10.176V2.9668C10.176 2.9668 9.41036 2.83008 8.64474 2.83008C7.11349 2.83008 6.10177 3.78711 6.10177 5.48242V6.95898H4.37911V8.92773H6.10177V13.6582C2.84786 13.166 0.386924 10.3496 0.386924 6.95898C0.386924 3.21289 3.42208 0.177734 7.16817 0.177734C10.9143 0.177734 13.9494 3.21289 13.9494 6.95898Z" fill="#FF7100"/>
              </svg>
            </div>
            <div className="twt w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-96">                      
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8061 3.11523C12.8061 3.25195 12.8061 3.36133 12.8061 3.49805C12.8061 7.29883 9.93502 11.6465 4.65768 11.6465C3.01705 11.6465 1.51314 11.1816 0.255332 10.3613C0.474082 10.3887 0.692832 10.416 0.938926 10.416C2.27877 10.416 3.50924 9.95117 4.49361 9.18555C3.2358 9.1582 2.16939 8.33789 1.81393 7.18945C2.00533 7.2168 2.16939 7.24414 2.3608 7.24414C2.60689 7.24414 2.88033 7.18945 3.09908 7.13477C1.78658 6.86133 0.802207 5.71289 0.802207 4.31836V4.29102C1.18502 4.50977 1.64986 4.61914 2.11471 4.64648C1.32174 4.12695 0.829551 3.25195 0.829551 2.26758C0.829551 1.7207 0.96627 1.22852 1.21236 0.818359C2.63424 2.54102 4.76705 3.68945 7.14596 3.82617C7.09127 3.60742 7.06393 3.38867 7.06393 3.16992C7.06393 1.58398 8.34908 0.298828 9.93502 0.298828C10.7553 0.298828 11.4936 0.626953 12.0405 1.20117C12.6694 1.06445 13.2983 0.818359 13.8452 0.490234C13.6264 1.17383 13.1889 1.7207 12.5874 2.07617C13.1616 2.02148 13.7358 1.85742 14.228 1.63867C13.8452 2.21289 13.353 2.70508 12.8061 3.11523Z" fill="#FF7100"/>
              </svg>
            </div>
            <div className="linkedIn w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-96">                       
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.51243 13.209H0.969464V5.0332H3.51243V13.209ZM2.22728 3.93945C1.43431 3.93945 0.778058 3.25586 0.778058 2.43555C0.778058 1.64258 1.43431 0.986328 2.22728 0.986328C3.04759 0.986328 3.70384 1.64258 3.70384 2.43555C3.70384 3.25586 3.04759 3.93945 2.22728 3.93945ZM13.0007 13.209H10.4851V9.24414C10.4851 8.28711 10.4577 7.08398 9.14525 7.08398C7.83275 7.08398 7.64134 8.0957 7.64134 9.16211V13.209H5.09837V5.0332H7.53196V6.1543H7.55931C7.91478 5.52539 8.73509 4.8418 9.96556 4.8418C12.5359 4.8418 13.0281 6.53711 13.0281 8.72461V13.209H13.0007Z" fill="#FF7100"/>
              </svg>
            </div>
            <div className="insta w-9 h-9 rounded-full flex justify-center items-center bg-white bg-opacity-96">                      
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.98802 3.81445C8.71067 3.81445 10.1325 5.23633 10.1325 6.95898C10.1325 8.70898 8.71067 10.1035 6.98802 10.1035C5.23802 10.1035 3.84349 8.70898 3.84349 6.95898C3.84349 5.23633 5.23802 3.81445 6.98802 3.81445ZM6.98802 9.00977C8.10911 9.00977 9.01146 8.10742 9.01146 6.95898C9.01146 5.83789 8.10911 4.93555 6.98802 4.93555C5.83958 4.93555 4.93724 5.83789 4.93724 6.95898C4.93724 8.10742 5.86692 9.00977 6.98802 9.00977ZM10.9802 3.70508C10.9802 4.11523 10.6521 4.44336 10.2419 4.44336C9.83177 4.44336 9.50364 4.11523 9.50364 3.70508C9.50364 3.29492 9.83177 2.9668 10.2419 2.9668C10.6521 2.9668 10.9802 3.29492 10.9802 3.70508ZM13.0583 4.44336C13.113 5.45508 13.113 8.49023 13.0583 9.50195C13.0036 10.4863 12.7849 11.334 12.074 12.0723C11.363 12.7832 10.488 13.002 9.50364 13.0566C8.49192 13.1113 5.45677 13.1113 4.44505 13.0566C3.46067 13.002 2.61302 12.7832 1.87474 12.0723C1.1638 11.334 0.94505 10.4863 0.890362 9.50195C0.835675 8.49023 0.835675 5.45508 0.890362 4.44336C0.94505 3.45898 1.1638 2.58398 1.87474 1.87305C2.61302 1.16211 3.46067 0.943359 4.44505 0.888672C5.45677 0.833984 8.49192 0.833984 9.50364 0.888672C10.488 0.943359 11.363 1.16211 12.074 1.87305C12.7849 2.58398 13.0036 3.45898 13.0583 4.44336ZM11.7458 10.5684C12.074 9.77539 11.9919 7.86133 11.9919 6.95898C11.9919 6.08398 12.074 4.16992 11.7458 3.34961C11.5271 2.83008 11.1169 2.39258 10.5974 2.20117C9.77708 1.87305 7.86302 1.95508 6.98802 1.95508C6.08567 1.95508 4.17161 1.87305 3.37864 2.20117C2.83177 2.41992 2.42161 2.83008 2.20286 3.34961C1.87474 4.16992 1.95677 6.08398 1.95677 6.95898C1.95677 7.86133 1.87474 9.77539 2.20286 10.5684C2.42161 11.1152 2.83177 11.5254 3.37864 11.7441C4.17161 12.0723 6.08567 11.9902 6.98802 11.9902C7.86302 11.9902 9.77708 12.0723 10.5974 11.7441C11.1169 11.5254 11.5544 11.1152 11.7458 10.5684Z" fill="#FF7100"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="right  md:self-end w-full ">
          <div className="form flex flex-col gap-4 md:gap-10 lg:gap-14 md:px-4">
            <div className="nme flex justify-between gap-8">
              <input
              className='a border-b-2 outline-none text-black w-full'
              type="text" name="firstName" id="firstName" placeholder='First name' />
              <input className='a border-b-2 outline-none text-black w-full' type="text" name="lastName" id="lastName" placeholder='Last Name' />
            </div>
            <div className='flex flex-col gap-4 md:gap-8 md:flex-row'>
              <input className='a border-b-2 outline-none text-black w-full' type="text" name="mobileNumber" id="mobileNumber" placeholder='Enter Mobile Number' />
              <input className='a border-b-2 outline-none text-black w-full' type="email" name="email" id="email" placeholder='Enter Mail Id' />
            </div>
              <input className='a border-b-2 outline-none text-black w-full md:w-[48%]' type="text" name="companyName" id="companyName" placeholder='Enter Your Company Name' />
              <input className='a border-b-2 outline-none text-black w-full' type="text" name="message" id="message" placeholder='Enter Your Message' />
          </div>
          <div className="btn my-4  py-2  flex justify-center items-center md:justify-end md:px-4 "><button
                className={`flex gap-2 text-white px-4 py-2 items-center w-36  justify-center mt-4 hero-btn`}
              >
                <span className="text-white text-[13px] md:text-sm font-semibold">
                Submit
                </span>
                
              </button></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
