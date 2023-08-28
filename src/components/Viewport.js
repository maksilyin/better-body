import { useInViewport } from 'react-in-viewport';

const Viewport = ({block, children}) => {
    const {
        inViewport,
        enterCount,
    } = useInViewport(
        block,
        {},
        { disconnectOnLeave: false },
        {}
    );

    return (
        <>
            {(inViewport || enterCount) &&
                <>
                    {children}
                </>
            }
        </>
    )
}

export default Viewport;
