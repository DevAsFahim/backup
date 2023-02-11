import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';

const ProfileInformation = () => {
    return (
        <section className='flex-1'>
            <Profile></Profile>

            <div className="">
                <div className="py-30px max-w-[780px] mx-auto">

                    <div className="pb-30px">
                        <h2 className="text-2xl leading-9 text-title-color font-semibold">Profile Information</h2>
                    </div>

                    <div className="">
                        <form>
                            <div className="flex gap-5">
                                <div className='mb-25px flex-1'>
                                    <label className='font-medium text-text-color leading-22px inline-block pb-10px' htmlFor="user-full-name">Full Name</label>
                                    <input
                                        className='w-full border outline-none focus:border-primary border-border-color py-13px px-15px text-title-color rounded-10px text-base leading-22px'
                                        id='user-full-name' type="text" placeholder='Name' />
                                </div>
                                <div className='mb-25px flex-1'>
                                    <label className='font-medium text-text-color leading-22px inline-block pb-10px' htmlFor="sequence-name">E-mail</label>
                                    <input
                                        className='w-full border focus:border-primary outline-none border-border-color py-13px px-15px text-title-color rounded-10px text-base leading-22px'
                                        id='sequence-name' type="email" placeholder='email' />
                                </div>
                            </div>
                            <div className='mb-25px'>
                                <label className='font-medium text-text-color leading-22px inline-block pb-10px' htmlFor="promote-sources">Promote Sources</label>
                                <input
                                    className='w-full border outline-none border-border-color py-13px px-15px text-text-color rounded-10px text-base leading-22px'
                                    id='promote-sources' type="text" placeholder='Promote sources' />
                            </div>

                            <div className="flex gap-5">
                                <div className='mb-25px flex-1'>
                                    <label className='font-medium text-text-color leading-22px inline-block pb-10px' htmlFor="source-link-1">Source Link 1</label>
                                    <input
                                        className='w-full border outline-none focus:border-primary border-border-color py-13px px-15px text-title-color rounded-10px text-base leading-22px'
                                        id='source-link-1' type="text" placeholder='Ex: youtube.com/flowgiri' />
                                </div>
                                <div className='mb-25px flex-1'>
                                    <label className='font-medium text-text-color leading-22px inline-block pb-10px' htmlFor="source-link-2">Source Link 2</label>
                                    <input
                                        className='w-full border focus:border-primary outline-none border-border-color py-13px px-15px text-title-color rounded-10px text-base leading-22px'
                                        id='source-link-2' type="text" placeholder='Your others marketing link' />
                                </div>
                            </div>
                            <div className='mb-25px'>
                                <label className='font-medium text-text-color leading-22px inline-block pb-10px' htmlFor="payment-method">Payment Method</label>
                                <input
                                    className='w-full border outline-none border-border-color py-13px px-15px text-text-color rounded-10px text-base leading-22px'
                                    id='payment-method' type="text" placeholder='Wise' />
                            </div>
                            <div className='mb-25px'>
                                <label className='font-medium text-text-color leading-22px inline-block pb-10px' htmlFor="payment-method-message">Messages</label>
                                <textarea
                                    className='w-full border outline-none h-[97px] border-border-color py-13px px-15px text-text-color rounded-10px text-base leading-22px'
                                    id='payment-method-message' placeholder='Describe about you...' ></textarea>
                            </div>

                            <div className='text-right flex justify-end items-center gap-15px'>
                                <Link className='bg-gray hover:bg-red text-base leading-22px font-medium rounded-lg px-[28px] py-12px hover:text-white text-text-color'>Reject</Link>
                                <Link className='bg-gray hover:bg-primary text-base leading-22px font-medium rounded-lg px-15px py-12px hover:text-white text-text-color'>Approved</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfileInformation;