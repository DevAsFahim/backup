import React from 'react';
import Pagination from '../Pagination/Pagination';
import Profile from '../Profile/Profile';
import { Link } from 'react-router-dom';
import edit from '../../assets/image/Icon-Edit-UIHUT.svg';
import deleteIcon from '../../assets/image/Icon-delete-UIHUT.svg';

const UploadQueue = () => {
    return (
        <section className='flex-1 wrapper-width'>
            <Profile></Profile>

            <div className="pr-5 pl-30px pt-5 pb-30px">
                <div className="heading flex justify-between items-center pb-9">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">Upload Queue</div>
                </div>
                <div className="table-container">

                    <p className='text-base leading-22px mb-[21px]'>Total: <span>62,500</span></p>

                    <div className='relative'>
                        <div className="overflow-x-auto scrollbar scrollbar-track-gray scrollbar-thumb-[#B0B0B0] scrollbar-h-[5px] scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
                            <table className='w-[100%] whitespace-nowrap mr-[127px] mb-5'>
                                <thead>
                                    <tr className='border-b border-border-color'>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px'>No</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>List</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Tags</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Created At</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Uploaded</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>New Added</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Already Exist</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Failed</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Error</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10 pr-3'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                        <td className='py-15px font-medium text-sm'>01</td>
                                        <td className='py-15px font-medium text-sm pl-10'>UIUX Design Agency</td>
                                        <td className='py-15px font-medium text-sm pl-10'>uiux design agency</td>
                                        <td className='py-15px font-medium text-sm pl-10'>
                                            <p>2023-01-.-</p>
                                            <p>09T10.07.22.000000Z</p>
                                        </td>
                                        <td className='py-15px font-medium text-sm pl-10'>5,0824</td>
                                        <td className='py-15px font-medium text-sm pl-10'>14839</td>
                                        <td className='py-15px font-medium text-sm pl-10'>56248</td>
                                        <td className='py-15px font-medium text-sm pl-10'>56248</td>
                                        <td className='py-15px pl-10'>
                                            <button className='font-medium text-sm py-10px px-15px rounded-[5px] text-text-color hover:text-white bg-gray hover:bg-primary'>Show</button>
                                        </td>
                                        <td className='py-15px font-medium text-sm pl-10 pr-3'>Completed</td>
                                    </tr>
                                    <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                        <td className='py-15px font-medium text-sm'>01</td>
                                        <td className='py-15px font-medium text-sm pl-10'>UIUX Design Agency</td>
                                        <td className='py-15px font-medium text-sm pl-10'>uiux design agency</td>
                                        <td className='py-15px font-medium text-sm pl-10'>
                                            <p>2023-01-.-</p>
                                            <p>09T10.07.22.000000Z</p>
                                        </td>
                                        <td className='py-15px font-medium text-sm pl-10'>5,0824</td>
                                        <td className='py-15px font-medium text-sm pl-10'>14839</td>
                                        <td className='py-15px font-medium text-sm pl-10'>56248</td>
                                        <td className='py-15px font-medium text-sm pl-10'>56248</td>
                                        <td className='py-15px pl-10'>
                                            <button className='font-medium text-sm py-10px px-15px rounded-[5px] text-text-color hover:text-white bg-gray hover:bg-primary'>Show</button>
                                        </td>
                                        <td className='py-15px font-medium text-sm pl-10 pr-3'>Completed</td>
                                    </tr>
                                    <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                        <td className='py-15px font-medium text-sm'>01</td>
                                        <td className='py-15px font-medium text-sm pl-10'>UIUX Design Agency</td>
                                        <td className='py-15px font-medium text-sm pl-10'>uiux design agency</td>
                                        <td className='py-15px font-medium text-sm pl-10'>
                                            <p>2023-01-.-</p>
                                            <p>09T10.07.22.000000Z</p>
                                        </td>
                                        <td className='py-15px font-medium text-sm pl-10'>5,0824</td>
                                        <td className='py-15px font-medium text-sm pl-10'>14839</td>
                                        <td className='py-15px font-medium text-sm pl-10'>56248</td>
                                        <td className='py-15px font-medium text-sm pl-10'>56248</td>
                                        <td className='py-15px pl-10'>
                                            <button className='font-medium text-sm py-10px px-15px rounded-[5px] text-text-color hover:text-white bg-gray hover:bg-primary'>Show</button>
                                        </td>
                                        <td className='py-15px font-medium text-sm pl-10 pr-3'>Completed</td>
                                    </tr>
                                </tbody>

                                <table className='absolute top-0 right-0 bg-white'>
                                    <tr className='border-b border-border-color'>
                                        <th className=' text-left leading-22px text-title-color font-medium pb-15px w-[128px]'>Action</th>
                                    </tr>
                                    <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                        <td className='py-15px font-medium text-sm flex'>
                                            <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-12px py-[8px]  text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                            <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-12px py-[8px] ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                                        </td>
                                    </tr>
                                    <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                        <td className='py-15px font-medium text-sm flex'>
                                            <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-12px py-[8px]  text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                            <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-12px py-[8px] ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                                        </td>
                                    </tr>
                                    <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                        <td className='py-15px font-medium text-sm flex'>
                                            <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-12px py-[8px]  text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                            <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-12px py-[8px] ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                                        </td>
                                    </tr>
                                </table>
                            </table>
                        </div>
                    </div>

                </div>

                <Pagination></Pagination>
            </div>
        </section>
    );
};

export default UploadQueue;