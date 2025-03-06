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
        return bikes.filter((bike) => {
            const matchesSearch = bike.name
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.every((cat) =>
                    (bike.category || []).includes(cat),
                );

            const matchesBrand =
                selectedBrands.length === 0 ||
                selectedBrands.includes(bike.brand);

            const matchesPrice =
                Math.floor(bike.priceWithDiscount) >= priceRange.min &&
                Math.floor(bike.priceWithDiscount) <= priceRange.max;

            const matchesFrameSize =
                selectedFrameSizes.length === 0 ||
                (bike.specifications?.frameSize || []).some((size) =>
                    selectedFrameSizes.includes(size),
                );

            const matchesStock = !inStock || bike.inStock;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesBrand &&
                matchesPrice &&
                matchesFrameSize &&
                matchesStock
            );
        });
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
