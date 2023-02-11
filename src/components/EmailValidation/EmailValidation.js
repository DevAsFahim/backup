import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import greenCircle from '../../assets/image/green-circle.svg';
import checked from '../../assets/image/checked.svg';
import yellowCircle from '../../assets/image/yellow-circle.svg';
import redCircle from '../../assets/image/red-circle.svg';
import copyIcon from '../../assets/image/copy.svg';
import addListIcon from '../../assets/image/addListIcon.svg';
import downloadIcon from '../../assets/image/downloadIcon.svg';
import bin from '../../assets/image/bin.svg';
import envelop from '../../assets/image/envelop.svg';
import closeIcon from '../../assets/image/closeIcon.svg';
import { Link } from 'react-router-dom';



const EmailValidation = () => {
    const [addNewSingleEmail, setAddNewSingleEmail] = useState(false);
    const [addNewBulkEmail, setAddNewBulkEmail] = useState(false);

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
        <section className='flex-1'>
            <Profile></Profile>

            <div className='text-center pt-[100px] pb-[167px] px-5'>
                <div className="individual-email">
                    <h1 className='font-semibold text-2xl leading-9 mb-5 text-title-color'>Individual Email Verification</h1>
                    <p className='w-[553px] m-auto mb-30px text-sm text-text-color'>Verify single emails using our multilayer verification process that includes syntax check, MX record check, and SMTP authentication.</p>
                    <form className='flex gap-15px justify-center mb-[100px]'>
                        <input
                            className='w-[333px] border border-border-color py-[14px] focus:border-primary focus:text-title-color outline-none px-15px text-text-color rounded-[5px] text-sm leading-5'
                            id='email' type="text" placeholder='example@gmail.com' />
                        <button className='border bg-primary text-white border-border-color font-medium py-[14px] px-[37px] rounded-[5px] text-sm leading-5' type='submit'>Verify email</button>
                    </form>
                </div>
                <div className="bulk-email mb-10">
                    <h1 className='font-semibold text-2xl leading-9 mb-5 text-title-color'>Bulk Email Verification</h1>
                    <p className='w-[553px] m-auto mb-[40px] text-sm text-text-color'>Upload a list in CSV, XLS, XLSX, or TXT format</p>
                    <form>
                        <label htmlFor='bulk-email-verify' className='border mr-15px border-border-color font-medium py-[14px] px-[37px] text-text-color rounded-[5px] text-sm leading-5'>
                            Choose file
                            <input type="file" id='bulk-email-verify' className='hidden' multiple />
                        </label>
                        <button className='border bg-primary  border-border-color font-medium py-[14px] px-[37px] text-white rounded-[5px] text-sm leading-5' type='submit'>Verify email</button>
                    </form>
                </div>

                <div className="single-email-collection mb-5">
                    <ul className='flex justify-between items-center px-[20px] py-15px border border-border-color rounded-[5px]'>
                        <li>
                            <p className='text-sm text-title-color'>mahfuzulislamnabil83</p>
                        </li>
                        <li>
                            <p className='flex gap-[7px] text-sm text-title-color'><img src={greenCircle} alt="copy" /> <span>mahfuzulislamnabil83@gmail.com</span></p>
                        </li>
                        <li>
                            <button className='border border-border-color py-[9px] px-12px rounded-[3px]'><img src={copyIcon} alt="copy" /></button>
                        </li>
                        <li>
                            <div className="relative">
                                <button onClick={() => setAddNewSingleEmail(!addNewSingleEmail)} className='flex gap-[5px] py-[5px] px-10px items-center border border-border-color rounded-[3px]'><img src={addListIcon} alt="add to list" /> <span className='text-xs text-title-color leading-5'>Add to list</span>
                                </button>
                                <div className={`absolute top-full z-50 border ${!addNewSingleEmail && 'hidden'} shadow-[0px_10px_20px_1px_rgba(120,114,114,0.15)] border-border-color rounded-[5px] p-[8px] left-0 bg-white mt-[5px] `}>
                                    <form className='border border-border-color rounded-[5px] flex overflow-hidden '>
                                        <input type="text" placeholder='Create new list' className='text-sm inline-block text-text-color p-10px border-r border-border-color outline-none' />
                                        <button className='text-sm text-text-color p-10px inline-block hover:bg-primary hover:text-white'>Create</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li>
                            <ul className='flex gap-5'>
                                <li area_id='download-verification-result' className='modal-open cursor-pointer'><Link><img src={downloadIcon} alt="icon" /></Link></li>
                                <li><Link><img src={bin} alt="icon" /></Link></li>
                                <li><Link><img src={envelop} alt="icon" /></Link></li>
                            </ul>
                        </li>
                        {/* Modal */}
                        <div id='download-verification-result' className="modal modal-container modal w-full fixed bg-[#a7a7a780] overflow-x-hidden overflow-y-auto top-0 right-1/2 translate-x-1/2 ease-in-out  z-50 h-full ">

                            <div className="modal-area w-[654px] relative m-auto my-5 rounded-xl bg-white">

                                <button className="modal-close absolute top-5 right-30px"><img src={closeIcon} alt="close icon" /></button>
                                <div className="modal-body py-[40px] px-30px">

                                    <div
                                        className="modal-head mb-30px text-left">
                                        <h2 className="text-[26px] leading-8 text-title-color mb-15px font-semibold">Download verification results</h2>
                                        <p className='text-sm text-text-color'>Download email addresses with their verification statuses. Please choose which emails you would like to include and pick the format of the exported file</p>
                                    </div>

                                    <div className="modal-content">
                                        <div>
                                            <div className='mb-[48px]'>
                                                <h2 className='text-base text-left leading-22px font-medium text-title-color mb-5'>Download verification results</h2>

                                                <div className='email-type flex items-center gap-30px '>
                                                    <div className='valed flex gap-10px items-center'>
                                                        <input className="bg-white rounded-[4px] border-border-color text-primary h-5 w-5 focus:ring-offset-0 focus:ring-0" type="checkbox" id='valed-checkbox' />
                                                        <label htmlFor='valed-checkbox' className='flex gap-[7px] items-center'>
                                                            <img src={greenCircle} alt="green circle" />
                                                            <span className='font-medium text-sm text-text-color'>Valed</span>
                                                        </label>
                                                    </div>
                                                    <div className='unverifiable flex gap-10px items-center'>
                                                        <input className="bg-white rounded-[4px] border-border-color text-primary h-5 w-5 focus:ring-offset-0 focus:ring-0" type="checkbox" id='unverifiable-checkbox' />
                                                        <label htmlFor='unverifiable-checkbox' className='flex gap-[7px] items-center'>
                                                            <img src={yellowCircle} alt="green circle" />
                                                            <span className='font-medium text-sm text-text-color'>Unverifiable</span>
                                                        </label>
                                                    </div>
                                                    <div className='invalid flex gap-10px items-center'>
                                                        <input className="bg-white rounded-[4px] border-border-color text-primary h-5 w-5 focus:ring-offset-0 focus:ring-0" type="checkbox" id='invalid-checkbox' />
                                                        <label htmlFor='invalid-checkbox' className='flex gap-[7px] items-center'>
                                                            <img src={redCircle} alt="green circle" />
                                                            <span className='font-medium text-sm text-text-color'>Invalid</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mb-48px'>
                                                <h2 className='text-base leading-22px font-medium text-left text-title-color mb-5'>Download verification results</h2>

                                                <div className='email-type flex items-center gap-30px '>
                                                    <div className='valed flex gap-10px items-center'>
                                                        <input className="bg-white rounded-[4px] border-border-color text-primary h-5 w-5 focus:ring-offset-0 focus:ring-0" type="checkbox" id='csv-checkbox' />
                                                        <label htmlFor='csv-checkbox' className='flex gap-[7px] items-center'>
                                                            <img src={greenCircle} alt="green circle" />
                                                            <span className='font-medium text-sm text-text-color'>CSV</span>
                                                        </label>
                                                    </div>
                                                    <div className='invalid flex gap-10px items-center'>
                                                        <input className="bg-white rounded-[4px] border-border-color text-primary h-5 w-5 focus:ring-offset-0 focus:ring-0" type="checkbox" id='xlsx-checkbox' />
                                                        <label htmlFor='xlsx-checkbox' className='flex gap-[7px] items-center'>
                                                            <img src={redCircle} alt="green circle" />
                                                            <span className='font-medium text-sm text-text-color'>XLSX</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='modal-btn flex justify-between gap-5 mt-10'>
                                                <button type="button"
                                                    className="modal-close flex-1  hover:bg-primary hover:text-white bg-gray rounded-[5px] px-25px py-[14px] text-base leading-22px text-text-color">Close</button>
                                                <button
                                                    className="hover:bg-primary flex-1 hover:text-white bg-gray ml-13px rounded-[5px] px-25px py-[14px] text-base leading-22px text-text-color">Download</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                    </div>

                                </div>

                            </div>
                        </div>
                    </ul>
                </div>
                <div className="bulk-email-collection">
                    <ul className='flex justify-between items-center px-[20px] py-15px border border-border-color rounded-[5px]'>
                        <li>
                            <p className='text-sm text-black'>Computer network.csv</p>
                        </li>
                        <li>
                            <p className='flex gap-[7px] text-sm text-black'><img src={checked} alt="copy" /> <span>200 email verifed</span></p>
                        </li>
                        <li>
                            <ul className='flex gap-10px'>
                                <li className='flex gap-[7px] text-sm text-black'><img src={greenCircle} alt="icon" /> <span>100</span></li>
                                <li className='flex gap-[7px] text-sm text-black'><img src={redCircle} alt="icon" /> <span>50</span></li>
                                <li className='flex gap-[7px] text-sm text-black'><img src={yellowCircle} alt="icon" /> <span>25</span></li>
                            </ul>
                        </li>
                        <li>
                            <p className='text-sm text-black'>12-01-2023</p>
                        </li>
                        <li>
                            <div className='relative'>
                                <button onClick={() => setAddNewBulkEmail(!addNewBulkEmail)} className='flex gap-[5px] py-[5px] px-10px items-center border border-border-color rounded-[3px] '><img src={addListIcon} alt="add to list" /> <span className='text-sm text-black leading-5'>Add to list</span>
                                </button>
                                <div className={`absolute top-full border z-50 ${!addNewBulkEmail && 'hidden'} shadow-[0px_10px_20px_1px_rgba(120,114,114,0.15)] border-border-color rounded-[5px] p-[8px] left-0 bg-white mt-[5px] `}>
                                    <form className='border border-border-color rounded-[5px] flex overflow-hidden '>
                                        <input type="text" placeholder='Create new list' className='text-sm inline-block text-text-color p-10px border-r border-border-color outline-none' />
                                        <button className='text-sm text-text-color p-10px inline-block hover:bg-primary hover:text-white'>Create</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li>
                            <ul className='flex gap-5'>
                                <li><img src={downloadIcon} alt="icon" /></li>
                                <li><img src={bin} alt="icon" /></li>
                                <li><img src={envelop} alt="icon" /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EmailValidation;