import Profile from '../Profile/Profile';
import add from '../../assets/image/add.svg';
import edit from '../../assets/image/Icon-Edit-UIHUT.svg';
import deleteIcon from '../../assets/image/Icon-delete-UIHUT.svg';
import './UTMManagement.css'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';

const UTMManagement = () => {
    return (
        <section className='flex-1'>
            <Profile></Profile>

            <div className="UTM pr-5 pl-30px pt-5 pb-30px">
                <div className="heading flex justify-between items-center pb-9">
                    <div className="title font-semibold text-2xl leading-9 text-title-color">UTM Management</div>
                    <button area_id="add-utm-modal" className='modal-open flex justify-center bg-primary rounded-[5px] px-15px py-[14px] text-white'> <img src={add} alt="add" /> <span className='leading-5 ml-10px text-sm'>Add New</span></button>

                </div>

                <Modal title='Add New UTM' btnHidden={false} modalId="add-utm-modal" modalWidth='w-[813px]'>

                    <>
                        <div className='mb-25px'>
                            <label className='font-medium text-title-color inline-block pb-10px' htmlFor="UTMName">Name</label>
                            <input
                                className='w-full border outline-none border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                id='UTMName' type="text" placeholder='Name' />
                        </div>
                        <div className='mb-25px'>
                            <label className='font-medium text-title-color inline-block pb-10px'
                                htmlFor="UTMDescription">Description</label>
                            <textarea
                                className='w-full h-[110px] outline-none border border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                id="UTMDescription" placeholder='Description'></textarea>
                        </div>
                        <div className='mb-25px'>
                            <label className='font-medium text-title-color inline-block pb-10px' htmlFor="UTMGroup">Group</label>
                            <input
                                className='w-full border outline-none border-border-color py-[14px] px-15px text-text-color rounded-md text-sm leading-5'
                                id='UTMGroup' type="text" placeholder='Group Name' />
                        </div>
                    </>

                </Modal>

                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-border-color'>
                            <th className='text-left leading-22px text-title-color font-medium pb-25px'>No</th>
                            <th className='text-left leading-22px text-title-color font-medium pb-25px'>Name</th>
                            <th className='text-left leading-22px text-title-color font-medium pb-25px'>Description</th>
                            <th className='text-left leading-22px text-title-color font-medium pb-25px w-[216px]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                            <td className='py-15px font-medium text-sm'>01</td>
                            <td className='py-15px font-medium text-sm'>uihut.com (Group)</td>
                            <td className='py-15px font-medium text-sm'>Description</td>
                            <td className='py-15px font-medium text-sm flex'>
                                <Link to='/utmdetails' className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px hover:text-white text-text-color'>Details</Link>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                            </td>
                        </tr>
                        <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                            <td className='py-15px font-medium text-sm'>01</td>
                            <td className='py-15px font-medium text-sm'>uihut.com (Group)</td>
                            <td className='py-15px font-medium text-sm'>Description</td>
                            <td className='py-15px font-medium text-sm flex'>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px hover:text-white text-text-color'>Details</button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                            </td>
                        </tr>
                        <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                            <td className='py-15px font-medium text-sm'>01</td>
                            <td className='py-15px font-medium text-sm'>uihut.com (Group)</td>
                            <td className='py-15px font-medium text-sm'>Description</td>
                            <td className='py-15px font-medium text-sm flex'>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px hover:text-white text-text-color'>Details</button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                            </td>
                        </tr>
                        <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                            <td className='py-15px font-medium text-sm'>01</td>
                            <td className='py-15px font-medium text-sm'>uihut.com (Group)</td>
                            <td className='py-15px font-medium text-sm'>Description</td>
                            <td className='py-15px font-medium text-sm flex'>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px hover:text-white text-text-color'>Details</button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                            </td>
                        </tr>
                        <tr className='border-b text-text-color hover:text-title-color border-border-color'>
                            <td className='py-15px font-medium text-sm'>01</td>
                            <td className='py-15px font-medium text-sm'>uihut.com (Group)</td>
                            <td className='py-15px font-medium text-sm'>Description</td>
                            <td className='py-15px font-medium text-sm flex'>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px hover:text-white text-text-color'>Details</button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={edit} alt="icon" /></button>
                                <button className='bg-gray hover:bg-primary text-sm font-medium rounded-[5px] px-15px py-10px ml-15px text-white group'><img className='group-hover:brightness-0 group-hover:invert' src={deleteIcon} alt="icon" /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Pagination></Pagination>
            </div>
        </section>
    );
};

export default UTMManagement;