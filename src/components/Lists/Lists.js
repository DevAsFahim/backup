import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import edit from '../../assets/image/Icon-Edit-UIHUT.svg';
import deleteIcon from '../../assets/image/Icon-delete-UIHUT.svg';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';

const Lists = () => {
    return (
        <section className='flex-1 wrapper-width'>
            <Profile></Profile>

            <div className="pl-30px pt-5 pr-5 pb-30px">
                <div className="heading flex justify-between items-center pb-30px">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">Lead Lists</div>
                    <button area_id="create-list-modal" className='modal-open bg-primary rounded-[5px] px-22px py-[14px] text-white'><span className='leading-5 ml-10px text-sm'>Create List</span></button>
                </div>

                <Modal title='Create List' btnHidden={false} modalId="create-list-modal" modalWidth='w-[813px]'>

                    <>
                        <div className='mb-25px'>
                            <label className='font-medium text-title-color inline-block pb-10px' htmlFor="listName">Name</label>
                            <input
                                className='w-full border border-border-color py-[14px] px-15px outline-none text-text-color rounded-md text-sm leading-5'
                                id='listName' type="text" placeholder='Name' />
                        </div>
                        <div className='mb-25px'>
                            <label className='font-medium text-title-color inline-block pb-10px'
                                htmlFor="ListDescription">Description</label>
                            <textarea
                                className='w-full h-[110px] border outline-none border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                id="ListDescription" placeholder='Description'></textarea>
                        </div>
                    </>

                </Modal>

                <div className='relative'>
                    <div className="overflow-x-auto scrollbar scrollbar-track-gray scrollbar-thumb-[#B0B0B0] scrollbar-h-[5px] scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
                        <table className='w-[100%] whitespace-nowrap mr-[127px] mb-5'>
                            <thead>
                                <tr className='border-b border-border-color'>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px'>No</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-3'>Name</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-3'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>uihut.com (Group)</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Description</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>uihut.com (Group)</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Description</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>uihut.com (Group)</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Description</Link></td>
                                </tr>
                            </tbody>
                        </table>
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
                    </div>
                </div>

                <Pagination></Pagination>
            </div>
        </section>
    );
};

export default Lists;