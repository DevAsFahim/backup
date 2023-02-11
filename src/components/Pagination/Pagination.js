import React from 'react';
import { Link } from 'react-router-dom';
import eroRight from '../../assets/image/Ero-right.svg';
import eroLeft from '../../assets/image/Ero-left.svg';

const Pagination = () => {
    return (
        <nav className='page flex justify-between pt-5 items-center'>
            <p className='text-title-color text-sm'>Showing 1 to 10 Items</p>
            <ul className='flex justify-end items-center gap-3'>
                <li>
                    <Link className='px-[14px] py-2'><img src={eroLeft} alt="left" /></Link>
                </li>
                <li>
                    <Link className='text-sm text-border-color bg-primary rounded-[5px] px-[14px] py-2'>1</Link>
                </li>
                <li>
                    <Link className='text-sm hover:text-border-color hover:bg-primary rounded-[5px] text-text-color px-[14px] py-2'>2</Link>
                </li>
                <li>
                    <Link className='text-sm hover:text-border-color hover:bg-primary rounded-[5px] text-text-color px-[14px] py-2'>3</Link>
                </li>
                <li>
                    <Link className='text-sm hover:text-border-color hover:bg-primary rounded-[5px] text-text-color px-[14px] py-2'>4</Link>
                </li>
                <li>
                    <Link className='px-[14px] py-2'><img src={eroRight} alt="left" /></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;