const SkewBlock = ({className}) => {
    className = className !== undefined ? className : '';
    return (
        <div
            className={`skew-y-[9.3deg] absolute top-0 left-0 w-full h-[80.5%] bg-pink-200 opacity-30 z-[-1] ${className}`}
        ></div>
    )
}

export default SkewBlock;
