import { useState } from 'react';

export const useFilters = () => {
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedFrameSizes, setSelectedFrameSizes] = useState<string[]>([]);
    const [filterInStock, setFilterInStock] = useState<boolean>(false);
    const [openFilters, setOpenFilters] = useState<Set<string>>(new Set());
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
        min: 0,
        max: 1000000,
    });

    const handleCategoryChange = (category: string) => {
        setSelectedCategory((prev) =>
            prev.includes(category)
                ? prev.filter((e) => e !== category)
                : [...prev, category],
        );
    };

    const handleBrandChange = (brand: string) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((b) => b !== brand)
                : [...prev, brand],
        );
    };

    const handleFrameSizeChange = (size: string) => {
        setSelectedFrameSizes((prev) =>
            prev.includes(size)
                ? prev.filter((s) => s !== size)
                : [...prev, size],
        );
    };

    const toggleFilter = (filter: string) => {
        setOpenFilters((prev) => {
            const newFilters = new Set(prev);
            if (newFilters.has(filter)) newFilters.delete(filter);
            else newFilters.add(filter);
            return newFilters;
        });
    };

    return {
        selectedCategory,
        selectedBrands,
        selectedFrameSizes,
        filterInStock,
        openFilters,
        priceRange,
        setFilterInStock,
        setPriceRange,
        handleCategoryChange,
        handleBrandChange,
        handleFrameSizeChange,
        toggleFilter,
    };
};
