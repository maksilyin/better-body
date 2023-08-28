import styled, { keyframes } from "styled-components";
import {slideInDown} from "react-animations";

const FadeInDownAnimation = keyframes`${slideInDown}`;

const Block1 = styled.div`
  animation: 1 1s ${FadeInDownAnimation};
  animation-fill-mode: both;
`;
const Block2 = styled.div`
  animation: 1 1s ${FadeInDownAnimation};
  animation-delay: 0.8s;
  animation-fill-mode: both;
`;
const Block3 = styled.div`
  animation: 1 1s ${FadeInDownAnimation};
  animation-delay: 1.6s;
  animation-fill-mode: both;
`;

const VerticalMovingBlocks = ({className}) => {
    return (
        <div className={`flex z-[-1] h-[761px] w-[300px] ${className}`}>
            <Block1>
                <div className={`h-[427px] min-w-[71px] lg:h-[100%] lg:min-w-[149px] bg-pink-200 rounded-b-[15px] md:rounded-b-40 opacity-30`}></div>
            </Block1>
            <Block2>
                <div className={`ml-[26px] lg:ml-[55px] h-[325px] min-w-[71px] lg:h-[556px] lg:min-w-[149px] bg-pink-200 rounded-b-[15px] md:rounded-b-40 opacity-30`}></div>
            </Block2>
            <Block3>
                <div className={`ml-[26px] lg:ml-[55px] h-[245px] min-w-[71px] lg:h-[419.85px] lg:min-w-[149px] bg-pink-200 rounded-b-[15px] md:rounded-b-40 opacity-30`}></div>
            </Block3>
        </div>
    );
}

VerticalMovingBlocks.defaultProps = {className: ""};

export default VerticalMovingBlocks;
