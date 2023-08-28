const IconSvg = ({icon, className}) => {
    return (
        <img src={`/images/icons/${icon}.svg`} className={className}/>
    );
}

export default IconSvg;
