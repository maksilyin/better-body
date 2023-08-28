import {useState} from "react";
import Button from "./Button";
import InputMask from 'react-input-mask';
import axios from "axios";

const FeedbackForm = ({title , buttonText, className, service, specialist}) => {
    const [isSending, setIsSending] = useState(false)
    const [isSuccessSend, setIsSuccessSend] = useState(false)
    const [formData, setFormData] = useState({
        name: {
            value: '',
            isError: false,
            errorText: 'Введите ваше имя',
            require: true,
            rule: 'name',
        },
        phone: {
            value: '',
            isError: false,
            errorText: 'Укажите ваш телефон',
            require: true,
            rule: 'phone',
        },
        email: {
            value: '',
            isError: false,
            errorText: 'Укажите вашу почту',
            require: true,
            rule: 'email',
        },
    });

    const successText = 'Ваша заявка успешно отправлена. Наш менеджер свяжется с вами через некоторое время.';

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value: value,
                isError: false,
            }
        }));
    };

    const sendForm = async (e) => {
        e.preventDefault();

        if (validate()) {
            return;
        }

        const data = {
            name: formData.name.value,
            phone: formData.phone.value,
            email: formData.email.value,
            title: title ? title : 'Заявка на процедуру',
            service: service,
            specialist: specialist,
        }
        setIsSending(true);
        try {
            const response = await axios.post('/ajax/feedback.php', data);
            if (response.data === 'OK') {
                setIsSuccessSend(true);
            }
        } finally {
            setIsSending(false);
        }
    }

    const validate = () => {
        let isError = false;

        if (formData.name.value === '' || formData.name.value.length < 3) {
            formData.name.isError = true;

            setFormData(prevState => ({
                ...prevState,
                name: formData.name
            }));

            isError = true;
        }

        if (formData.phone.value === '' || !/^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/.test(formData.phone.value)) {
            formData.phone.isError = true;

            setFormData(prevState => ({
                ...prevState,
                phone: formData.phone
            }));

            isError = true;
        }

        if (formData.email.value === '' || !/^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]+$/.test(formData.email.value)) {
            formData.email.isError = true;

            setFormData(prevState => ({
                ...prevState,
                email: formData.email
            }));

            isError = true;
        }

        return isError;
    }

    return (
        <div className={className}>
            {title &&
                <h2 className={`text-p md:text-30`}>{title}</h2>
            }
            {isSuccessSend &&
                <h2 className={'text-center text-md sm:sm-title'}>{successText}</h2>
            }
            {!isSuccessSend &&
                <form>
                    <div className={`body`}>
                        <div className={`name`}>
                            <div className={`input ${formData.name.isError ? 'error' : ''}`}>
                                <input className={`placeholder-black font-p`} placeholder={`Каĸ Вас зовут?`}
                                       name={`name`} onChange={handleChange}/>
                                {formData.name.isError &&
                                    <span
                                        className={`absolute bottom-[-25px] text-[12px] text-pink`}>{formData.name.errorText}</span>
                                }
                            </div>
                        </div>
                        <div className={`input phone ${formData.phone.isError ? 'error' : ''}`}>
                            <InputMask className={`placeholder-black font-p`} mask="+7 (999) 999 99 99"
                                       placeholder={`+7 (999) 999 99 99`} name={`phone`}
                                       onChange={handleChange}></InputMask>
                            {formData.phone.isError &&
                                <span
                                    className={`absolute bottom-[-25px] text-[12px] text-pink`}>{formData.phone.errorText}</span>
                            }
                        </div>
                        <div className={`input email ${formData.email.isError ? 'error' : ''}`}>
                            <input className={`placeholder-black font-p`} placeholder={`Ваша почта`} name={`email`}
                                   onChange={handleChange}/>
                            {formData.email.isError &&
                                <span
                                    className={`absolute bottom-[-25px] text-[12px] text-pink`}>{formData.email.errorText}</span>
                            }
                        </div>
                    </div>
                    <div className={`button`}>
                        <Button
                            onClick={sendForm}
                            className={`mb-[32px] mt-[2px] w-[494px] max-w-full`}
                            disabled={isSending}
                        >
                            {buttonText}
                        </Button>
                    </div>
                    <p className={`agree font-normal text-gray-400`}>
                        Оставляя заявĸу Вы принимаете условия <a className={`text-black-lt font-normal`}
                                                                 href={"#"}>соглашения</a> об обработĸе
                        персональных данных</p>
                </form>
            }
        </div>
    )
}

FeedbackForm.defaultProps = {
    title: false,
    service: false,
    specialist: false,
    buttonText: "Оставить заявку",
    className: ""
};

export default FeedbackForm;
