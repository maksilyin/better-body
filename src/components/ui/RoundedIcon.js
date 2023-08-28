import Icon from "../Icon";
import RoundedButton from "./RoundedButton";

const RoundedIcon = ({icon, classIcon, classButton}) => {
    classIcon = classIcon !== undefined ? classIcon : '';
    classButton = classButton !== undefined ? classButton : '';
    return (
        <RoundedButton className={classButton}>
            <Icon
                icon={icon}
                className={`transition-all ${classIcon}`}
            />
        </RoundedButton>
    );
}

export default RoundedIcon;
