import React, { useEffect, useState } from 'react';
import { fetchBikes } from '../../model/bikeSlice';
import {
    useAppSelector,
    useAppDispatch,
} from '../../../../app/providers/store';
import ProductCard from '../ProductCard/ProductCard';
import { useFilteredBikes } from '../../model/hooks';
import { MainTitle } from '../../../../shared/ui/MainTitle/MainTitle';
import { Bike, ProductListProps } from '../../model/types';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa6';
import { SortButton } from './styles';

const ProductList: React.FC<ProductListProps> = (props) => {
    const {
        searchTerm,
        selectedCategories,
        selectedBrands,
        priceRange,
        selectedFrameSizes,
        inStock,
    } = props;
    const dispatch = useAppDispatch();
    const { bikes, status, error } = useAppSelector((state) => state.bikes);

    useEffect(() => {
        dispatch(fetchBikes());
    }, [dispatch]);

    const filteredBikes: Bike[] = useFilteredBikes({
        bikes: bikes || [],
        searchTerm,
        selectedCategories,
        selectedBrands,
        priceRange,
        selectedFrameSizes,
        inStock,
    });

    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

    const sortedBikes: Bike[] = [...filteredBikes].sort((a, b) => {
        if (sortOrder === 'asc')
            return a.priceWithDiscount - b.priceWithDiscount;
        if (sortOrder === 'desc')
            return b.priceWithDiscount - a.priceWithDiscount;
        return 0;
    });

    const toggleSortOrder = () => {
        setSortOrder((prev) =>
            prev === 'none' ? 'asc' : prev === 'asc' ? 'desc' : 'none',
        );
    };

    if (status === 'loading') return <p>Загрузка...</p>;
    if (status === 'failed') return <p>Ошибка: {error}</p>;

    return (
        <div>
            <MainTitle>Каталог велосипедов</MainTitle>

            <SortButton
                onClick={toggleSortOrder}
                width={'fit-content'}
                showIcon={false}
            >
                Сортировка по цене:{' '}
                {sortOrder === 'asc' ? (
                    <FaLongArrowAltDown />
                ) : sortOrder === 'desc' ? (
                    <FaLongArrowAltUp />
                ) : (
                    <FaBan />
                )}
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
