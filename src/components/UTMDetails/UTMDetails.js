import React, { useEffect } from 'react';
import Profile from '../Profile/Profile';
import add from '../../assets/image/add.svg';
import edit from '../../assets/image/Icon-Edit-UIHUT.svg';
import deleteIcon from '../../assets/image/Icon-delete-UIHUT.svg';
import closeIcon from '../../assets/image/closeIcon.svg';
import eroRight from '../../assets/image/Ero-right.svg';
import eroLeft from '../../assets/image/Ero-left.svg';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const UTMDetails = () => {
    useEffect(() => {
        let modalOpenButtons = document.querySelectorAll('.modal-open');
        let modalCloseButtons = document.querySelectorAll('.modal-close');
        let modals = document.querySelectorAll('.modal');

        if (modalOpenButtons.length) {
            modalOpenButtons.forEach(modalOpen => {
                modalOpen.addEventListener('click', () => {
                    document.body.style.overflow = 'hidden'
                    document.body.style.paddingRight = '17px'
                    modals.forEach(modal => {
                        let selectedModal = modal.getAttribute('id');
                        let modalOpenGetId = modalOpen.getAttribute('area_id')
                        if (selectedModal === modalOpenGetId) {
                            modal.classList.add('active')
                        }
                    })
                })
            })
        }
        if (modalCloseButtons.length) {
            modalCloseButtons.forEach(modalClose => {
                modalClose.addEventListener('click', (event) => {
                    document.body.style.overflow = 'auto'
                    document.body.style.paddingRight = '0px'
                    event.target.closest('div.modal').classList.remove('active')
                })
            })
        }
    }, [])
    return (
        <section className='flex-1 wrapper-width'>
            <Profile></Profile>

            <div className="pl-30px pr-5 pt-5 pb-30px">
                <div className="heading flex justify-between items-center pb-9">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">UTM of uihut.com</div>
                    <button className='flex justify-center bg-primary rounded-[5px] px-15px py-[14px] text-white'> <img src={add} alt="add" /> <span className='leading-5 ml-10px text-sm'>Add New</span></button>

                </div>
                <div className='relative'>
                    <div className="overflow-x-auto scrollbar scrollbar-track-gray scrollbar-thumb-[#B0B0B0] scrollbar-h-[5px] scrollbar-thumb-rounded-md scrollbar-track-rounded-md">
                        <table className='w-[100%] whitespace-nowrap mr-[223px] mb-5'>
                            <thead>
                                <tr className='border-b border-border-color'>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px'>No</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-3'>UID</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-3'>Web Link</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-3'>Short Url</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-3'>Name</th>
                                    <th className='text-left leading-22px text-title-color font-medium pb-25px pl-3'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>butm=nQmRezEVrl</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>uihut.com/reff?ufvnjfl?</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>nicelink.co?urnjxbv?</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Black Friday - Founder..</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Eta holo amar ..</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>butm=nQmRezEVrl</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>uihut.com/reff?ufvnjfl?</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>nicelink.co?urnjxbv?</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Black Friday - Founder..</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Eta holo amar ..</Link></td>
                                </tr>
                                <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                    <td className='py-25px font-medium text-sm'><Link>01</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>butm=nQmRezEVrl</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>uihut.com/reff?ufvnjfl?</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>nicelink.co?urnjxbv?</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Black Friday - Founder..</Link></td>
                                    <td className='py-25px font-medium text-sm pl-3'><Link>Eta holo amar ..</Link></td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='absolute top-0 right-0 bg-white'>
                            <tr className='border-b border-border-color'>
                                <th className=' text-left leading-22px text-title-color font-medium pb-25px w-[224px]'>Action</th>
                            </tr>
                            <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                <td className='py-13px font-medium text-sm flex'>
                                    <Link to='/eventreports' className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px hover:text-white text-text-color'>Reports</Link>
                                    <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                    <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                                </td>
                            </tr>
                            <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                <td className='py-13px font-medium text-sm flex'>
                                    <Link to='/eventreports' className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px hover:text-white text-text-color'>Reports</Link>
                                    <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                    <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                                </td>
                            </tr>
                            <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                                <td className='py-13px font-medium text-sm flex'>
                                    <Link to='/eventreports' className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px hover:text-white text-text-color'>Reports</Link>
                                    <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                    <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
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

export default UTMDetails;