import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Profile from '../Profile/Profile';

const PaymentRequest = () => {
    return (
        <section className='flex-1 wrapper-width'>
            <Profile></Profile>

            <div className="pl-30px pr-5 pt-30px pb-30px">
                <div className="heading flex justify-between items-center pb-30px">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">Payment Request</div>
                </div>
                <div className='relative'>
                    <div className="overflow-x-auto scrollbar scrollbar-track-gray scrollbar-thumb-[#B0B0B0] scrollbar-h-[5px] scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
                        <table className='w-[100%] whitespace-nowrap mb-5'>
                            <thead>
                                <tr className='border-b border-border-color'>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px'>No</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>User Name</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Email</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Request Date</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Request Date</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-10'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>hussainahmed@gmail.com</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>01-05-2023</Link></td>
                                    <td className='py-15px flex justify-between min-w-[151px] gap-1 pl-10 items-center'>
                                        <span className='font-medium text-22px leading-8'>$500</span>
                                        <button className='text-base leading-22px py-2 px-15px bg-gray rounded-[5px] hover:bg-primary hover:text-white'>Pay</button>
                                    </td>
                                    <td className='paid py-25px font-medium text-sm pl-10 text-green'><Link>paid</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>hussainahmed@gmail.com</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>01-05-2023</Link></td>
                                    <td className='py-15px flex justify-between min-w-[151px] gap-1 pl-10 items-center'>
                                        <span className='font-medium text-22px leading-8'>$500</span>
                                        <button className='text-base leading-22px py-2 px-15px bg-gray rounded-[5px] hover:bg-primary hover:text-white'>Pay</button>
                                    </td>
                                    <td className='pending py-25px font-medium text-sm pl-10 text-orange'><Link>Pending</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>Hussain Ahmed</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>hussainahmed@gmail.com</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>01-05-2023</Link></td>
                                    <td className='py-15px flex justify-between min-w-[151px] gap-1 pl-10 items-center'>
                                        <span className='font-medium text-22px leading-8'>$2,500</span>
                                        <button className='text-base leading-22px py-2 px-15px bg-gray rounded-[5px] hover:bg-primary hover:text-white'>Pay</button>
                                    </td>
                                    <td className='pending py-25px font-medium text-sm pl-10 text-orange'><Link>Pending</Link></td>
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

export default PaymentRequest;