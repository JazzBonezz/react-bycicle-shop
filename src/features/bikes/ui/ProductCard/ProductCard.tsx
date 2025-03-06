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
    Image, TextThrough, TextRed
} from './styles';
import bicycleImage from '../../../../shared/assets/images/bycicle.jpg';
import { useAppDispatch } from '../../../../app/providers/store';
import { addToCart } from '../../../../features/cart/model/cartSlice';
import { Bike } from '../../model/types';

interface ProductCardProps {
    bike: Bike;
}

const ProductCard: React.FC<ProductCardProps> = ({ bike }) => {
    const dispatch = useAppDispatch();
    const formattedPrice = Math.floor(bike.price).toLocaleString('ru-RU');
    const formattedDiscountedPrice =  Math.floor(bike.price - (bike.price / 100) * bike.discount).toLocaleString('ru-RU');


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
                            <span>
                                {formattedDiscountedPrice}{' '}₽
                            </span>
                            <TextThrough
                            >
                                {formattedPrice}{' '}₽
                            </TextThrough>
                            <TextRed
                            >
                                Скидка {bike.discount}%
                            </TextRed>
                        </>
                    ) : (
                        <span>
                            {formattedPrice} ₽
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
