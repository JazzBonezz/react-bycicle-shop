import { useMemo } from 'react';
import { Bike } from './types';
import { UseFilteredBikesProps } from './types';

export const useFilteredBikes = ({
    bikes,
    searchTerm,
    selectedCategories,
    selectedBrands,
    priceRange,
    selectedFrameSizes,
    inStock,
}: UseFilteredBikesProps): Bike[] => {
    return useMemo(() => {
        return bikes.filter(
            (bike) =>
                bike.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedCategories.length === 0 ||
                    selectedCategories.every((cat) =>
                        (bike.category || []).includes(cat),
                    )) &&
                (selectedBrands.length === 0 ||
                    selectedBrands.includes(bike.brand)) &&
                Math.floor(bike.priceWithDiscount) >= priceRange.min &&
                Math.floor(bike.priceWithDiscount) <= priceRange.max &&
                (selectedFrameSizes.length === 0 ||
                    (bike.specifications?.frameSize || []).some((size) =>
                        selectedFrameSizes.includes(size),
                    )) &&
                (!inStock || bike.inStock),
        );
    }, [
        bikes,
        searchTerm,
        selectedCategories,
        selectedBrands,
        priceRange,
        selectedFrameSizes,
        inStock,
    ]);
};
