import React from 'react';
import { Line, SecondSection, TotalPrice } from './styles';
import { formatPrice } from '../../../../shared/lib/formatPrice';
import DeliverySelection from '../DeliverySelection/DeliverySelection';
import PaymentSelection from '../PaymentSelection/PaymentSelection';
import { Button } from '../../../../shared/ui/CustomButton/';
import {PaymentDetailsProps} from '../../model/types'

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
    activeDelivery,
    setActiveDelivery,
    activePayment,
    setActivePayment,
    totalWithDiscount,
    isSubmitting,
}) => {
    return (
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
                К оплате: <strong>{formatPrice(totalWithDiscount)}</strong>
            </TotalPrice>

            <Line />

            <Button type="submit" disabled={isSubmitting}>
                Оплатить
            </Button>
        </SecondSection>
    );
};

export default PaymentDetails;
