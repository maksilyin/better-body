import IconPng from "../IconPng";
import Circle from "../decoration/Circle";
import FadeIn from "../animations/FadeIn";
import {useRef, useState} from "react";
import Viewport from "../Viewport";

const Video = () => {
    const [isPlay, setIsPlay] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const video = useRef();
    const section = useRef();

    const playVideo = () => {
        if (!isPlay || isPause) {
            setIsPlay(true)
            setIsPause(false);
            video.current.play();
        }
    }

    const pause = () => {
        video.current.pause();
        setIsPause(true);
    }

    const videoEndHandler = () => {
        setIsPlay(false)
        setIsPause(false);
    }

    return (
        <section id={'video'} ref={section} className={`relative py-[28.1243%] min-h-[492px]`}>
            {!isPlay &&
                <h3 className={`absolute z-10 uppercase text-white font-bold text-p md:text-h3 left-[20px] top-[80px] md:left-[176px] md:top-[173px]`}>
                    <Viewport block={section}>
                        <FadeIn>
                            Экскурсия по нашей студии
                        </FadeIn>
                    </Viewport>
                </h3>
            }
            <div className={`absolute w-[100%] h-[100%] top-0 left-0 flex justify-center items-center overflow-hidden`}>
                <video
                    ref={video}
                    className={'absolute object-cover top-0 left-0 w-[100%] h-[100%]'}
                    src='/video/video_1.mp4'
                    type='video/mp4'
                    onClick={pause}
                    onEnded={videoEndHandler}
                >

                </video>
                {!isPlay &&
                    <img className={'absolute object-cover top-0 left-0 w-[100%] h-[100%]'} src={`/images/video.jpeg`}/>
                }
                {(!isPlay || isPause) &&
                    <div
                        onClick={playVideo}
                        className={`group z-[1] scale-50 md:scale-100 flex transition flex justify-center items-center w-[189px] h-[189px] rounded-full cursor-pointer z-1 bg-white opacity-50 hover:opacity-90`}
                    >
                        <IconPng icon={`play`} className={`ml-5 transition opacity-70 group-hover:opacity-100`}/>
                    </div>
                }
                {!isPlay &&
                    <>
                        <Circle className={`w-[659px] h-[659px] bg-color-white top-[-66px] left-[-214px]`}/>
                        <Circle className={`w-[659px] h-[659px] bg-color-white top-[169px] right-[-171px]`}/>
                    </>
                }
            </div>
        </section>
    );
}

export default Video;
