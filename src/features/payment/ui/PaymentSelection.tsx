import React, { FC } from 'react';
import { PayPageButton, Delivery } from './styles';
import { activeButtons } from '../model/types';

const PaymentSelection: FC<activeButtons> = ({ active, setActive }) => {
    return (
        <>
            <Delivery>
                <PayPageButton
                    $active={active === 'online'}
                    onClick={() => setActive('online')}
                >
                    Онлайн
                </PayPageButton>
                <PayPageButton
                    $active={active === 'cash on delivery'}
                    onClick={() => setActive('cash on delivery')}
                >
                    Наличными при получении
                </PayPageButton>
                <PayPageButton
                    $active={active === 'card on delivery'}
                    onClick={() => setActive('card on delivery')}
                >
                    Картой при получении
                </PayPageButton>
            </Delivery>
        </>
    );
};

export default PaymentSelection;
