import Modal from 'react-modal';
import {useEffect, useRef, useState} from "react";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(34, 34, 34, 0.9)'
    }
};

Modal.setAppElement('#root');

const CustomModal = ({children, contentLabel, isOpen, onRequestClose, className, closeIcon, closeIconClass, color, scrollable, zoom}) => {

    const content = useRef();
    const modal = useRef();

    useEffect(() => {
        if (!scrollable) {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
        }
    }, [isOpen]);

    const onAfterOpen = () => {
        if (!zoom || window.screen.width < 769) {
            return;
        }
        const computedStyle = getComputedStyle(modal.current.portal.content);
        const paddingY = parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)

        const modalHeight = modal.current.portal.content.clientHeight - paddingY;
        const contentHeight = content.current.offsetHeight;

        if (modalHeight < contentHeight) {
            content.current.style.zoom = modalHeight / contentHeight;
        }
    }

    return (
        <Modal
            ref={modal}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel={contentLabel}
            closeTimeoutMS={200}
            onAfterOpen={onAfterOpen}
            className={`relative z-[1000] overflow-y-auto translate-x-[-50%] translate-y-[-50%] fixed top-[50%] left-[50%] rounded-[20px] sm:rounded-30 ${color} ${className}`}
        >
                <span
                    className={`absolute cursor-pointer ${closeIconClass}`}
                    onClick={onRequestClose}
                >
                    <img src={`/images/icons/${closeIcon}`}/>
                </span>
            <div ref={content} className={'modal-content'}>
                {children}
            </div>
        </Modal>
    );
}

CustomModal.defaultProps = {
    className: "",
    closeIcon: "close.svg",
    closeIconClass: "w-[17px] h-[17px] md:w-[24px] md:h-[24px] top-[24px] right-[19px] md:top-[48px] md:right-[64px]",
    color: "bg-white",
    scrollable: false,
    zoom: false,
}

export default CustomModal;
