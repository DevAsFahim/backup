import { useEffect } from 'react';
import closeIcon from '../../assets/image/closeIcon.svg';


const Modal = ({ children, title, btnHidden, modalId, modalWidth }) => {
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
        <div>
            {/* Modal */}
            <div id={modalId} className="modal modal-container modal w-full fixed bg-[#a7a7a780] overflow-x-hidden overflow-y-auto top-0 right-1/2 translate-x-1/2 ease-in-out  z-50 h-full ">

                <div className={`modal-area ${modalWidth} relative m-auto my-5 rounded-xl bg-white`}>

                    <div className="modal-body py-30px">

                        <div
                            className="modal-head flex justify-between items-center px-30px pb-25px border-b border-border-color">
                            <h2 className="text-2xl leading-9 text-title-color font-semibold">{title}</h2>
                            <button className="modal-close"><img src={closeIcon} alt="close icon" /></button>
                        </div>

                        <div className="modal-content px-30px pt-25px">
                            <form>
                                {children}

                                <div className={`modal-btn ${btnHidden && 'hidden'} text-right`}>
                                    <button type="button"
                                        className="modal-close hover:bg-primary hover:text-white bg-gray rounded-[5px] leading-5 px-25px py-[14px] text-sm text-text-color">Close</button>
                                    <button
                                        className="hover:bg-primary hover:text-white bg-gray ml-13px rounded-[5px] leading-5 px-25px py-[14px] text-sm text-text-color">Save</button>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;