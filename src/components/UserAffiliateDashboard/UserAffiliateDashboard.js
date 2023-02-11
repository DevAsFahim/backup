import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';

const UserAffiliateDashboard = () => {
    return (
        <section className='flex-1'>
            <Profile></Profile>
            <div className="px-30px pt-30px pb-30px">
                <div className="heading flex justify-between items-center pb-30px">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">User Affiliate Dashboard</div>
                </div>

                <div className="flex gap-5 flex-wrap">
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>Total Sale</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>500</h1>
                    </div>
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>Available Balance</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>$12,000</h1>
                    </div>
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>This Month Earn</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>$580</h1>
                    </div>
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>Total Earned</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>$150,000</h1>
                    </div>
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>Total Paid</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>$50,000</h1>
                    </div>
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>Purchase Visitor</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>1,200</h1>
                    </div>
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>Total Visitor</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>150,000</h1>
                    </div>
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>Total Login</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>500</h1>
                    </div>
                    <div className="min-w-[170px] p-15px rounded-15px bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='group-hover:text-white text-text-color text-base '>Total Sign Up</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>500</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserAffiliateDashboard;