import FeedbackForm from "../ui/FeedbackForm";
import Circle from "../decoration/Circle";

const Feedback = ({className}) => {
    return (
        <section id={'feedback'} className={`relative ${className}`}>
            <div className={`container`}>
                <h2 className={`md:w-[700px] xl:w-[1261px]`}>Оставьте заявку и получите скидку 50% на первую процедуру</h2>
                <div className={`flex flex-wrap md:flex-nowrap justify-center mt-[30px] md:mt-[56px]`}>
                    <div className={`w-full lg:w-[560px] mb-[71px] lg:mb-0`}>
                        <FeedbackForm className={'main'}/>
                    </div>
                    <div className={`md:ml-auto lg:mr-[140px] lg:mt-[-187px]`}>
                        <img className={`rounded-30`} src={`/images/feedback.png`}/>
                    </div>
                </div>
            </div>
            <Circle className={`
                circle-big-2
                circle-pink
                top-[145px]
                right-[-141px]
                lg:top-[unset]
                lg:right-[unset]
                lg:bottom-[-86px] 
                lg:left-[335px]
                z-[-1]
            `}/>
        </section>
    );
}

Feedback.defaultProps = {className: ""};

export default Feedback;
