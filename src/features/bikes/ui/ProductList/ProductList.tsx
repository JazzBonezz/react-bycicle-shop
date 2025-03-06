import React, { useEffect, useState, useMemo } from 'react';
import { fetchBikes } from '../../model/bikeSlice';
import {
    useAppSelector,
    useAppDispatch,
} from '../../../../app/providers/store';
import ProductCard from '../ProductCard/ProductCard';
import { useFilteredBikes } from '../../model/hooks';
import { MainTitle } from '../../../../shared/components/MainTitle/MainTitle';
import { Bike, ProductListProps } from '../../model/types';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa6';
import { SortButton } from './styles';

enum SortOrder {
    None = 'none',
    Asc = 'asc',
    Desc = 'desc',
}

const ProductList: React.FC<ProductListProps> = (props) => {
    const dispatch = useAppDispatch();
    const { bikes, status, error } = useAppSelector((state) => state.bikes);
    const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.None);
    const orderCycle = [SortOrder.None, SortOrder.Asc, SortOrder.Desc];
    const sortIcons = {
        [SortOrder.Asc]: <FaLongArrowAltDown />,
        [SortOrder.Desc]: <FaLongArrowAltUp />,
        [SortOrder.None]: <FaBan />,
    };

    const filteredBikes: Bike[] = useFilteredBikes({
        bikes: bikes || [],
        ...props,
    });

    const sortedBikes = useMemo(() => {
        return [...filteredBikes].sort((a, b) => {
            if (sortOrder === SortOrder.Asc)
                return a.priceWithDiscount - b.priceWithDiscount;
            if (sortOrder === SortOrder.Desc)
                return b.priceWithDiscount - a.priceWithDiscount;
            return 0;
        });
    }, [filteredBikes, sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder(
            (prev) =>
                orderCycle[(orderCycle.indexOf(prev) + 1) % orderCycle.length],
        );
    };

    useEffect(() => {
        dispatch(fetchBikes());
    }, [dispatch]);

    if (status === 'loading') return <p>Загрузка...</p>;
    if (status === 'failed') return <p>Ошибка: {error}</p>;

    return (
        <div>
            <MainTitle>Каталог велосипедов</MainTitle>

            <SortButton
                onClick={toggleSortOrder}
                width="fit-content"
                showIcon={false}
            >
                Сортировка по цене: {sortIcons[sortOrder]}
            </SortButton>

            <ul>
                {sortedBikes.map((bike) => (
                    <ProductCard key={bike.id} bike={bike} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
