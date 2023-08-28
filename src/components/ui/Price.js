const Price = ({children}) => {

    const formatter = new Intl.NumberFormat('ru-RU', {
        maximumFractionDigits: 0
    });

    return (
        <>
            {formatter.format(children)}₽
        </>
    )
}

export default Price;
