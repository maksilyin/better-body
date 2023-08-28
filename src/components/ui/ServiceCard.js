import Price from "./Price";
import LinkArrow from "./LinkArrow";
import { useInViewport } from 'react-in-viewport';
import FadeIn from "../animations/FadeIn";
import Services from "../sections/Services";

const ServiceCard = (props) => {
    const {viewBlock, img, name, num, lists, list, classImage, onClick} = props;
    const {
        inViewport,
        enterCount,
    } = useInViewport(
        viewBlock,
        {},
        { disconnectOnLeave: false },
        {}
    );

    const PriceBlock = () => {
        return (
            <>
                <div
                    className={`text-p sm:text-card-title font-bold border-b-[2px] border-black inline-block leading-[22px] mb-[22px]`}>{name}</div>
                {lists &&
                    <Lists lists={lists}/>
                }
                {list &&
                    <PriceList key={name} list={list}/>
                }
                <p className={`text-p-md sm:text-p mt-[19px]`}>
                    <LinkArrow href={`#`} onClick={onClick}>Запишитесь на процедуры</LinkArrow>
                </p>
            </>
        )
    }

    const ImgBlock = () => {
        return (
            <>
                <img className={`rounded-30 absolute top-0 object-cover w-full h-full mb-[16px] sm:ml-[-12px] ${classImage}`} src={img}
                     alt={name}/>
                <p className={`absolute bottom-0 left-[-30px] md:left-[-45px] text-pink-300 text-md sm:text-30`}>{num}</p>
            </>
        )
    }

    return (
        <div className={`w-full`}>
            <div className={`relative sm:w-[362px] py-[60%] lg:py-0 lg:h-[475px] md:py-[40%] mb-[20px]`}>
                {(inViewport || enterCount) &&
                    <FadeIn
                        duration={1}
                        style={`
                            width: 100%;
                            height: 100%;
                        `}
                    >
                        <ImgBlock/>
                    </FadeIn>
                }
                {(!inViewport && !enterCount) &&
                    <>
                        <ImgBlock/>
                    </>
                }
            </div>
            {(inViewport || enterCount) &&
                <FadeIn
                    duration={1}
                    delay={1}
                >
                    <PriceBlock/>
                </FadeIn>
            }
            {(!inViewport && !enterCount) &&
                <PriceBlock/>
            }
        </div>
    );
}

const Lists = ({lists}) => {
    return (
        <>
            {lists.map(list => (
                <>
                    <p key={list.name} className={'text-p-md sm:text-p sm:ml-[-23px] mb-[15px]'}>{list.name}</p>
                    <PriceList list={list.list} />
                </>
            ))}
        </>
    )
}

const PriceList = ({list}) => {
    return (
        <ul className={'ml-[-15px] sm:ml-[-23px]'}>
            {list.map(item => (
                <li
                    className={`mb-[15px]`}
                    key={item.price + item.name}>
                    <p className={'text-p-md sm:text-p'}>— <Price>{item.price}</Price>
                        {item.name &&
                            <span className={`text-pink-300 ml-1`}>({item.name})</span>
                        }
                    </p>
                </li>
            ))}
        </ul>
    )
}

ServiceCard.defaultProps = {classImage: ""};

export default ServiceCard;
