import Title from "../ui/Title";
import LinkArrow from "../ui/LinkArrow";
import SkewBlock from "../decoration/SkewBlock";
import {useRef, useState} from "react";
import FadeIn from "../animations/FadeIn";
import Viewport from "../Viewport";
import FeedbackForm from "../ui/FeedbackForm";
import CustomModal from "../ui/CustomModal";

const Studio = ({className}) => {
    const section = useRef();
    const [cardClasses, setCardClasses] = useState({
        title: {
            xl: 'xl:translate-y-[16px] xl:translate-x-[-15px] xl:w-[755px]',
            lg: 'lg:order-1 lg:w-1/2 lg:translate-y-[-155px]',
            md: 'md:w-1/2',
        },
        card_1: {
            xl: 'xl:w-auto xl:translate-y-0 xl:absolute xl:top-[91px] xl:left-[755px]',
            lg: 'lg:order-2 lg:top-[106px] lg:left-[770px] lg:w-1/2 lg:translate-y-[135px]',
            md: 'md:order-',
        },
        card_2: {
            xl: 'xl:w-auto xl:translate-y-0 xl:absolute xl:top-[414px] xl:left-[10px]',
            lg: 'lg:order-3 lg:top-[429px] lg:left-[26px] lg:w-1/2 lg:translate-y-[-135px]',
            md: '',
        },
        card_3: {
            xl: 'xl:w-auto xl:translate-y-0 xl:absolute xl:top-[500px] xl:left-[485px]',
            lg: 'lg:order-4 lg:top-[515px] lg:left-[588px] lg:w-1/2 lg:translate-y-[135px] lg:pl-[103px]',
            md: '',
        },
        card_4: {
            xl: 'xl:translate-y-0 xl:w-[575px] xl:absolute xl:bottom-[9px] xl:left-[157px]',
            lg: 'lg:order-5 lg:bottom-[226px] lg:left-[173px] lg:w-1/2 lg:translate-y-[-135px]',
            md: 'md:w-1/2',
        },
        card_5: {
            xl: 'xl:w-auto xl:translate-y-0 xl:absolute xl:top-[285px] xl:right-[-15px]',
            lg: 'lg:order-6 lg:top-[300px] lg:right-0 lg:w-1/2 lg:translate-y-[175px]',
            md: '',
        },
        card_6: {
            xl: 'xl:w-auto xl:translate-y-0 xl:absolute xl:bottom-[-126px] xl:right-[153px]',
            lg: 'lg:order-7 lg:w-1/2 lg:translate-y-[-135px] lg:bottom-[90px] lg:right-[168px]',
            md: '',
        },
});
    const duration = 0.7;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const delay = (num) => {
        return (duration - 0.1) * num;
    }

    return (
        <section id={'studio'} ref={section} className={`pt-[221px] pb-[270px] xs:pb-[360px] xl:h-[1609px] relative ${className}`}>
            <SkewBlock className={`translate-y-[205px]`}/>
            <div className={'container relative h-full'}>
                <div className={`relative h-full flex flex-wrap justify-between gap-y-[55px] lg:gap-y-5 items-center pt-[30px] xs:pt-[170px] pb-[40px] xl:pb-[250px] xl:pt-0 xl:pb-0 xl:block`}>
                    <div className={`order-1 xs:order-1 xs:w-1/2 xs:p-[15px] ${cardClasses.title.md} ${cardClasses.title.lg} ${cardClasses.title.xl}`}>
                        <ViewportBlock block={section} duration={duration} delay={delay(0)}>
                            <Title title={`Студия`}>
                                <p className={`mb-[25px]`}>Мы создали уютное пространство в студии - это особая атмосфера спокойствия, гармонии и эстетики.</p>
                                <p>Индивидуальный подход к каждому клиенту, детальное внимание к вашим персональным проблемам и
                                    противопоказаниям – и 8 из 10 приходящих к нам, становятся нашими постоянными клиентами,
                                    при необходимости, поддерживая свою красоту современными методами аппаратной косметологии.</p>
                            </Title>
                        </ViewportBlock>
                    </div>
                    <div className={`order-2 xs:order-2 w-full xs:w-1/2 xs:p-[15px] ${cardClasses.card_1.lg} ${cardClasses.card_1.xl}`}>
                        <ViewportBlock block={section} duration={duration} delay={delay(1)}>
                            <img className={`ml-auto w-full xs:w-auto`} src={`/images/studio/img_1.png`}/>
                        </ViewportBlock>
                    </div>
                    <div className={`order-4 xs:order-3 w-full xs:w-1/2 xs:p-[15px] ${cardClasses.card_2.lg} ${cardClasses.card_2.xl}`}>
                        <ViewportBlock block={section} duration={duration} delay={delay(2)}>
                            <img className={`w-full xs:w-auto`} src={`/images/studio/img_2.png`}/>
                        </ViewportBlock>
                    </div>
                    <div className={`order-3 xs:order-4 xs:w-1/2 xs:p-[15px] ${cardClasses.card_3.md} ${cardClasses.card_3.lg} ${cardClasses.card_3.xl}`}>
                        <ViewportBlock block={section} duration={duration} delay={delay(0)}>
                            <ul className={`list`}>
                                <li>Единственный в городе аппарат rsleek pro</li>
                                <li>Большой опыт сотрудников</li>
                                <li>Уютная, чистая и красивая студия</li>
                                <li>Студия в центре города</li>
                                <li>Сотрудники с мед. образованием</li>
                            </ul>
                        </ViewportBlock>
                    </div>
                    <div className={`order-7 xs:order-5 xs:w-1/2 xs:p-[15px] ${cardClasses.card_4.md} ${cardClasses.card_4.lg} ${cardClasses.card_4.xl}`}>
                        <ViewportBlock block={section} duration={duration} delay={delay(0)}>
                            <p className={`mb-[11px]`}>Для решения проблем несовершенств фигуры и лица мы используем только современное оборудование,
                                которое помогает проводить процедуры быстро и точечно, что способствует экономии ваших средств,
                                эффективному решению проблем, скорейшему восстановлению после процедур.</p>
                            <p className={``}>
                                <LinkArrow onClick={(e)=>{
                                    e.preventDefault();
                                    openModal();
                                }} href={`#`}>Запишитесь на консультацию</LinkArrow>
                            </p>
                        </ViewportBlock>
                    </div>
                    <div className={`order-6 w-full hidden xs:block xs:order-6 xs:w-1/2 xs:p-[15px] ${cardClasses.card_5.lg} ${cardClasses.card_5.xl}`}>
                        <ViewportBlock block={section} duration={duration} delay={delay(3)}>
                            <img className={`ml-auto w-full xs:w-auto`} src={`/images/studio/img_4.png`}/>
                        </ViewportBlock>
                    </div>
                    <div className={`order-5 w-full xs:order-7 xs:w-1/2 xs:p-[15px] ${cardClasses.card_6.lg} ${cardClasses.card_6.xl}`}>
                        <ViewportBlock block={section} duration={duration} delay={delay(4)}>
                            <img src={`/images/studio/img_3.png`}/>
                        </ViewportBlock>
                    </div>
                </div>
            </div>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={`feedback form`}
                className={`max-w-[1133px] pt-[61px] pb-[54px] px-[14px] md:py-[90px] md:pb-[70px] md:px-[82px]`}
                zoom={true}
            >
                <FeedbackForm
                    className={`feed-back-form-1`}
                    title={`Оставьте заявку и получите скидку 50% на первую процедуру`}
                    buttonText={`Отправить`}
                />
            </CustomModal>
        </section>
    )
}

const ViewportBlock = ({children, block, duration, delay}) => {
    return (
        <Viewport block={block}>
            <FadeIn
                duration={duration}
                delay={delay}
            >
                {children}
            </FadeIn>
        </Viewport>
    )
}

Studio.defaultProps = {className: ""};

export default Studio;
