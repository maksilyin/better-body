const Title = ({title, children}) => {
    return (
        <>
            <h2 className={`mb-[30px]`}>{title}</h2>
            <div className={`pl-[15px] lg:pl-[38px] xl:pl-[58px]`}>
                {children}
            </div>
        </>
    );
}

export default Title;
