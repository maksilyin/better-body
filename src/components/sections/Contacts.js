import RoundedButton from "../ui/RoundedButton";
import {useState} from "react";
import ServiceCardHorizontal from "../ui/ServiceCardHorizontal";
import FeedbackForm from "../ui/FeedbackForm";
import CustomModal from "../ui/CustomModal";
import Circle from "../decoration/Circle";

const Contacts = () => {
    const email = 'Betterbody@mail.ru';
    const phone = '+7 (961) 243-12-27';
    const address = 'г.Иваново, ул. Жарова д.3 оф. 1003 студия Better body';

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className={`relative`}>
            <div className={`container`}>
                <h2 className={`mb-[57px] md:mb-[87px]`}>Контакты</h2>
                <div className={`flex flex-wrap md:px-[100px]`}>
                    <div className={`order-2 md:order-1 w-[315px] pt-[55px] md:pt-[45px]`}>
                        <div className={`mb-[25px]`}>
                            <div className={`text-black uppercase opacity-40 text-p-sm md:text-sm-title mb-[4px]`}>E-mail:</div>
                            <p className={`transition-colors hover:text-pink text-pink-300 text-p-md md:text-button tracking-[0.04em] inline border-b-[1px] border-pink-300 font-semibold`}>
                                <a href={`mailto:${email}`}>{email}</a>
                            </p>
                        </div>

                        <div className={`mb-[25px]`}>
                            <div className={`text-black uppercase opacity-40 text-p-sm md:text-sm-title mb-[3px]`}>Позвоните нам:</div>
                            <p className={`transition-colors hover:text-pink text-pink-300 text-p-md md:text-button tracking-[0.04em] inline border-b-[1px] border-pink-300 font-semibold`}>
                                <a href={`tel:${phone}`}>{phone}</a>
                            </p>
                        </div>

                        <div className={`mb-[56px]`}>
                            <div className={`text-black uppercase opacity-40 text-p-sm md:text-sm-title mb-[4px]`}>Локация:</div>
                            <p className={`text-pink-300 text-p-md md:text-button tracking-[0.04em] inline border-b-[1px] border-pink-300 font-semibold`}>{address}</p>
                        </div>

                        <div className={`flex`}>
                            <RoundedButton className={`w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] bg-pink-100 hover:bg-pink`}>
                                <a href={'#'}>
                                    <img className={`w-[22px] h-[22px sm:w-[28px] sm:h-[28px]`} src={'/images/icons/telegram.svg'}/>
                                </a>
                            </RoundedButton>
                            <RoundedButton className={`w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] bg-pink-100 ml-5 hover:bg-pink`}>
                                <a href={'#'}>
                                    <img className={`w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]`} src={'/images/icons/instagram.svg'}/>
                                </a>
                            </RoundedButton>
                        </div>
                    </div>
                    <div className={`order-1 md:order-2 ml-auto h-[197px] md:h-[613px] w-[900px] rounded-30 overflow-hidden`}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A579058ddbb9d8fa1707fc4723e14667d29ebcaee45c7576592de505aa508db49&amp;source=constructor"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                        >
                        </iframe>
                    </div>
                </div>
                <div className={`w-full pb-[15px] md:pb-[48px] mt-[55px] md:mt-[33px] opacity-40 uppercase text-p-sm md:text-md-2 font-bold md:px-[100px]`}>
                    <div className={`mb-[12px]`}>© Better body все права защищены</div>
                    <div className={`mb-[48px]`}>Разработано в <a href='https://zeexa.io' target='_blank'>Zeexa</a></div>
                    <div><span className={`cursor-pointer`} onClick={openModal} href={`#`}>Политика конфиденциальности</span></div>
                </div>
            </div>
            <Circle className={`
                circle-big-3
                circle-pink
                bottom-[-60px]
                left-[-142px]
                lg:bottom-[-186px] 
                lg:left-[17px]
                z-[-1]
            `}/>
            <Circle className={`
                circle-big-3
                circle-pink
                top-[-15px]
                right-[-110px]
                lg:top-[-39px] 
                lg:right-[-176px]
                z-[-1]
            `}/>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={`feedback form`}
                className={`px-[15px] py-[60px] md:px-[60px] md:py-[60px] max-w-[1585px]`}
            >
                <h3 className={`text-center text-30 font-bold mb-[36px]`}>Политика конфиденциальности</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </CustomModal>
        </section>
    )
}

export default Contacts;
