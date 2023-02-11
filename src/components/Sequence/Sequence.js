import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Profile from '../Profile/Profile';
import add from '../../assets/image/add.svg';
import Modal from '../Modal/Modal';
import edit from '../../assets/image/Icon-Edit-UIHUT.svg';
import deleteIcon from '../../assets/image/Icon-delete-UIHUT.svg';

const Sequence = () => {
    return (
        <section className='flex-1 wrapper-width'>
            <Profile></Profile>

            <div className="pr-5 pl-30px pt-5 pb-30px">
                <div className="heading flex justify-between items-center pb-9">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">Sequence</div>
                    <button area_id="sequence-modal" className='modal-open flex justify-center bg-primary rounded-[5px] px-15px py-[14px] text-white'> <img src={add} alt="add" /> <span className='leading-5 ml-10px text-sm'>Add New</span></button>
                </div>

                <Modal title='Create List' btnHidden={false} modalId="sequence-modal" modalWidth='w-[954px]'>

                    <>
                        <div className="flex gap-30px">
                            <div className="flex-1">
                                <div className='mb-25px'>
                                    <label className='font-medium text-title-color inline-block pb-10px' htmlFor="sequence-name">Name</label>
                                    <input
                                        className='w-full border outline-none border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                        id='sequence-name' type="text" placeholder='Name' />
                                </div>
                                <div className='mb-25px'>
                                    <label className='font-medium text-title-color inline-block pb-10px'
                                        htmlFor="sequence-is-publish">Is Published</label>
                                    <select
                                        className='w-full outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                        id="sequence-is-publish" placeholder='Description'>
                                        <option value="1">Select Tag</option>
                                    </select>
                                </div>
                                <div className='mb-25px'>
                                    <label className='font-medium text-title-color inline-block pb-10px'
                                        htmlFor="sequence-lead-list">Lead List</label>
                                    <select
                                        className='w-full outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                        id="sequence-lead-list" placeholder='Description'>
                                        <option value="1">Select Tag</option>
                                    </select>
                                </div>
                                <div className='mb-25px'>
                                    <label className='font-medium text-title-color inline-block pb-10px'
                                        htmlFor="sequence-include-tags">Include Tags</label>
                                    <select
                                        className='w-full outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                        id="sequence-include-tags" placeholder='Description'>
                                        <option value="1">Select Tag</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className='mb-25px'>
                                    <label className='font-medium text-title-color inline-block pb-10px' htmlFor="sequence-start-at">Start At</label>
                                    <input
                                        className='w-full border outline-none border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                        id='sequence-start-at' type="date" />
                                </div>
                                <div className='mb-25px'>
                                    <label className='font-medium text-title-color inline-block pb-10px' htmlFor="sequence-send-per-second">Send Per Second</label>
                                    <input
                                        className='w-full border outline-none border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                        id='sequence-send-per-second' type="text" placeholder='Name' />
                                </div>
                                <div className='mb-25px'>
                                    <label className='font-medium text-title-color inline-block pb-10px'
                                        htmlFor="sequence-except-list">Except List</label>
                                    <select
                                        className='w-full outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                        id="sequence-except-list" placeholder='Description'>
                                        <option value="1">Select Tag</option>
                                    </select>
                                </div>
                                <div className='mb-25px'>
                                    <label className='font-medium text-title-color inline-block pb-10px'
                                        htmlFor="sequence-except-tags">Except Tags</label>
                                    <select
                                        className='w-full outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                        id="sequence-except-tags" placeholder='Description'>
                                        <option value="1">Select Tag</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='mb-25px'>
                            <label className='font-medium text-title-color inline-block pb-10px'
                                htmlFor="contact-select-tag">Platform</label>
                            <select
                                className='w-full outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                id="contact-select-tag" placeholder='Description'>
                                <option value="1">Select Tag</option>
                            </select>
                        </div>
                    </>

                </Modal>

                <div className='relative'>
                    <div className="overflow-x-auto scrollbar scrollbar-track-gray scrollbar-thumb-[#B0B0B0] scrollbar-h-[5px] scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
                        <table className='w-[100%] whitespace-nowrap mr-[127px] mb-5'>
                            <thead>
                                <tr className='border-b border-border-color'>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px'>No</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Name</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Start At</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>End At</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Type</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>List</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Except Tags</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Total Contact</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10'>Total Sent</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-15px pl-10 pr-5'>Send Per Second</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Design Agency</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10-12-2022</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>15-01-2023</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>50824</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Design</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>56248</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>100</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Design Agency</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10-12-2022</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>15-01-2023</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>50824</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Design</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>56248</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>100</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Design Agency</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10-12-2022</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>15-01-2023</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>50824</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>UIUX Design</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>56248</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>10,000</Link></td>
                                    <td className='py-25px font-medium text-sm pl-10'><Link>100</Link></td>
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

export default Sequence;