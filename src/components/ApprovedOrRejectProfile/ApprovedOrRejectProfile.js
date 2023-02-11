import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Profile from '../Profile/Profile';

const ApprovedOrRejectProfile = () => {
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate('/profileinformation')
    }
    
    return (
        <section className='flex-1 wrapper-width'>
            <Profile></Profile>

            <div className="pl-30px pr-5 pt-5 pb-30px">
                <div className="heading flex justify-between items-center pb-9">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">Approved Or Reject Profile</div>
                </div>
                <div className='relative'>
                    <div className="overflow-x-auto scrollbar scrollbar-track-gray scrollbar-thumb-[#B0B0B0] scrollbar-h-[5px] scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
                        <table className='w-[100%] whitespace-nowrap mr-[223px] mb-5'>
                            <thead>
                                <tr className='border-b border-border-color'>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px'>No</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>User Name</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Email</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Promote Source</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Source Link 1*</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Source Link 2*</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Payment Method</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={navigateTo} className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>ahmedhussain@gmail.com</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Youtube</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>https://www.youtube...</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>https://www.youtube...</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Wise</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Describe about you...</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>ahmedhussain@gmail.com</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Youtube</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>https://www.youtube...</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>https://www.youtube...</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Wise</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Describe about you...</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>ahmedhussain@gmail.com</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Youtube</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>https://www.youtube...</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>https://www.youtube...</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Wise</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Describe about you...</Link></td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='absolute top-0 right-0 bg-white'>
                            <tr className='border-b border-border-color'>
                                <th className=' text-left leading-22px text-title-color font-medium pb-25px w-[224px]'>Action</th>
                            </tr>
                            <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                <td className='py-13px font-medium text-sm flex gap-[14px]'>
                                    <Link className='bg-gray hover:bg-primary text-sm font-semibold rounded-[8px] px-15px py-13px hover:text-white text-text-color'>Approved</Link>
                                    <Link className='bg-gray hover:bg-red text-sm font-semibold rounded-[8px] px-[27px] py-13px hover:text-white text-text-color'>Reject</Link>
                                </td>
                            </tr>
                            <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                <td className='py-13px font-medium text-sm flex gap-[14px]'>
                                    <Link className='bg-gray hover:bg-primary text-sm font-semibold rounded-[8px] px-15px py-13px hover:text-white text-text-color'>Approved</Link>
                                    <Link className='bg-gray hover:bg-red text-sm font-semibold rounded-[8px] px-[27px] py-13px hover:text-white text-text-color'>Reject</Link>
                                </td>
                            </tr>
                            <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                <td className='py-13px font-medium text-sm flex gap-[14px]'>
                                    <Link className='bg-gray hover:bg-primary text-sm font-semibold rounded-[8px] px-15px py-13px hover:text-white text-text-color'>Approved</Link>
                                    <Link className='bg-gray hover:bg-red text-sm font-semibold rounded-[8px] px-[27px] py-13px hover:text-white text-text-color'>Reject</Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <Pagination></Pagination>
            </div>
        </section>
    );
};

export default ApprovedOrRejectProfile;