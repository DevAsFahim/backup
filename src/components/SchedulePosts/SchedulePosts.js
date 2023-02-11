import React from 'react';
import Profile from '../Profile/Profile';
import postImg from '../../assets/image/image 4.png'
import man from '../../assets/image/cheerful-curly-man.png'

const SchedulePosts = () => {
    return (
        <section className='flex-1'>
            <Profile></Profile>

            <div className="pr-5 pl-30px pt-5 pb-30px">
                <div className="heading flex justify-between items-center pb-30px">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">Schedule Posts</div>
                </div>

                <div className="schedule-post-container">
                    <div className="post border border-border-color mb-5 py-[37px] px-5 flex justify-between items-center gap-5 rounded-15px">
                        <div>
                            <p className='text-sm text-title-color mb-2'>10-01-2023</p>
                            <p className='text-sm text-title-color '>11: 15 AM</p>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <img src={postImg} alt="post" />
                            <div>
                                <p className='text-sm text-[#000103]'>Hello, Dribbblers!👋</p>
                                <p className='text-sm text-[#000103]'>Happy great day guys, please meet up with...</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#1DA1F2" />
                                <path d="M20 7.06654C19.4 7.3332 18.8 7.5332 18.1333 7.59987C18.8 7.19987 19.3333 6.5332 19.6 5.79987C18.9333 6.19987 18.2667 6.46654 17.5333 6.59987C16.9333 5.9332 16.0667 5.5332 15.1333 5.5332C13.3333 5.5332 11.8667 6.99987 11.8667 8.79987C11.8667 9.06654 11.8667 9.3332 11.9333 9.5332C9.13333 9.39987 6.73333 8.06654 5.13333 6.06654C4.8 6.59987 4.66667 7.1332 4.66667 7.7332C4.66667 8.86654 5.26667 9.86654 6.13333 10.4665C5.6 10.4665 5.06667 10.3332 4.66667 10.0665C4.66667 10.0665 4.66667 10.0665 4.66667 10.1332C4.66667 11.7332 5.8 13.0665 7.26667 13.3332C7 13.3999 6.73333 13.4665 6.4 13.4665C6.2 13.4665 6 13.4665 5.8 13.3999C6.2 14.7332 7.4 15.6665 8.86667 15.6665C7.73333 16.5332 6.33333 17.0665 4.8 17.0665C4.53333 17.0665 4.26667 17.0665 4 16.9999C5.46667 17.9332 7.2 18.4665 9 18.4665C15.0667 18.4665 18.3333 13.4665 18.3333 9.1332C18.3333 8.99987 18.3333 8.86654 18.3333 8.7332C19 8.26654 19.5333 7.66654 20 7.06654Z" fill="white" />
                            </svg>
                            <p className='text-sm text-title-color'>Twitter</p>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <img src={man} alt="man" />
                            <p className='text-sm text-title-color'>Hossain66</p>
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#929292" />
                                <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#929292" />
                                <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#929292" />
                            </svg>
                        </div>
                    </div>
                    <div className="post border border-border-color mb-5 py-[37px] px-5 flex justify-between items-center gap-5 rounded-15px">
                        <div>
                            <p className='text-sm text-title-color mb-2'>10-01-2023</p>
                            <p className='text-sm text-title-color '>11: 15 AM</p>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <img src={postImg} alt="post" />
                            <div>
                                <p className='text-sm text-[#000103]'>Hello, Dribbblers!👋</p>
                                <p className='text-sm text-[#000103]'>Happy great day guys, please meet up with...</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#1DA1F2" />
                                <path d="M20 7.06654C19.4 7.3332 18.8 7.5332 18.1333 7.59987C18.8 7.19987 19.3333 6.5332 19.6 5.79987C18.9333 6.19987 18.2667 6.46654 17.5333 6.59987C16.9333 5.9332 16.0667 5.5332 15.1333 5.5332C13.3333 5.5332 11.8667 6.99987 11.8667 8.79987C11.8667 9.06654 11.8667 9.3332 11.9333 9.5332C9.13333 9.39987 6.73333 8.06654 5.13333 6.06654C4.8 6.59987 4.66667 7.1332 4.66667 7.7332C4.66667 8.86654 5.26667 9.86654 6.13333 10.4665C5.6 10.4665 5.06667 10.3332 4.66667 10.0665C4.66667 10.0665 4.66667 10.0665 4.66667 10.1332C4.66667 11.7332 5.8 13.0665 7.26667 13.3332C7 13.3999 6.73333 13.4665 6.4 13.4665C6.2 13.4665 6 13.4665 5.8 13.3999C6.2 14.7332 7.4 15.6665 8.86667 15.6665C7.73333 16.5332 6.33333 17.0665 4.8 17.0665C4.53333 17.0665 4.26667 17.0665 4 16.9999C5.46667 17.9332 7.2 18.4665 9 18.4665C15.0667 18.4665 18.3333 13.4665 18.3333 9.1332C18.3333 8.99987 18.3333 8.86654 18.3333 8.7332C19 8.26654 19.5333 7.66654 20 7.06654Z" fill="white" />
                            </svg>
                            <p className='text-sm text-title-color'>Twitter</p>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <img src={man} alt="man" />
                            <p className='text-sm text-title-color'>Hossain66</p>
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#929292" />
                                <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#929292" />
                                <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#929292" />
                            </svg>
                        </div>
                    </div>
                    <div className="post border border-border-color mb-5 py-[37px] px-5 flex justify-between items-center gap-5 rounded-15px">
                        <div>
                            <p className='text-sm text-title-color mb-2'>10-01-2023</p>
                            <p className='text-sm text-title-color '>11: 15 AM</p>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <img src={postImg} alt="post" />
                            <div>
                                <p className='text-sm text-[#000103]'>Hello, Dribbblers!👋</p>
                                <p className='text-sm text-[#000103]'>Happy great day guys, please meet up with...</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#1DA1F2" />
                                <path d="M20 7.06654C19.4 7.3332 18.8 7.5332 18.1333 7.59987C18.8 7.19987 19.3333 6.5332 19.6 5.79987C18.9333 6.19987 18.2667 6.46654 17.5333 6.59987C16.9333 5.9332 16.0667 5.5332 15.1333 5.5332C13.3333 5.5332 11.8667 6.99987 11.8667 8.79987C11.8667 9.06654 11.8667 9.3332 11.9333 9.5332C9.13333 9.39987 6.73333 8.06654 5.13333 6.06654C4.8 6.59987 4.66667 7.1332 4.66667 7.7332C4.66667 8.86654 5.26667 9.86654 6.13333 10.4665C5.6 10.4665 5.06667 10.3332 4.66667 10.0665C4.66667 10.0665 4.66667 10.0665 4.66667 10.1332C4.66667 11.7332 5.8 13.0665 7.26667 13.3332C7 13.3999 6.73333 13.4665 6.4 13.4665C6.2 13.4665 6 13.4665 5.8 13.3999C6.2 14.7332 7.4 15.6665 8.86667 15.6665C7.73333 16.5332 6.33333 17.0665 4.8 17.0665C4.53333 17.0665 4.26667 17.0665 4 16.9999C5.46667 17.9332 7.2 18.4665 9 18.4665C15.0667 18.4665 18.3333 13.4665 18.3333 9.1332C18.3333 8.99987 18.3333 8.86654 18.3333 8.7332C19 8.26654 19.5333 7.66654 20 7.06654Z" fill="white" />
                            </svg>
                            <p className='text-sm text-title-color'>Twitter</p>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <img src={man} alt="man" />
                            <p className='text-sm text-title-color'>Hossain66</p>
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#929292" />
                                <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#929292" />
                                <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#929292" />
                            </svg>
                        </div>
                    </div>
                    <div className="post border border-border-color py-[37px] px-5 flex justify-between items-center gap-5 rounded-15px">
                        <div>
                            <p className='text-sm text-title-color mb-2'>10-01-2023</p>
                            <p className='text-sm text-title-color '>11: 15 AM</p>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <img src={postImg} alt="post" />
                            <div>
                                <p className='text-sm text-[#000103]'>Hello, Dribbblers!👋</p>
                                <p className='text-sm text-[#000103]'>Happy great day guys, please meet up with...</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#1DA1F2" />
                                <path d="M20 7.06654C19.4 7.3332 18.8 7.5332 18.1333 7.59987C18.8 7.19987 19.3333 6.5332 19.6 5.79987C18.9333 6.19987 18.2667 6.46654 17.5333 6.59987C16.9333 5.9332 16.0667 5.5332 15.1333 5.5332C13.3333 5.5332 11.8667 6.99987 11.8667 8.79987C11.8667 9.06654 11.8667 9.3332 11.9333 9.5332C9.13333 9.39987 6.73333 8.06654 5.13333 6.06654C4.8 6.59987 4.66667 7.1332 4.66667 7.7332C4.66667 8.86654 5.26667 9.86654 6.13333 10.4665C5.6 10.4665 5.06667 10.3332 4.66667 10.0665C4.66667 10.0665 4.66667 10.0665 4.66667 10.1332C4.66667 11.7332 5.8 13.0665 7.26667 13.3332C7 13.3999 6.73333 13.4665 6.4 13.4665C6.2 13.4665 6 13.4665 5.8 13.3999C6.2 14.7332 7.4 15.6665 8.86667 15.6665C7.73333 16.5332 6.33333 17.0665 4.8 17.0665C4.53333 17.0665 4.26667 17.0665 4 16.9999C5.46667 17.9332 7.2 18.4665 9 18.4665C15.0667 18.4665 18.3333 13.4665 18.3333 9.1332C18.3333 8.99987 18.3333 8.86654 18.3333 8.7332C19 8.26654 19.5333 7.66654 20 7.06654Z" fill="white" />
                            </svg>
                            <p className='text-sm text-title-color'>Twitter</p>
                        </div>
                        <div className='flex items-center gap-10px'>
                            <img src={man} alt="man" />
                            <p className='text-sm text-title-color'>Hossain66</p>
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#929292" />
                                <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#929292" />
                                <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#929292" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchedulePosts;