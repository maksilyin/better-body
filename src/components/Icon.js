import ReactSprite from 'react-sprite'

const Icon = ({icon, className}) => {
    return (
        <ReactSprite
            href={`/sprites.svg#${icon}`}
            className={`${icon} ${className}`}
        >

        </ReactSprite>
    )
}

export default Icon;
