import {
    Container,
    Delivery,
    FirstSection,
    Input,
    Line,
    PayPageButton,
    SecondSection,
    TotalPrice,
    ErrorText
} from './pay.styled';
import { FaTruckPickup } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';
import Icon from '../../../shared/assets/images/pochta-rossii.svg';
import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../app/providers/store';
import { selectCartTotalWithDiscount } from '../../../features/cart/model/cartSelectors';
import { formatPrice } from '../../../shared/lib/formatPrice';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import {Button} from '../../../shared/ui/LoginButton/';

const validationSchema = Yup.object({
    firstName: Yup.string()
        .matches(/^[А-ЯЁ][а-яё]+$/, 'Имя должно начинаться с заглавной буквы и содержать только кириллицу')
        .required('Введите имя'),
    lastName: Yup.string()
        .matches(/^[А-ЯЁ][а-яё]+$/, 'Фамилия должна начинаться с заглавной буквы и содержать только кириллицу')
        .required('Введите фамилию'),
    middleName: Yup.string()
        .matches(/^[А-ЯЁ][а-яё]+$/, 'Отчество должно начинаться с заглавной буквы и содержать только кириллицу')
        .required('Введите отчество'),
    email: Yup.string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Введите корректный email'
        )
        .required('Введите почту'),
    phone: Yup.string()
        .matches(
            /^(?:\+7|8)\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
            'Введите корректный номер'
        )
        .required('Введите телефон'),
    address: Yup.string()
        .matches(
            /^(\d{6})?,?\s?(г\.\s?[А-ЯЁа-яё-]+)?,?\s?(ул\.\s?[А-ЯЁа-яё-]+)?,?\s?(д\.\s?\d+)(\s?к\.\s?\d+)?$/,
            'Введите корректный адрес (например: 625207, г. Москва, ул. Ленина, д. 86 к. 2)'
        )
        .required('Введите адрес'),
});

interface InputFieldProps {
    name: string;
    placeholder: string;
}

const InputField: FC<InputFieldProps> = ({ name, placeholder }) => (
    <>
        <Input name={name} placeholder={placeholder} />
        <ErrorMessage name={name} component={ErrorText} />
    </>
);

const fields = [
    { name: 'firstName', placeholder: 'Имя' },
    { name: 'lastName', placeholder: 'Фамилия' },
    { name: 'middleName', placeholder: 'Отчество' },
    { name: 'email', placeholder: 'Почта' },
    { name: 'phone', placeholder: 'Телефон' },
    { name: 'address', placeholder: 'Адрес' },
];

const PayPage = () => {
    const [activeDelivery, setActiveDelivery] = useState<string | null>(null);
    const [activePayment, setActivePayment] = useState<string | null>(null);
    const totalWithDiscount = useAppSelector(selectCartTotalWithDiscount);
    const navigate = useNavigate();
    return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    middleName: '',
                    email: '',
                    phone: '',
                    address: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('Отправленные данные:', values);
                    setSubmitting(false);
                    navigate('/home');
                }}
            >
                {({ handleSubmit, isSubmitting }) => (
                    <Container onSubmit={handleSubmit}>
                        <FirstSection>
                            <h1>Введите данные для оплаты</h1>
                            {fields.map((field) => (
                                <InputField key={field.name} {...field} />
                            ))}
                        </FirstSection>
                        <SecondSection>
                            <Delivery>
                                <PayPageButton
                                    $active={activeDelivery === 'self-delivery'}
                                    onClick={() =>
                                        setActiveDelivery('self-delivery')
                                    }
                                >
                                    <FaTruckPickup />
                                </PayPageButton>
                                <PayPageButton
                                    $active={activeDelivery === 'post'}
                                    onClick={() => setActiveDelivery('post')}
                                >
                                    <TbTruckDelivery />
                                </PayPageButton>
                                <PayPageButton
                                    $active={activeDelivery === 'delivery'}
                                    onClick={() =>
                                        setActiveDelivery('delivery')
                                    }
                                >
                                    <img src={Icon} alt="" />
                                </PayPageButton>
                            </Delivery>

                            <Line />
                            <Delivery>
                                <PayPageButton
                                    $active={activePayment === 'online'}
                                    onClick={() => setActivePayment('online')}
                                >
                                    Онлайн
                                </PayPageButton>
                                <PayPageButton
                                    $active={
                                        activePayment === 'cash on delivery'
                                    }
                                    onClick={() =>
                                        setActivePayment('cash on delivery')
                                    }
                                >
                                    Наличными при получении
                                </PayPageButton>
                                <PayPageButton
                                    $active={
                                        activePayment === 'card on delivery'
                                    }
                                    onClick={() =>
                                        setActivePayment('card on delivery')
                                    }
                                >
                                    Картой при получении
                                </PayPageButton>
                            </Delivery>

                            <Line />

                            <TotalPrice>
                                К оплате:{' '}
                                <strong>
                                    {formatPrice(totalWithDiscount)}
                                </strong>
                            </TotalPrice>

                            <Line />

                            <Button type="submit" disabled={isSubmitting}>Оплатить</Button>
                        </SecondSection>
                    </Container>
                )}
            </Formik>
    );
};

export default PayPage;
