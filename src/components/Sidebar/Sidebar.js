import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/Besnik-Logo.svg';
import home from '../../assets/image/home.svg';
import discountCiecle from '../../assets/image/discount-circle.svg';
import squire from '../../assets/image/command-square.svg';
import shape from '../../assets/image/shape.svg';
import cube from '../../assets/image/convert-3d-cube.svg';
import affiliateIcon from '../../assets/image/affiliate-icon.svg';


const Sidebar = () => {
    const [dropDown, setDropDown] = useState(false)
    const [dropDownAutomation, setDropDownAutomation] = useState(false)
    const [dropDownAffiliate, setDropDownAffiliate] = useState(false)


    return (
        <aside className='sidebar w-[270px] bg-[#1E1E1E] min-h-screen px-15px py-[19px]'>
            <div className="logo mb-[49px]">
                <img src={logo} alt="logo" />
            </div>


            <div>
                <div className="overflow-y-auto rounded">
                    <ul className="space-y-2">
                        <li>
                            <Link className="flex group items-center font-medium px-15px py-12px text-[#B0B0B0] rounded-lg hover:bg-primary hover:text-white">
                                <img className='group-hover:brightness-0 group-hover:invert' src={home} alt="home" />
                                <span className="ml-13px  leading-22px">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/utmmanagement' className="flex group items-center text-[#B0B0B0] px-15px py-12px  font-medium rounded-lg hover:bg-primary hover:text-white">
                                <img className='group-hover:brightness-0 group-hover:invert' src={discountCiecle} alt="UTM Management" />
                                <span className="ml-13px leading-22px">UTM Management</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setDropDown(!dropDown)} type="button" className="flex group items-center w-full text-[#B0B0B0] hover:text-white px-15px py-12px  font-normal rounded-lg hover:bg-primary">
                                <img className='group-hover:brightness-0 group-hover:invert' src={squire} alt="squire" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap font-medium  leading-22px" >Lead Management</span>
                                <img className='group-hover:brightness-0 group-hover:invert' src={shape} alt="shape" />
                            </Link>
                            <ul className={`py-2 space-y-2  ${!dropDown && 'hidden'}`}>
                                <li>
                                    <Link to='/lists' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Lists</Link>
                                </li>
                                <li>
                                    <Link to='/contacts' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Contacts</Link>
                                </li>
                                <li>
                                    <Link to='/uploadqueue' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Upload Queue</Link>
                                </li>
                                <li>
                                    <Link to='/sequence' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Sequence</Link>
                                </li>
                                <li>
                                    <Link to='/emailvalidation' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Email Validation</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link onClick={() => setDropDownAutomation(!dropDownAutomation)} type="button" className="flex group items-center w-full text-[#B0B0B0] hover:text-white px-15px py-12px  font-normal rounded-lg hover:bg-primary">
                                <img className='group-hover:brightness-0 group-hover:invert' src={cube} alt="UTM Management" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap font-medium  leading-22px" >Automation</span>
                                <img className='group-hover:brightness-0 group-hover:invert' src={shape} alt="shape" />
                            </Link>
                            <ul className={`py-2 space-y-2  ${!dropDownAutomation && 'hidden'}`}>
                                <li>
                                    <Link to='/addsocialmedia' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Add Social Media</Link>
                                </li>
                                <li>
                                    <Link to='/publishposts' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Public Posts</Link>
                                </li>
                                <li>
                                    <Link to='/scheduleposts' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Schedule Post</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link onClick={() => setDropDownAffiliate(!dropDownAffiliate)} type="button" className="flex group items-center w-full text-[#B0B0B0] hover:text-white px-15px py-12px  font-normal rounded-lg hover:bg-primary">
                                <img className='group-hover:brightness-0 group-hover:invert' src={affiliateIcon} alt="UTM Management" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap font-medium  leading-22px" >Affiliate</span>
                                <img className='group-hover:brightness-0 group-hover:invert' src={shape} alt="shape" />
                            </Link>
                            <ul className={`py-2 space-y-2  ${!dropDownAffiliate && 'hidden'}`}>
                                <li>
                                    <Link to='/userinformation' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">User Information</Link>
                                </li>
                                <li>
                                    <Link to='/approvedorrejectprofile' className="flex items-center pl-[49px] pr-5 py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Approve or Reject Profile</Link>
                                </li>
                                <li>
                                    <Link to='/paymentrequest' className="flex items-center pl-[49px] py-12px font-medium rounded-lg hover:bg-primary hover:text-white text-[#B0B0B0] leading-22px">Payment Request</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;