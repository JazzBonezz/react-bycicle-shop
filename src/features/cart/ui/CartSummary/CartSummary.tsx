import {
    SecondaryTitle,
    TotalPrice,
    SubTotalPrice,
    PriceSection,
} from './styles';
import { Button } from '../../../../shared/components/CustomButton/ui/styles';
import { formatPrice } from '../../../../shared/Helpers/formatPrice';
import { useNavigate } from 'react-router';

interface CartSummaryProps {
    subtotal: number;
    totalWithDiscount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
    subtotal,
    totalWithDiscount,
}) => {
    const navigate = useNavigate();

    return (
        <>
            <SecondaryTitle>Сумма: </SecondaryTitle>
            <PriceSection>
                <SubTotalPrice>
                    Подытог (без скидки): {formatPrice(subtotal)}
                </SubTotalPrice>
                <hr />
                <TotalPrice>
                    Итог (со скидкой):{' '}
                    <strong>{formatPrice(totalWithDiscount)}</strong>
                </TotalPrice>
            </PriceSection>
            <Button onClick={() => navigate('/pay')}>Перейти к оплате</Button>
        </>
    );
};

export default CartSummary;
