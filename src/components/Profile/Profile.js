import React, { useState } from 'react';
import userImage from '../../assets/image/userImage.svg';
import down from '../../assets/image/down.svg';
import bellIcon from '../../assets/image/bell-icon-UIHUT.svg';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [profileDropdown, setProfileDropdown] = useState(false)
    return (
        <div className='flex justify-between py-[15px] px-5 border-b border-border-color'>
            <form>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="#929292" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9428 15.9428C16.3333 15.5523 16.9665 15.5523 17.357 15.9428L21.707 20.2928C22.0975 20.6833 22.0975 21.3165 21.707 21.707C21.3165 22.0975 20.6833 22.0975 20.2928 21.707L15.9428 17.357C15.5523 16.9665 15.5523 16.3333 15.9428 15.9428Z" fill="#929292" />
                        </svg>
                    </div>
                    <input type="search" className="block w-[299px] p-[10px] pl-[42px] border-0 text-sm text-text-color rounded-[7px] bg-gray outline-none" placeholder="Search here..." required />
                </div>
            </form>

            <div className="flex items-center gap-[30px]">
                <div className="relative">
                    <div className="absolute inline-block top-1 right-[3px] w-2 h-2 bg-primary rounded-full z-10"></div>
                    <div className="px-[14px] py-[14px] bg-gray rounded-full cursor-pointer">
                        <img src={bellIcon} alt="bell icon" />
                    </div>
                </div>
                <div className=" relative">
                    <div onClick={() => setProfileDropdown(!profileDropdown)} className='flex items-center cursor-pointer'>
                        <img className="w-10 mr-[10px] h-10 rounded-full" src={userImage} alt="userImage" />
                        <div className="font-medium mr-[15px] text-sm leading-5 text-title-color ">
                            <h5>Hussain Ahmed</h5>
                        </div>
                        <img src={down} alt="shape" />
                    </div>

                    <ul className={`absolute top-full right-0 pt-[15px] pb-[10px] px-[13px] bg-white min-w-[220px] rounded-[10px] shadow-[0_40px_50px_1px_rgba(120,114,114,0.15)] mt-5 z-10 ${!profileDropdown && 'hidden'}`}>
                        <li>
                            <Link className='w-full block text-sm text-text-color rounded-[10px] px-[15px] py-[14px] hover:text-white hover:bg-primary text-medium'>My Account</Link>
                        </li>
                        <li>
                            <Link className='w-full block text-sm text-text-color rounded-[10px] px-[15px] py-[14px] hover:text-white hover:bg-primary text-medium'>Profile Setting</Link>
                        </li>
                        <li>
                            <Link className='w-full block text-sm text-text-color rounded-[10px] px-[15px] py-[14px] hover:text-white hover:bg-primary text-medium'>Team Member</Link>
                        </li>
                        <li>
                            <Link className='w-full block text-sm text-text-color rounded-[10px] px-[15px] py-[14px] hover:text-white hover:bg-primary text-medium'>My Account</Link>
                        </li>
                        <li>
                            <Link className='w-full block text-sm text-text-color rounded-[10px] px-[15px] py-[14px] hover:text-white hover:bg-primary text-medium'>My Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;