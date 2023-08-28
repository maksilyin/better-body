import RoundedIcon from "./RoundedIcon";

const Burger = () => {
    return (
        <RoundedIcon
            icon={`burger`}
            classButton={`hover:bg-pink sm:ml-[-15px]`}
            classIcon={`w-[30px] h-[17px] stroke-black group-hover:stroke-white`}
        />
    )
}

export default Burger;
