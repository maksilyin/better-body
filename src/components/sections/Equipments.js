import EquipmentCard from "../ui/EquipmentCard";
import OwlCarousel from 'react-owl-carousel3';
import {useRef, useState} from "react";
import HorizontalMovingBlocks from "../decoration/HorizontalMovingBlocks";

const Equipments = ({className}) => {
    className = className !== undefined ? className : '';
    const section = useRef();
    const [width, setWidth] = useState(window.screen.width);
    const [equipments, setEquipments] = useState([
        {
            title: 'R-Sleek PRO',
            img: '/images/equip_1.png',
            className: 'w-full lg:w-[calc(100%_/_3_-_40px)] xl:w-auto',
            text: 'R-Sleek - это современная технология избавления от целлюлита, лимфатического и венозного\n' +
                'застоя, которая по ряду показателей превосходит традиционные методы аппаратного воздействия.\n' +
                'В отличие от вакуумно-роликового массажа, вместо вакуума применяется компрессия, а вместо\n' +
                'растяжения – ротационная микровибрация.',
            text_2: 'Единственный в городе аппарат rsleek pro'
        },
        {
            title: 'LPG-массаж',
            img: '/images/equip_2.png',
            className: 'lg:mt-[-118px] lg:ml-[-4px] w-full lg:w-[calc(100%_/_3_-_40px)] xl:w-auto',
            text: 'LPG-массаж (вакуумно-роликовый, или эндермологический) – аппаратная методика, применяемая для ' +
                'коррекции лица и тела. В ее основе – стимуляция процессов метаболизма в подкожных жировых клетках.',
        },
        {
            title: 'Пресотерапия',
            img: '/images/equip_3.png',
            className: 'lg:translate-y-[182px] xl:translate-x-[-39px] w-full lg:w-[calc(100%_/_3_-_40px)] xl:w-auto',
            text: 'Прессотерапия – это вид аппаратного массажа, суть которого заключается в механическом воздействии ' +
                'на тело сжатым воздухом. Терапевтический эффект от процедуры основан на активизации тока лимфы по ' +
                'сосудам и ускорении выхода жидкости из межклеточного.',
        },
    ]);
    const mobileWidth = 768;

    useState(() => {
        window.addEventListener('resize', () => {
            setWidth(window.screen.width);
        }, true);
    }, [])

    return (
        <section id={'equipments'} ref={section} className={`relative pt-[40px] mt-[-40px] overflow-hidden ${className}`}>
            <div className={`container`}>
                <h2 className="mb-[55px] md:mb-[118px] mt-[50px]">Аппараты</h2>
                {width > mobileWidth &&
                    <div className={`relative flex flex-wrap lg:flex-nowrap gap-y-10 justify-between xl:pl-[82px]`}>
                        {equipments.map(equipment => (
                            <div key={equipment.title} className={equipment.className}>
                                <EquipmentCard
                                    img={equipment.img}
                                    title={equipment.title}
                                >
                                    <p className={equipment.text_2 ? `mb-[27px]` : ``}>{equipment.text}</p>
                                    {equipment.text_2 &&
                                        <p className={`text-pink`}>{equipment.text_2}</p>
                                    }
                                </EquipmentCard>
                            </div>
                        ))}
                    </div>
                }
                {width <= mobileWidth &&
                    <OwlCarousel
                        items={1}
                        margin={15}
                    >
                        {equipments.map(equipment => (
                            <div>
                                <EquipmentCard
                                    img={equipment.img}
                                    title={equipment.title}
                                >
                                    <p className={equipment.text_2 ? `mb-[27px]` : ``}>{equipment.text}</p>
                                    {equipment.text_2 &&
                                        <p className={`text-pink`}>{equipment.text_2}</p>
                                    }
                                </EquipmentCard>
                            </div>
                        ))}
                    </OwlCarousel>
                }
                </div>
            <HorizontalMovingBlocks
                viewBlock={section}
                className={`absolute top-[20px] md:top-0 right-[0]`}
            />
        </section>
    )
}

export default Equipments;
