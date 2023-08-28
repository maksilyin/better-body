import LinkArrow from "./LinkArrow";

const SpecialistCard = (props) => {
    return (
        <div className={`w-full px-[5px] xs:px-0 w-full xs:w-[calc(100%_/_2_-_80px)] lg:w-[calc(100%_/_3_-_80px)]`}>
            <div className={`relative py-[66.5%] mb-[21px]`}>
                <img className={`rounded-30 absolute top-0 w-full object-cover h-full`} src={props.img}/>
            </div>
            <div className={`pl-[22px]`}>
                <div className={`text-p leading-[21px] sm:text-card-title font-bold border-b-[2px] border-black inline-block md:leading-[22px] mb-[22px]`}>
                    {props.name}
                </div>
                <ul className={`specialist-list mb-[22px]`}>
                    {props.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <p className={`text-p-md sm:text-p mt-[19px]`}>
                    <LinkArrow onClick={props.onClick} href={`#`}>Запишитесь на консультацию</LinkArrow>
                </p>
            </div>
        </div>
    );
}

export default SpecialistCard;
