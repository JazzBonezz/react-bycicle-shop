import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../app/providers/store';
import { selectCartTotalWithDiscount } from '../../../features/cart/model/cartSelectors';

export const usePaymentForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        console.log('Отправленные данные:', values);
        setSubmitting(false);
        navigate('/home');
    };

    return { handleSubmit };
};

export const useTotalPrice = () => {
    return useAppSelector(selectCartTotalWithDiscount);
};
