import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import addChannel from '../../assets/image/add-channel.svg';
import fbPostImage from '../../assets/image/fb-post-image.png';
import twitterPostImage from '../../assets/image/twitter-post-image.png';
import filterIcon from '../../assets/image/Icon-Filter-UIHUT.svg';
import man from '../../assets/image/cheerful-curly-man.png';
import postImage1 from '../../assets/image/post-image-1.png';
import postImage2 from '../../assets/image/post-image-2.png';

const PublishPosts = () => {
    const [filter, setFilter] = useState(false)
    
    return (
        <section className='flex-1'>
            <Profile></Profile>

            <div className="pr-5 pl-30px pt-5 pb-30px">
                <div className="heading pb-5">
                    <div className="flex justify-between items-center pb-5">
                        <div className="title font-semibold text-2xl leading-9 text-title-color">Publish Posts</div>
                        <button onClick={() => setFilter(!filter)} className='flex bg-gray rounded-md p-15px text-text-color'> <img src={filterIcon} alt="filter icon" /> <span className='leading-5 ml-10px text-sm'>Filters</span></button>
                    </div>

                    <form className={`flex gap-15px justify-between ${!filter && 'hidden'}`}>
                        <div className='w-full'>
                            <label className='font-medium text-title-color inline-block text-sm pb-10px'
                                htmlFor="social-media">Social Media</label>
                            <select
                                className='w-full border outline-none focus:border-primary border-border-color py-13px px-15px text-text-color rounded-md text-sm bg-white'
                                id="social-media">
                                <option value="1" selected>Select Social Media</option>
                                <option value="2">Facebook</option>
                                <option value="3">Twitter</option>
                                <option value="4">Instagram</option>
                                <option value="4">You Tube</option>
                                <option value="4">Pinterest</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className='font-medium text-title-color inline-block text-sm pb-10px'
                                htmlFor="social-media-like">Like</label>
                            <select
                                className='w-full border outline-none focus:border-primary border-border-color py-13px px-15px text-text-color rounded-md text-sm bg-white'
                                id="social-media-like">
                                <option value="1" selected>Select </option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className='font-medium text-title-color inline-block text-sm pb-10px'
                                htmlFor="social-media-comments">Comments</label>
                            <select
                                className='w-full outline-none focus:border-primary border border-border-color py-13px px-15px text-text-color rounded-md text-sm bg-white'
                                id="social-media-comments">
                                <option value="1" selected>Select</option>
                                <option value="2">Highest comment</option>
                                <option value="3">Lowest comment</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className='font-medium text-title-color inline-block text-sm pb-10px'
                                htmlFor="social-media-engagement">Engagement</label>
                            <select
                                className='w-full outline-none focus:border-primary border border-border-color py-13px px-15px text-text-color rounded-md text-sm bg-white'
                                id="social-media-engagement">
                                <option value="1" selected>Select</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div className="posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">

                    <div className="post group p-5 rounded-[5px] bg-gray hover:bg-white hover:shadow-[3px_20px_40px_2px_rgba(174,174,174,0.1)] ease-in-out duration-300">
                        <div className="post-head mb-15px">
                            <div className='flex justify-between mb-10px items-center'>
                                <div className='flex gap-10px items-center'>
                                    <img src={man} alt="man" />

                                    <div>
                                        <div className='flex items-center gap-3 mb-2'>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 3.725C17.325 4.025 16.65 4.25 15.9 4.325C16.65 3.875 17.25 3.125 17.55 2.3C16.8 2.75 16.05 3.05 15.225 3.2C14.55 2.45 13.575 2 12.525 2C10.5 2 8.85 3.65 8.85 5.675C8.85 5.975 8.85 6.275 8.925 6.5C5.775 6.35 3.075 4.85 1.275 2.6C0.9 3.2 0.75 3.8 0.75 4.475C0.75 5.75 1.425 6.875 2.4 7.55C1.8 7.55 1.2 7.4 0.75 7.1C0.75 7.1 0.75 7.1 0.75 7.175C0.75 8.975 2.025 10.475 3.675 10.775C3.375 10.85 3.075 10.925 2.7 10.925C2.475 10.925 2.25 10.925 2.025 10.85C2.475 12.35 3.825 13.4 5.475 13.4C4.2 14.375 2.625 14.975 0.9 14.975C0.6 14.975 0.3 14.975 0 14.9C1.65 15.95 3.6 16.55 5.625 16.55C12.45 16.55 16.125 10.925 16.125 6.05C16.125 5.9 16.125 5.75 16.125 5.6C16.875 5.075 17.475 4.4 18 3.725Z" fill="#1DA1F2" />
                                            </svg>
                                            <h4 className='text-title-color text-sm font-medium'><Link>@Hussain14320623</Link></h4>
                                        </div>
                                        <p className='text-sm text-text-color'>Wed Jun 13th, 2022 5:58pm</p>
                                    </div>
                                </div>
                                <Link>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#929292" />
                                        <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#929292" />
                                        <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#929292" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <p className='text-sm group-hover:text-title-color mb-15px text-text-color'>The Free education dashboard design is a great way to gain more insight into the lives of the students. It allows the teach ers to get a better...</p>
                        </div>

                        <div className="post-image mb-15px">
                            <img src={fbPostImage} alt="fbPostImage" className='w-full' />
                        </div>

                        <div className="post-info">
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Likes</span>
                                <span className='text-sm text-title-color'>520</span>
                            </div>
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Replies</span>
                                <span className='text-sm text-title-color'>250</span>
                            </div>
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Retweets</span>
                                <span className='text-sm text-title-color'>45</span>
                            </div>
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Engagement</span>
                                <span className='text-sm text-title-color'>15</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='text-sm text-title-color'>Engagement Rate</span>
                                <span className='text-sm text-title-color'>20%</span>
                            </div>
                        </div>
                    </div>
                    <div className="post group p-5 rounded-[5px] bg-gray hover:bg-white hover:shadow-[3px_20px_40px_2px_rgba(174,174,174,0.1)] ease-in-out duration-300">
                        <div className="post-head mb-15px">
                            <div className='flex justify-between mb-10px items-center'>
                                <div className='flex gap-10px items-center'>
                                    <img src={man} alt="man" />

                                    <div>
                                        <div className='flex items-center gap-3 mb-2'>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_366_3472)">
                                                    <g clip-path="url(#clip1_366_3472)">
                                                        <path d="M6.31649 18L6.29172 9.81818H3.1499V6.54545H6.29172V4.5C6.29172 1.4634 8.09695 0 10.6974 0C11.9431 0 13.0137 0.0966028 13.3257 0.139786V3.31321L11.5221 3.31406C10.1078 3.31406 9.83397 4.01411 9.83397 5.0414V6.54545H13.9499L12.379 9.81818H9.83397V18H6.31649Z" fill="#1877F2" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_366_3472">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                    <clipPath id="clip1_366_3472">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <h4 className='text-title-color text-sm font-medium'><Link>Hussain Ahmed</Link></h4>
                                        </div>
                                        <p className='text-sm text-text-color'>Wed Jun 13th, 2022 5:58pm</p>
                                    </div>
                                </div>
                                <Link>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#929292" />
                                        <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#929292" />
                                        <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#929292" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <p className='text-sm group-hover:text-title-color mb-15px text-text-color'>The Free education dashboard design is a great way to gain more insight into the lives of the students. It allows the teach ers to get a better...</p>
                        </div>

                        <div className="post-image mb-15px">
                            <img src={postImage2} alt="fbPostImage" className='w-full' />
                        </div>

                        <div className="post-info">
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Likes</span>
                                <span className='text-sm text-title-color'>520</span>
                            </div>
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Comments</span>
                                <span className='text-sm text-title-color'>250</span>
                            </div>
                        </div>
                    </div>
                    <div className="post group p-5 rounded-[5px] bg-gray hover:bg-white hover:shadow-[3px_20px_40px_2px_rgba(174,174,174,0.1)] ease-in-out duration-300">
                        <div className="post-head mb-15px">
                            <div className='flex justify-between mb-10px items-center'>
                                <div className='flex gap-10px items-center'>
                                    <img src={man} alt="man" />

                                    <div>
                                        <div className='flex items-center gap-3 mb-2'>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 3.725C17.325 4.025 16.65 4.25 15.9 4.325C16.65 3.875 17.25 3.125 17.55 2.3C16.8 2.75 16.05 3.05 15.225 3.2C14.55 2.45 13.575 2 12.525 2C10.5 2 8.85 3.65 8.85 5.675C8.85 5.975 8.85 6.275 8.925 6.5C5.775 6.35 3.075 4.85 1.275 2.6C0.9 3.2 0.75 3.8 0.75 4.475C0.75 5.75 1.425 6.875 2.4 7.55C1.8 7.55 1.2 7.4 0.75 7.1C0.75 7.1 0.75 7.1 0.75 7.175C0.75 8.975 2.025 10.475 3.675 10.775C3.375 10.85 3.075 10.925 2.7 10.925C2.475 10.925 2.25 10.925 2.025 10.85C2.475 12.35 3.825 13.4 5.475 13.4C4.2 14.375 2.625 14.975 0.9 14.975C0.6 14.975 0.3 14.975 0 14.9C1.65 15.95 3.6 16.55 5.625 16.55C12.45 16.55 16.125 10.925 16.125 6.05C16.125 5.9 16.125 5.75 16.125 5.6C16.875 5.075 17.475 4.4 18 3.725Z" fill="#1DA1F2" />
                                            </svg>
                                            <h4 className='text-title-color text-sm font-medium'><Link>@Hussain14320623</Link></h4>
                                        </div>
                                        <p className='text-sm text-text-color'>Wed Jun 13th, 2022 5:58pm</p>
                                    </div>
                                </div>
                                <Link>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#929292" />
                                        <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#929292" />
                                        <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#929292" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <p className='text-sm group-hover:text-title-color mb-15px text-text-color'>The Free education dashboard design is a great way to gain more insight into the lives of the students. It allows the teach ers to get a better...</p>
                        </div>

                        <div className="post-image mb-15px">
                            <img src={postImage1} alt="fbPostImage" className='w-full' />
                        </div>

                        <div className="post-info">
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Likes</span>
                                <span className='text-sm text-title-color'>520</span>
                            </div>
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Replies</span>
                                <span className='text-sm text-title-color'>250</span>
                            </div>
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Retweets</span>
                                <span className='text-sm text-title-color'>45</span>
                            </div>
                            <div className="flex justify-between items-center mb-10px">
                                <span className='text-sm text-title-color'>Engagement</span>
                                <span className='text-sm text-title-color'>15</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='text-sm text-title-color'>Engagement Rate</span>
                                <span className='text-sm text-title-color'>20%</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default PublishPosts;