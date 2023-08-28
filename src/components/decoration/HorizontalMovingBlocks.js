import styled, { keyframes } from "styled-components";
import {slideInRight} from "react-animations";
import {useInViewport} from "react-in-viewport";

const FadeInRightAnimation = keyframes`${slideInRight}`;

const Block1 = styled.div`
  animation: 1 1s ${FadeInRightAnimation};
  animation-fill-mode: both;
`;
const Block2 = styled.div`
  animation: 1 1s ${FadeInRightAnimation};
  animation-delay: 0.8s;
  animation-fill-mode: both;
`;
const Block3 = styled.div`
  animation: 1 1s ${FadeInRightAnimation};
  animation-delay: 1.6s;
  animation-fill-mode: both;
`;

const HorizontalMovingBlocks = ({className, viewBlock}) => {
    const {
        inViewport,
        enterCount,
    } = useInViewport(
        viewBlock,
        {},
        { disconnectOnLeave: false },
        {}
    );

    return (
        <div className={`flex flex-col items-end z-[-1] md:h-[557px] md:w-[761px] ${className}`}>
            {(inViewport || enterCount) &&
                <>
                    <Block1>
                        <div
                            className={`min-h-[71px] w-[279px] md:min-h-[149px] md:w-[731px] mb-[26px] md:mb-[55px] bg-pink-200 rounded-l-[15px] md:rounded-l-40 opacity-30`}></div>
                    </Block1>
                    <Block2>
                        <div className={`min-h-[71px] w-[212px] md:min-h-[149px] md:w-[556px] mb-[26px] md:mb-[55px] bg-pink-200 rounded-l-[15px] md:rounded-l-40 opacity-30`}></div>
                    </Block2>
                    <Block3>
                        <div className={`min-h-[71px] w-[160px] md:min-h-[149px] md:w-[419px] bg-pink-200 rounded-l-[15px] md:rounded-l-40 opacity-30`}></div>
                    </Block3>
                </>
            }
            {(!inViewport && !enterCount) &&
                <>
                    <div className={`min-h-[71px] w-[279px] md:min-h-[149px] md:w-[731px] mb-[26px] md:mb-[55px] bg-pink-200 rounded-l-[15px] md:rounded-l-40 opacity-30`}></div>
                    <div className={`min-h-[71px] w-[212px] md:min-h-[149px] md:w-[556px] mb-[26px] md:mb-[55px] bg-pink-200 rounded-l-[15px] md:rounded-l-40 opacity-30`}></div>
                    <div className={`min-h-[71px] w-[160px] md:min-h-[149px] md:w-[419px] bg-pink-200 rounded-l-[15px] md:rounded-l-40 opacity-30`}></div>
                </>
            }
        </div>
    )
}

HorizontalMovingBlocks.defaultProps = {className: "", viewBlock: null}

export default HorizontalMovingBlocks;
