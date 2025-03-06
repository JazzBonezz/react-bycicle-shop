import React, { useState } from 'react';
import { Formik } from 'formik';
import { Container } from './styles';
import { validationSchema } from '../../../features/payment/model/validation';
import { initialPaymentValues } from '../../../features/payment/model/constants';
import {
    usePaymentForm,
    useTotalPrice,
} from '../../../features/payment/model/hooks';
import { PayForm, PaymentDetails } from '../../../features/payment';

const PayPage = () => {
    const [activeDelivery, setActiveDelivery] = useState<string | null>(null);
    const [activePayment, setActivePayment] = useState<string | null>(null);
    const totalWithDiscount = useTotalPrice();
    const { handleSubmit } = usePaymentForm();

    return (
        <Formik
            initialValues={initialPaymentValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Container onSubmit={handleSubmit}>
                    <PayForm />
                    <PaymentDetails
                        activeDelivery={activeDelivery}
                        setActiveDelivery={setActiveDelivery}
                        activePayment={activePayment}
                        setActivePayment={setActivePayment}
                        totalWithDiscount={totalWithDiscount}
                        isSubmitting={isSubmitting}
                    />
                </Container>
            )}
        </Formik>
    );
};

export default PayPage;
