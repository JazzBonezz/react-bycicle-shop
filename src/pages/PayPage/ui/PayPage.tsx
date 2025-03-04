import { Container, Line, SecondSection, TotalPrice } from './pay.styled';
import React, { useState } from 'react';
import { useAppSelector } from '../../../app/providers/store';
import { selectCartTotalWithDiscount } from '../../../features/cart/model/cartSelectors';
import { formatPrice } from '../../../shared/lib/formatPrice';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import { Button } from '../../../shared/ui/LoginButton/';
import PayForm from '../../../features/payment/ui/PayForm';
import DeliverySelection from '../../../features/payment/ui/DeliverySelection';
import PaymentSelection from '../../../features/payment/ui/PaymentSelection';
import { validationSchema } from '../../../features/payment/model/validation';

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
                    <PayForm />
                    <SecondSection>
                        <DeliverySelection
                            active={activeDelivery}
                            setActive={setActiveDelivery}
                        />

                        <Line />
                        <PaymentSelection
                            active={activePayment}
                            setActive={setActivePayment}
                        />

                        <Line />

                        <TotalPrice>
                            К оплате:{' '}
                            <strong>{formatPrice(totalWithDiscount)}</strong>
                        </TotalPrice>

                        <Line />

                        <Button type="submit" disabled={isSubmitting}>
                            Оплатить
                        </Button>
                    </SecondSection>
                </Container>
            )}
        </Formik>
    );
};

export default PayPage;
