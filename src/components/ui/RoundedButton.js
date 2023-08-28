const RoundedButton = ({children, className}) => {
   if (className === undefined) {
       className = '';
   }
    return (
        <div className={`group w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-full flex justify-center items-center transition-colors cursor-pointer ${className}`}>
            {children}
        </div>
    );
}

export default RoundedButton;
