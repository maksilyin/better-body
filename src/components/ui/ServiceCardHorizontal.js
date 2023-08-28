import Price from "./Price";

const ServiceCardHorizontal = (props) => {
    const {text, img, name, lists, list, classImage} = props;
    return (
        <div className={`flex flex-wrap sm:flex-nowrap items-center mb-[50px]`}>
            <div className={`w-[300px] sm:min-w-[300px] h-[370px] mb-[30px] sm:mb-0`}>
                <img className={`rounded-30 object-cover w-full h-full mb-[16px] sm:mb-0 ${classImage}`} src={img} alt={name}/>
            </div>
            <div className={`sm:pl-[40px]`}>
                <div className={`text-card-title font-bold border-b-[2px] border-black inline-block leading-[22px] mb-[22px]`}>{name}</div>
                <div className={`mb-[15px] sm:mb-[36px]`}>
                    <p className={``}>{text}</p>
                </div>
                {lists &&
                    <Lists lists={lists}/>
                }
                {list &&
                    <PriceList key={name} list={list} />
                }
            </div>
        </div>
    )
}

const Lists = ({lists}) => {
    return (
        <>
            {lists.map(list => (
                <>
                    <p className={'sm:ml-[-23px] mb-[15px]'}>{list.name}</p>
                    <PriceList list={list.list} />
                </>
            ))}
        </>
    )
}

const PriceList = ({list}) => {
    return (
        <ul className={''}>
            {list.map(item => (
                <li
                    className={`mb-[15px]`}
                    key={item.price + item.name}>
                    <p>— <Price>{item.price}</Price>
                        {item.name &&
                            <span className={`text-pink-300 ml-1`}>({item.name})</span>
                        }
                    </p>
                </li>
            ))}
        </ul>
    )
}

ServiceCardHorizontal.defaultProps = {classImage: ""};

export default ServiceCardHorizontal;
