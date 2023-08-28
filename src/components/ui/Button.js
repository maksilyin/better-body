const Button = ({children, className, onClick, disabled}) => {

    return (
        <button
            className={`group rounded-full transition-colors hover:bg-pink w-button md:h-button bg-pink-100 py-[14px] md:py-9 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className={`text-p-md md:text-button uppercase transition-colors text-black group-hover:text-white`}>{children}</span>
        </button>
    );
}
Button.defaultProps = {className: ''}
export default Button;
