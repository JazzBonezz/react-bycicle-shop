import React, { FC } from 'react';
import { FaTruckPickup } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';
import Icon from '../../../../shared/assets/icons/pochta-rossii.svg';
import { Delivery, PayPageButton } from './styles';
import { activeButtons } from '../../model/types';

const DeliverySelection: FC<activeButtons> = ({ active, setActive }) => {
    return (
        <Delivery>
            <PayPageButton
                $active={active === 'self-delivery'}
                onClick={() => setActive('self-delivery')}
            >
                <FaTruckPickup />
            </PayPageButton>
            <PayPageButton
                $active={active === 'post'}
                onClick={() => setActive('post')}
            >
                <TbTruckDelivery />
            </PayPageButton>
            <PayPageButton
                $active={active === 'delivery'}
                onClick={() => setActive('delivery')}
            >
                <img src={Icon} alt="" />
            </PayPageButton>
        </Delivery>
    );
};

export default DeliverySelection;
