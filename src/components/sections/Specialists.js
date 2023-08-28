import Title from "../ui/Title";
import {useState} from "react";
import SpecialistCard from "../ui/SpecialistCard";
import FeedbackForm from "../ui/FeedbackForm";
import CustomModal from "../ui/CustomModal";
import SpecialistCardHorizontal from "../ui/SpecialistCardHorizontal";

const Specialists = ({className}) => {
    const [specialists, setSpecialists] = useState([
        {
            name: 'Анна Дмитриева',
            img: '/images/specialist_2.jpg',
            list: [
                'Мастера аппаратного массажа',
            ]
        },
        {
            name: 'Теона Басария',
            img: '/images/specialist_3.jpg',
            list: [
                'Мастера аппаратного массажа',
            ]
        },
        {
            name: 'Илона Басария',
            img: '/images/specialist_4.jpg',
            list: [
                'Мастер ручного массажа',
            ]
        },
    ])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [specialistCard, setSpecialistCard] = useState({});

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const setSpecialistCardModal = (card) => {
        setSpecialistCard(card);
        openModal()
    }

    return (
        <section id={'specialists'} className={className}>
            <div className={'container'}>
                <div className={`lg:w-[660px] mb-[55px] md:mb-[116px] mt-[49px]`}>
                    <Title title={`Специалисты`}>
                        <p>Все специалисты прошли обучение и имеют медицинское образование. Приходя к нам в студию вы можете
                            быть уверены в компетентности каждого сотрудника.</p>
                    </Title>
                </div>
                <div className={`flex flex-wrap gap-x-[30px] gap-y-[75px] justify-center lg:px-[122px] xs:justify-between`}>
                    {specialists.map((specialist, i) => (
                        <SpecialistCard key={specialist.name + i} {...specialist } onClick={(e)=>{
                            e.preventDefault();
                            setSpecialistCardModal(specialist);
                        }}/>
                    ))}
                </div>
            </div>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={`feedback form`}
                className={`px-[18px] py-[55px] sm:px-[60px] sm:py-[60px] sm:max-w-[1585px]`}
                zoom={true}
            >
                <SpecialistCardHorizontal {...specialistCard}/>
                <FeedbackForm
                    className={`feed-back-form-2`}
                    title={`Оставьте заявку на бесплатную консультацию`}
                    buttonText={`Отправить`}
                    specialist={specialistCard.name}
                />
            </CustomModal>
        </section>
    )
}

Specialists.defaultProps = {className: ""};

export default Specialists
