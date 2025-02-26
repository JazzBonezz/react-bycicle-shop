import React, { useEffect } from 'react';
import { fetchBikes } from '../model/bikeSlice';
import { useAppSelector, useAppDispatch } from '../../../app/providers/store';
import bicycleImage from '../../../shared/assets/images/bycicle.jpg';
import {
    CardButton,
    CenterlSection,
    Description,
    LeftSection,
    MainTitle,
    PriceCard,
    ProductCard,
    RightSection,
    Title,
    Image,
} from './post.styled';

const ProductList: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
    const dispatch = useAppDispatch();
    const { bikes, status, error } = useAppSelector((state) => state.bikes);

    useEffect(() => {
        dispatch(fetchBikes());
    }, [dispatch]);

    if (status === 'loading') return <p>Загрузка...</p>;
    if (status === 'failed') return <p>Ошибка: {error}</p>;

    const filteredBikes = bikes.filter((bike) =>
        bike.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div>
            <MainTitle>Каталог велосипедов</MainTitle>
            <ul>
                {filteredBikes.map((bike) => (
                    <ProductCard key={bike.id}>
                        <LeftSection>
                            <Title>{bike.name}</Title>
                            <Image src={bicycleImage} />
                        </LeftSection>
                        <CenterlSection>
                            <Description>{bike.description}</Description>
                        </CenterlSection>
                        <RightSection>
                            <PriceCard>
                                {Math.floor(bike.priceWithDiscount)}₽
                            </PriceCard>
                            <CardButton>В корзину</CardButton>
                        </RightSection>
                    </ProductCard>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
