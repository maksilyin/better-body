import RoundedButton from "./RoundedButton";
import Scrollbar from 'smooth-scrollbar';
import IconSvg from "../IconSvg";

const Menu = ({onClickLink}) => {
    const menu = [
        {
            name: 'Услуги',
            link: '#services'
        },
        {
            name: 'Студия',
            link: '#studio',
            options: {
                offsetTop: -200,
            }
        },
        {
            name: 'Специалисты',
            link: '#specialists',
            options: {
                offsetTop: 50,
            }
        },
        {
            name: 'Аппараты',
            link: '#equipments'
        },
        {
            name: 'Контакты',
            link: '#contacts',
            options: {
                offsetTop: -800,
            }
        },
    ];

    const onClickHandler = (e, options) => {
        if (!/#.+$/.test(e.target.href)) {
            return;
        }
        e.preventDefault();
        const scrollbar = Scrollbar.get(document.querySelector('#App'));
        const link = e.target.href.match(/#.+/)[0];

        if (document.querySelector(link)) {
            scrollbar.scrollIntoView(document.querySelector(link), options);

            if (onClickLink) {
                onClickLink()
            }
        }
    }
    return (
        <div>
            <div className='pl-[30px] sm:text-center min-h-[46px]'>
                <a href="/">
                    <img className={`w-[190px] xs:w-[222px] ml-[12px] mt-0 xs:ml-[50px] xs:mt-[-2px] sm:mt-0 sm:ml-0 inline-block`} src="/images/logo-white.svg"/>
                </a>
            </div>
            <ul className={`mt-[39px] sm:mt-[50px]`}>
                {menu.map(menuItem => (
                    <li key={menuItem.link} className={`mb-[30px] sm:mb-[66px]`}>
                        <a
                            href={menuItem.link}
                            className={`transition-all text-white hover:text-pink uppercase text-p-md sm:text-button cursor-pointer`}
                            onClick={(e) => {onClickHandler(e, menuItem.options)}}
                        >
                            {menuItem.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className={`mb-[21px]`}>
                <div className={`text-white font-normal text-p-sm sm:text-md uppercase mb-[7.5px] opacity-60`}>
                    Пн – ВС: 9:00 - 20:00
                </div>
                <div>
                    <a href={`tel:+79612431227`}>
                        <IconSvg icon={`phone-white`} className={`w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] inline-block mr-[8px]`}/>
                        <span className={`transition-all hover:text-pink text-p-md sm:text-[22px] leading-[27px] text-white`}>+7 (961) 243-12-27</span>
                    </a>
                </div>
            </div>
            <div className={`flex mb-[30px] sm:mb-[66px]`}>
                <RoundedButton className={`w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] bg-black-opacity-30 hover:bg-pink`}>
                    <a href={'#'}>
                        <IconSvg icon={'telegram'} className={`w-[22px] h-[22px sm:w-[28px] sm:h-[28px]`}/>
                    </a>
                </RoundedButton>
                <RoundedButton className={`w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] bg-black-opacity-30 ml-3 sm:ml-5 hover:bg-pink`}>
                    <a href={'#'}>
                        <IconSvg icon={'instagram'} className={`w-[32px] h-[32px] sm:w-[38px] sm:h-[38px]`}/>
                    </a>
                </RoundedButton>
            </div>
            <div className={`flex`}>
                <IconSvg icon={'address'} className={`w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] inline-block mr-[8px] object-contain object-top`}/>
                <div>
                    <div className={`text-white uppercase text-p-md sm:text-button`}>г.Иваново, ул. Жарова д.3</div>
                    <div className={`text-white uppercase text-p-md sm:text-button`}>оф. 1003 студия Better body</div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
