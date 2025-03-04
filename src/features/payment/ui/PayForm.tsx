import React, { FC } from 'react';
import { ErrorMessage } from 'formik';

import { FirstSection, Input, ErrorText } from './styles';
import { InputFieldProps } from '../model/types';

const fields = [
    { name: 'firstName', placeholder: 'Имя' },
    { name: 'lastName', placeholder: 'Фамилия' },
    { name: 'middleName', placeholder: 'Отчество' },
    { name: 'email', placeholder: 'Почта' },
    { name: 'phone', placeholder: 'Телефон' },
    { name: 'address', placeholder: 'Адрес' },
];

const InputField: FC<InputFieldProps> = ({ name, placeholder }) => (
    <>
        <Input name={name} placeholder={placeholder} />
        <ErrorMessage name={name} component={ErrorText} />
    </>
);

const PayForm = () => {
    return (
        <FirstSection>
            <h1>Введите данные для оплаты</h1>
            {fields.map((field) => (
                <InputField key={field.name} {...field} />
            ))}
        </FirstSection>
    );
};

export default PayForm;
