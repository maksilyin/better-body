import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations";
import {useEffect, useState} from "react";


const FadeIn = ({children, delay, duration, iteration, timing, style, viewBlock}) => {
    const [start, setStart] =  useState(false)
    const fadeInAnimation = keyframes`${fadeIn}`;

    useEffect(() => {
        const timer = (delay + duration) * 1000;

        setTimeout(()=>{
            setStart(true)
        }, timer)
    }, []);

    const FadeInBlock = styled.div`
      animation: ${iteration} ${duration}s ${timing} ${fadeInAnimation};
      animation-delay: ${delay}s;
      animation-fill-mode: both, forwards;
      ${style}
    `;
    return (
        <>
            {start &&
                <>
                    {children}
                </>
            }
            {!start &&
                <FadeInBlock>
                    {children}
                </FadeInBlock>
            }
        </>
    )
}

FadeIn.defaultProps = {
    delay: 0,
    duration: 1,
    iteration: 1,
    timing: 'ease-in',
    style: '',
}

export default FadeIn;
