const EquipmentCard = ({img, title, children}) => {
    return (
        <div>
            <img className={`mb-[16px]`} src={img}/>
            <div className={`text-30 mb-[21px] pl-[18px] font-bold`}>{title}</div>
            <div className={`xl:w-[370px] pl-[5px]`}>{children}</div>
        </div>
    )
}

export default EquipmentCard;
