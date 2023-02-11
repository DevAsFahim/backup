import React from 'react';
import Profile from '../Profile/Profile';

const EventReports = () => {
    return (
        <section className='flex-1'>
            <Profile></Profile>
            <div className="UTM px-5 pt-5 pb-30px">
                <div className="heading flex justify-between items-center pb-30px">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">UTM Report of Black Friday -  Founder & CEO</div>
                </div>

                <div className="event_container flex gap-5">
                    <div className="event_content p-15px rounded-lg bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='font-medium group-hover:text-white text-title-color leading-22px'>Visit</h2>
                        <h1 className='font-semibold group-hover:text-white text-title-color text-2xl leading-9'>159</h1>
                    </div>
                    <div className="event_content p-15px rounded-lg bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='font-medium text-title-color group-hover:text-white leading-22px'>Pricing page Visit</h2>
                        <h1 className='font-semibold text-title-color group-hover:text-white text-2xl leading-9'>500</h1>
                    </div>
                    <div className="event_content p-15px rounded-lg bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='font-medium text-title-color group-hover:text-white leading-22px'>Login page Visit</h2>
                        <h1 className='font-semibold text-title-color group-hover:text-white text-2xl leading-9'>950</h1>
                    </div>
                    <div className="event_content p-15px rounded-lg bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='font-medium text-title-color group-hover:text-white leading-22px'>Login</h2>
                        <h1 className='font-semibold text-title-color group-hover:text-white text-2xl leading-9'>500</h1>
                    </div>
                    <div className="event_content p-15px rounded-lg bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='font-medium text-title-color group-hover:text-white leading-22px'>Registered</h2>
                        <h1 className='font-semibold text-title-color group-hover:text-white text-2xl leading-9'>350</h1>
                    </div>
                    <div className="event_content p-15px rounded-lg bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='font-medium text-title-color group-hover:text-white leading-22px'>Purchased</h2>
                        <h1 className='font-semibold text-title-color group-hover:text-white text-2xl leading-9'>150</h1>
                    </div>
                    <div className="event_content p-15px rounded-lg bg-gray hover:bg-primary cursor-pointer group">
                        <h2 className='font-medium text-title-color group-hover:text-white leading-22px'>Add to cart</h2>
                        <h1 className='font-semibold text-title-color group-hover:text-white text-2xl leading-9'>200</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventReports;