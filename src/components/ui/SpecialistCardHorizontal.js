const SpecialistCardHorizontal = (props) => {
    return (
        <div className={`flex flex-wrap sm:flex-nowrap items-center mb-[60px]`}>
            <div className={`w-full sm:w-[300px] sm:min-w-[300px] h-[370px] mb-[30px] sm:mb-0`}>
                <img className={`rounded-30 object-cover w-full max-w-[269px] h-full mb-[21px] sm:mb-0`} src={props.img}/>
            </div>
            <div className={`sm:pl-[40px]`}>
                <div className={`text-card-title font-bold border-b-[2px] border-black inline-block leading-[22px] mb-[22px]`}>{props.name}</div>
                <div className={`mb-[15px] sm:mb-[36px]`}>
                    <p className={``}>{props.text}</p>
                </div>
                <ul className={`specialist-list mb-[22px] pl-[20px]`}>
                    {props.list.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SpecialistCardHorizontal;
