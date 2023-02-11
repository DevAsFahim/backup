import React from 'react';
import Pagination from '../Pagination/Pagination';
import filter from '../../assets/image/Icon-Filter-UIHUT.svg';
import edit from '../../assets/image/Icon-Edit-UIHUT.svg';
import greenCircle from '../../assets/image/green-circle.svg';
import yellowCircle from '../../assets/image/yellow-circle.svg';
import redCircle from '../../assets/image/red-circle.svg';
import plusIcon from '../../assets/image/plus.svg';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Modal from '../Modal/Modal';  

const Contacts = () => {
    return (
        <section className='flex-1 wrapper-width'>
            <Profile></Profile>

            <div className="pr-5 pl-30px pt-5 pb-30px">
                <div className='heading pb-30px'>
                    <div className=" flex justify-between items-center pb-5">
                        <div className="title font-semibold text-2xl leading-9 text-title-color">Contacts</div>
                        <button area_id='contact-modal' className='modal-open bg-primary rounded-[5px] px-22px py-[14px] text-white'><span className='leading-5 text-sm'>Upload</span></button>
                    </div>

                    <Modal title='Upload Contact' btnHidden={false} modalId="contact-modal" modalWidth={'w-[813px]'}>

                        <>
                            <div className='mb-25px'>
                                <label className='font-medium text-title-color inline-block pb-10px' htmlFor="contactName">Name</label>
                                <input
                                    className='w-full border outline-none border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                    id='contactName' type="text" placeholder='Name' />
                            </div>
                            <div className='mb-25px'>
                                <label className='font-medium text-title-color inline-block pb-10px'
                                    htmlFor="contact-select-list">Lead List</label>
                                <select
                                    className='w-full outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                    id="contact-select-list" placeholder='Description'>
                                    <option value="1">Select list</option>
                                </select>
                            </div>
                            <div className='mb-25px'>
                                <label className='font-medium text-title-color inline-block pb-10px'
                                    htmlFor="contact-select-tag">Tags</label>
                                <select
                                    className='w-full outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                    id="contact-select-tag" placeholder='Description'>
                                    <option value="1">Select Tag</option>
                                </select>
                            </div>
                            <div className='mb-25px'>
                                <label className='font-medium text-title-color inline-block pb-10px' htmlFor="UTMGroup">Upload File</label>
                                <input className='file:p-[7px] file:border-0 file: file:rounded-[4px] file:bg-gray file:text-text-color  p-2 outline-none border border-border-color text-text-color rounded-md text-base leading-22px font-medium file:text-base file:leading-22px file:font-medium block w-full cursor-pointer'
                                    id='UTMGroup' type="file" />
                            </div>
                            <div className='mb-25px flex justify-between items-center'>
                                <div class="form-check">
                                    <input className="bg-white rounded-[4px] border-border-color text-primary h-5 w-5 focus:ring-offset-0 focus:ring-0 mr-10px" type="checkbox" id='flexCheckDefault' />
                                    <label class="text-base leading-22px font-medium text-title-color" for="flexCheckDefault">
                                        Default checkbox
                                    </label>
                                </div>
                                <div>
                                    <Link className='text-base leading-22px font-medium text-primary'>CSV,</Link>
                                    <Link className='text-base leading-22px font-medium text-primary'>XLSX,</Link>
                                </div>
                            </div>
                        </>

                    </Modal>

                    <form className=''>
                        <div className='pt-5 px-5 pb-15px rounded-10px bg-gray'>
                            <div className='w-full border border-border-color py-13px px-15px text-text-color rounded-md text-sm bg-white flex justify-between mb-[5px]'>
                                <span className='text-sm text-text-color cursor-default'>No filter conditions applied.</span>
                                <Link className='text-sm text-text-color'>Expand Filter</Link>
                            </div>
                            <div className='flex gap-4 items-end justify-between'>
                                <div className='w-full'>
                                    <label className='font-medium text-title-color text-sm inline-block pb-10px' htmlFor="email">Email</label>
                                    <input
                                        className='w-full border border-border-color outline-none focus:border-primary py-13px px-15px text-text-color rounded-md text-sm '
                                        id='email' type="text" />
                                </div>
                                <div className='w-full'>
                                    <label className='font-medium text-sm text-title-color inline-block pb-10px'
                                        htmlFor="List">List</label>
                                    <select
                                        className='w-full border border-border-color outline-none focus:border-primary py-13px px-15px text-text-color rounded-md text-sm '
                                        id="List">
                                        <option value="1">Select lists</option>
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className='font-medium text-sm text-title-color inline-block pb-10px'
                                        htmlFor="Tags">Tags</label>
                                    <select
                                        className='w-full border border-border-color outline-none focus:border-primary py-13px px-15px text-text-color rounded-md text-sm '
                                        id="Tags">
                                        <option value="1">Select lists</option>
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className='font-medium text-sm text-title-color inline-block pb-10px'
                                        htmlFor="Tags">Industry</label>
                                    <select
                                        className='w-full border border-border-color outline-none focus:border-primary py-13px px-15px text-text-color rounded-md text-sm '
                                        id="Tags">
                                        <option value="1">Select lists</option>
                                    </select>
                                </div>
                            </div>
                            <div className="see-more mt-5"><Link className='flex gap-[6px]'> <img src={plusIcon} alt="icon" /> <span className='text-sm font-medium text-text-color'>More Filter</span></Link></div>
                        </div>
                        <div className='flex justify-between items-start mt-15px'>
                            <div className="see-more ml-5"><Link className='flex gap-[6px]'> <img src={plusIcon} alt="icon" /> <span className='text-sm font-medium text-text-color'>Or</span></Link></div>
                            <div className='pt-[5px] flex gap-15px'>
                                <button
                                    className='border-border-color bg-gray p-15px text-text-color rounded-md text-xs text-medium'
                                > <span>Collapse</span></button>
                                <button
                                    className='bg-primary p-15px text-white rounded-md text-xs text-medium flex gap-[7px]'
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 5.25H4.5M4.5 5.25C4.5 6.49264 5.50736 7.5 6.75 7.5C7.99264 7.5 9 6.49264 9 5.25C9 4.00736 7.99264 3 6.75 3C5.50736 3 4.5 4.00736 4.5 5.25ZM2.25 12.75H6.75M13.5 12.75H15.75M13.5 12.75C13.5 13.9926 12.4926 15 11.25 15C10.0074 15 9 13.9926 9 12.75C9 11.5074 10.0074 10.5 11.25 10.5C12.4926 10.5 13.5 11.5074 13.5 12.75ZM11.25 5.25H15.75" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <span>Filter</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="table-container">

                    <p className='text-base leading-22px mb-[21px]'>Total: <span>62,500</span></p>

                    <div className="relative">
                        <div className='overflow-x-auto scrollbar scrollbar-track-gray scrollbar-thumb-[#B0B0B0] scrollbar-h-[5px] scrollbar-thumb-rounded-md scrollbar-track-rounded-md'>
                            <table className='w-[100%] whitespace-nowrap mr-[51px] mb-5'>
                                <thead>
                                    <tr className='border-b border-border-color'>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px'>No</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-3'>First Name</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-3'>Last Name</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-3'>Name</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-3'>Email</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-3'>List Name</th>
                                        <th className='text-left leading-22px text-title-color font-medium pb-15px pl-3'>Tags</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                        <td className='py-25px font-medium text-sm'>01</td>
                                        <td className='py-25px font-medium text-sm'>John</td>
                                        <td className='py-25px font-medium text-sm'>Smith</td>
                                        <td className='py-25px font-medium text-sm'>John Smith</td>
                                        <td className='py-25px font-medium text-sm flex gap-[7px]'> <img src={greenCircle} alt="" /> <span>johnsmith@gmail.com</span></td>
                                        <td className='py-25px font-medium text-sm'>Verify Email</td>
                                        <td className='py-25px font-medium text-sm'><Link className='bg-gray py-[6px] px-10px rounded-full'>Bounce</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className='absolute top-0 right-0 bg-white'>
                                <tr className='border-b border-border-color'>
                                    <th className=' text-left leading-22px text-title-color font-medium pb-15px w-[52px]'>Action</th>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-15px font-medium text-sm flex'>
                                        <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-12px py-[8px]  text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <Pagination></Pagination>
            </div>
        </section>
    );
};

export default Contacts;