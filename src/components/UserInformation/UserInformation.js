import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Profile from '../Profile/Profile';

const UserInformation = () => {
    const navigate = useNavigate()
    

    const navigateTo = () => {
        navigate('/useraffiliatedashboard')
    }
    
    return (
        <section className='flex-1 wrapper-width'>
            <Profile></Profile>

            <div className="pl-30px pr-5 pt-30px pb-30px">
                <div className="heading flex justify-between items-center pb-30px">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">User Information</div>
                </div>
                <div className='relative'>
                    <div className="overflow-x-auto scrollbar scrollbar-track-gray scrollbar-thumb-[#B0B0B0] scrollbar-h-[5px] scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
                        <table className='w-[100%] whitespace-nowrap mb-5'>
                            <thead>
                                <tr className='border-b border-border-color'>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px'>No</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>User Name</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>User List</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Total Earn</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>This Month Earn</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Top Source</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Total Visitor</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Total Sale</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={navigateTo} className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Designer</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>$60,530</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>$10000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>E-mail Marketing</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>150,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>500</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Designer</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>$60,530</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>$10000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>E-mail Marketing</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>150,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>500</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Designer</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>$60,530</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>$10000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>E-mail Marketing</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>150,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>500</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <Pagination></Pagination>
            </div>
        </section>
    );
};

export default UserInformation;