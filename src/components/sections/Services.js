import Title from "../ui/Title";
import ServiceCard from "../ui/ServiceCard";
import {useRef, useState} from "react";
import FeedbackForm from "../ui/FeedbackForm";
import CustomModal from "../ui/CustomModal";
import ServiceCardHorizontal from "../ui/ServiceCardHorizontal";
import Circle from "../decoration/Circle";
import FadeIn from "../animations/FadeIn";
import Viewport from "../Viewport";

const Services = ({className}) => {
    const section = useRef();
    const [services, setServices] = useState([
        {
            img: '/images/lpg.jpg',
            name: 'LPG',
            text: 'LPG-массаж (вакуумно-роликовый, или эндермологический) – аппаратная методика, применяемая для ' +
                'коррекции лица и тела. В ее основе – стимуляция процессов метаболизма в подкожных жировых клетках. ' +
                'В результате улучшается микроциркуляция, становится сильнее лимфоток, размягчается даже застарелая, ' +
                'плотная жировая ткань',
            list: [
                {
                    price: 1500,
                    name: 'разовый'
                },
                {
                    price: 6750,
                    name: '5 процедур'
                },
                {
                    price: 12750,
                    name: '10 процедур'
                },
                {
                    price: 16245,
                    name: '5+5'
                }
            ]
        },
        {
            img: '/images/rsleek.jpg',
            name: 'Rsleek',
            list: [
                {
                    price: 1150,
                    name: 'пробный сеанс'
                },
                {
                    price: 2300,
                    name: 'разовый'
                },
                {
                    price: 10350,
                    name: '5 процедур'
                },
                {
                    price: 19550,
                    name: '10 процедур'
                }
            ]
        },
        {
            img: '/images/presoterapia.jpg',
            name: 'Пресотерапия',
            classImage: 'object-left',
            list: [
                {
                    price: 350,
                    name: '15 минут'
                },
                {
                    price: 550,
                    name: '30 минут'
                },
            ]
        },
        {
            img: '/images/r-massag.jpeg',
            name: 'Ручной массаж',
            subtitle: 'Антицеллюлитный',
            lists: [
                {
                    name: 'Антицеллюлитный',
                    list: [
                        {
                            price: 1700,
                            name: '60 минут'
                        },
                        {
                            price: 8000,
                            name: '5 процедур'
                        },
                        {
                            price: 15300,
                            name: '10 процедур'
                        },
                    ]
                },
                {
                    name: 'Лимфодренажный',
                    list: [
                        {
                            price: 1500,
                            name: '60 минут'
                        },
                        {
                            price: 7100,
                            name: '5 процедур'
                        },
                        {
                            price: 13500,
                            name: '10 процедур'
                        },
                    ]
                },
            ]
        },
        {
            img: '/images/obertivanie.jpg',
            name: 'Обёртывания',
            lists: [
                {
                    name: 'Бандажное/шоколад/водоросли',
                    list: [
                        {
                            price: 2500,
                            name: ''
                        },
                    ]
                }
            ]
        },
    ]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [serviceCard, setServiceCard] = useState({});

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const setServiceCardModal = (card) => {
        setServiceCard(card);
        openModal()
    }

    const TitleBlock = () => {
        return (
            <Title title={`Услуги`}>
                <p>В нашей студии вы найдете услуги на любой вкус. Все виды массажа приведут Ваше тело в тонус и повысят уровень здоровья.</p>
            </Title>
        )
    }

    return (
        <section id={'services'} ref={section} className={`relative z-[1] overflow-hidden lg:overflow-visible ${className}`}>
            <div className={'container'}>
                <div className={'relative flex flex-wrap justify-center xs:justify-between gap-y-[74px]'}>
                    <div className={`order-1 w-full md:w-[660px] xl:translate-y-[61px]`}>
                        <Viewport block={section}>
                            <FadeIn
                                delay={1}
                            >
                                <TitleBlock/>
                            </FadeIn>
                        </Viewport>
                    </div>
                    <div
                        className={`service-item order-2 lg:translate-y-0 xl:translate-x-[-55px]`}
                    >
                        <ServiceCard
                            {...services[0]}
                            num={1}
                            onClick={(e)=>{
                                e.preventDefault()
                                setServiceCardModal(services[0])
                            }}
                            viewBlock={section}
                        />
                    </div>
                    <div
                        className={`service-item order-3 xl:order-4 lg:translate-y-[-285px] xl:translate-y-[-399px] `}
                    >
                        <ServiceCard
                            {...services[1]}
                            num={2}
                            onClick={(e)=>{
                                e.preventDefault()
                                setServiceCardModal(services[1])
                            }}
                            viewBlock={section}
                        />
                    </div>
                    <div
                        className={`service-item order-4 xl:order-3 lg:translate-y-[180px] lg:translate-x-[-50px] xl:translate-x-[-23px] xl:translate-y-[336px]`}
                    >
                        <ServiceCard
                            {...services[2]}
                            num={3}
                            onClick={(e)=>{
                                e.preventDefault()
                                setServiceCardModal(services[2])
                            }}
                            viewBlock={section}
                        />
                    </div>
                    <div
                        className={`service-item order-5 lg:translate-y-[-180px] xl:translate-x-[-142px] xl:translate-y-[61px]`}
                    >
                        <ServiceCard
                            {...services[3]}
                            num={4}
                            onClick={(e)=>{
                                e.preventDefault()
                                setServiceCardModal(services[3])
                            }}
                            viewBlock={section}
                        />
                    </div>
                    <div
                        className={`service-item order-6 lg:translate-y-[285px] xl:translate-x-[-223px] xl:translate-y-[284px]`}
                    >
                        <ServiceCard
                            {...services[4]}
                            num={5}
                            onClick={(e)=>{
                                e.preventDefault()
                                setServiceCardModal(services[4])
                            }}
                            viewBlock={section}
                        />
                    </div>
                </div>
            </div>
            <Viewport block={section}>
                <FadeIn
                    delay={0}
                >
                    <Circle className={`
                        circle-big 
                        circle-pink
                        top-[142px] 
                        right-[-88px]
                        lg:right-[unset]
                        lg:top-[142px] 
                        lg:left-[157px]
                        z-[-1]
                    `}/>
                </FadeIn>
            </Viewport>
            <Viewport block={section}>
                <FadeIn
                    delay={0}
                >
                    <Circle className={`
                        circle-big
                        circle-pink
                        right-[2px]
                        top-[1349px]
                        lg:top-[unset]
                        lg:bottom-[224px] 
                        lg:right-[29px]
                        z-[-1]
                    `}/>
                </FadeIn>
            </Viewport>
            <Viewport block={section}>
                <FadeIn
                    delay={0}
                >
                    <Circle className={`
                        circle-big 
                        circle-pink
                        bottom-[276px] 
                        right-[-88px]
                        lg:right-[unset]
                        lg:bottom-[-220px] 
                        lg:left-[-119px]
                        z-[-1]
                    `}/>
                </FadeIn>
            </Viewport>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={`feedback form`}
                className={`px-[18px] py-[55px] sm:px-[60px] sm:pt-[60px] sm:pb-[45px] sm:max-w-[1585px]`}
                zoom={true}
            >
                <ServiceCardHorizontal {...serviceCard}/>
                <FeedbackForm
                    className={`feed-back-form-2`}
                    title={`Оставьте заявку на бесплатную консультацию`}
                    buttonText={`Отправить`}
                    service={serviceCard.name}
                />
            </CustomModal>
        </section>
    )
}

Services.defaultProps = {className: ""};

export default Services
