import React from 'react';
import {
    CardButton,
    CenterlSection,
    Description,
    LeftSection,
    PriceCard,
    ProductCard as StyledProductCard,
    RightSection,
    Title,
    Image,
} from './ProductCard.styled';
import bicycleImage from '../../../../shared/assets/images/bycicle.jpg';
import { useAppDispatch } from '../../../../app/providers/store';
import { addToCart } from '../../../../pages/CartPage/Model/cartSlice';
import { Bike } from '../../model/types';

interface ProductCardProps {
    bike: Bike;
}

const ProductCard: React.FC<ProductCardProps> = ({ bike }) => {
    const dispatch = useAppDispatch();

    return (
        <StyledProductCard>
            <LeftSection>
                <Title>{bike.name}</Title>
                <Image src={bicycleImage} />
            </LeftSection>
            <CenterlSection>
                <Description>{bike.description}</Description>
            </CenterlSection>
            <RightSection>
                <PriceCard>
                    {bike.discount && bike.discount > 0 ? (
                        <>
                            {' '}
                            <span
                                style={{ textAlign: 'center', margin: '0 8px' }}
                            >
                                {Math.floor(
                                    bike.priceWithDiscount,
                                ).toLocaleString('ru-RU')}{' '}
                                ₽
                            </span>
                            <span
                                style={{
                                    textDecoration: 'line-through',
                                    color: '#888',
                                    margin: '0 8px',
                                    fontSize: '28px',
                                    textAlign: 'start',
                                }}
                            >
                                {Math.floor(bike.price).toLocaleString('ru-RU')}{' '}
                                ₽
                            </span>
                            <span
                                style={{
                                    color: 'red',
                                    margin: '0 8px',
                                    fontSize: '20px',
                                    textAlign: 'start',
                                }}
                            >
                                Скидка {bike.discount}%
                            </span>
                        </>
                    ) : (
                        <span>
                            {Math.floor(bike.price).toLocaleString('ru-RU')} ₽
                        </span>
                    )}
                </PriceCard>
                <CardButton
                    onClick={() =>
                        dispatch(
                            addToCart({
                                id: bike.id,
                                name: bike.name,
                                price: bike.price,
                                discount: bike.discount,
                                priceWithDiscount:
                                    bike.price -
                                    bike.price * (bike.discount / 100),
                            }),
                        )
                    }
                >
                    В корзину
                </CardButton>
            </RightSection>
        </StyledProductCard>
    );
};

export default ProductCard;
