import Icon from "../Icon";

const LinkArrow = ({href, children, onClick}) => {
    return (
        <a className={`transition-colors group text-pink flex items-center hover:text-black whitespace-nowrap`} href={href} onClick={onClick}>
            <span className={'border-b-[1px] inline border-pink font-medium group-hover:border-black'}>{children}</span>
            <Icon
                icon={`arrow-1`}
                className={`transition-all scale-[0.7] sm:scale-[1] w-[16px] h-[16px] group-hover:fill-black fill-pink ml-0 sm:ml-[12px]`}
            />
        </a>
    );
}

export default LinkArrow;
