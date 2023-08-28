import Icon from '../Icon';
import RoundedButton from "../ui/RoundedButton";
import Burger from "../ui/Burger";
import IconPng from "../IconPng";
import Button from "../ui/Button";
import Circle from "../decoration/Circle";
import FeedbackForm from "../ui/FeedbackForm";
import CustomModal from "../ui/CustomModal";
import {useState} from "react";
import Menu from "../ui/Menu";
import VerticalMovingBlocks from "../decoration/VerticalMovingBlocks";
import FadeIn from "../animations/FadeIn";
import IconSvg from "../IconSvg";

function Header() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openMenu() {
        setDropdownIsOpen(true);
    }

    function closeMenu() {
        setDropdownIsOpen(false);
    }

    return (
        <header className={`pt-[14px] sm:pt-[39px] lg:pb-[85px] overflow-hidden relative`}>
            <div className="container">
                <div className="flex items-center">
                    <div className={`transition-opacity ${dropdownIsOpen ? 'opacity-0' : ''}`} onClick={openMenu}><Burger className={`ml-[-20px]`}/></div>
                    <div className={`transition-opacity pl-[10px] xs:pl-[30px] ${dropdownIsOpen ? 'opacity-0' : ''}`}>
                        <a href="/"><img className={`w-[190px] xs:w-[222px]`} src="/images/logo.svg"/></a>
                    </div>
                    <div className={`ml-auto`}>
                        <FadeIn
                            delay={2}
                        >
                            <div className={`flex`}>
                                <RoundedButton className={`hidden sm:flex bg-pink-100 hover:bg-pink`}>
                                    <a href={'#'}>
                                        <IconSvg icon={'telegram'} className={`w-[28px] h-[28px]`}/>
                                    </a>
                                </RoundedButton>
                                <RoundedButton className={`hidden sm:flex bg-pink-100 ml-5 hover:bg-pink`}>
                                    <a href={'#'}>
                                        <IconSvg icon={'instagram'} className={`w-[38px] h-[38px]`}/>
                                    </a>
                                </RoundedButton>
                                <div className={`pl-2 xs:pl-6 sm:pl-11 mt-[-19px]`}>
                                    <div className={`hidden sm:block text-right opacity-60 font-normal text-md uppercase mb-[7.5px]`}>Пн – ВС: 9:00 - 20:00</div>
                                    <div className={`mt-[20px] sm:mt-0`}>
                                        <a href={`tel:`}>
                                            <IconSvg icon={'phone'} className={`inline-block mr-[8px] w-[30px] h-[30px]`}/>
                                            <span className={`hidden sm:inline text-[22px] leading-[27px]`}>+7 (961) 243-12-27</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <FadeIn
                    delay={2}
                >
                    <div className={`mb-[38px] mt-[49px] sm:mt-[114px]`}>
                        <h1 className={`xs:text-title text-h3 w-[227px] xs:w-[550px] mb-[38px] font-semibold`}>Студия коррекции фигуры</h1>
                        <p className={`lg:w-[611px]`}>Better Body - студия №1 для идеального тела, для тех, кто любит себя и выбирает современные доступные способы ухода за собой.</p>
                        <p className={`lg:w-[611px]`}>Мы — не просто студия. Точно знаем, что нужно вашему организму, как ему помочь и значительно улучшить самочувствие.</p>
                    </div>
                    <div className={`text-center sm:text-left`}>
                        <Button className={`mb-[48px] md:mb-[137px] max-w-full`} onClick={openModal}>Записаться</Button>
                    </div>
                </FadeIn>
                <div className={`hidden lg:flex items-center`}>
                    <Icon
                        icon={`mouse`}
                        className={`fill-transparent stroke-pink w-[31px] h-[52px]`}
                    />
                    <p className={'text-pink ml-[25px]'}>Листай вниз</p>
                </div>
            </div>

            <VerticalMovingBlocks className={`absolute xs:w-[447px] top-0 left-[30px] xs:left-[128px]`}/>
            <div className={`relative h-[495px] sm:h-[780px] lg:py-0 lg:absolute z-[-1] lg:h-[100%] w-full lg:w-[1228px] top-0 right-0`}>
                <FadeIn
                    delay={3}
                >
                    <Circle className={`
                        w-[385px] 
                        h-[385px] 
                        sm:w-[663px] 
                        sm:h-[663px] 
                        md:w-[763px] 
                        md:h-[763px] 
                        bg-color-pink 
                        top-[44px] 
                        right-[-36px] 
                        sm:right-[13px]
                        sm:top-[94px]
                        lg:top-[213px]
                        lg:right-[202px]
                    `}/>
                </FadeIn>
                <div className={`skew-block`}>
                    <FadeIn
                        delay={2}
                        style={`
                            width: 100%;
                            height: 100%;
                        `}
                    >
                        <div className={'bg-gray-500 w-full h-full'}>
                            <img src={`/images/woman.png`}/>
                        </div>
                    </FadeIn>
                    <FadeIn
                        delay={3}
                    >
                    </FadeIn>
                </div>
                <div className={`skew-block-2`}>
                    <FadeIn
                        delay={2}
                        style={`
                            width: 100%;
                            height: 100%;
                        `}
                    >
                        <div className={'img bg-gray-600 w-full h-full'}>
                            <img src={`/images/woman2.png`}/>
                        </div>
                    </FadeIn>
                    <FadeIn
                        delay={3}
                    >
                    </FadeIn>
                </div>
                <FadeIn
                    delay={3}
                >
                    <Circle className={`
                        w-[301px] 
                        h-[301px] 
                        sm:w-[559px] 
                        sm:h-[559px] 
                        md:w-[659px] 
                        md:h-[659px] 
                        bg-color-white
                        border-white
                        top-[86px] 
                        right-[6px] 
                        sm:top-[145px] 
                        sm:right-[61px]
                        lg:top-[265px] 
                        lg:right-[254px]
                        z-[2]
                    `}/>
                </FadeIn>
            </div>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={`feedback form`}
                className={`max-w-[1133px] pt-[61px] pb-[54px] px-[14px] md:py-[90px] md:pb-[70px] md:px-[82px]`}
            >
                <FeedbackForm
                    className={`feed-back-form-1`}
                    title={`Оставьте заявку и получите скидку 50% на первую процедуру`}
                    buttonText={`Отправить`}
                />
            </CustomModal>
            <CustomModal
                scrollable={false}
                closeIcon={`close-white.svg`}
                closeIconClass={`left-[18px] top-[20px] sm:left-[87px] sm:top-[50px]`}
                color={`bg-transparent`}
                isOpen={dropdownIsOpen}
                onRequestClose={closeMenu}
                contentLabel={`feedback form`}
                className={`w-full h-full py-[8px] sm:py-[35px] sm:pb-[70px] px-[20px] sm:px-[82px]`}
            >
                <Menu onClickLink={closeMenu}/>
            </CustomModal>
        </header>
    )
}

export default Header;
