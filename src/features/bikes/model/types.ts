import React from 'react';

export interface BikeSpecifications {
    frameSize: string[];
}

export interface Bike {
    id: string;
    name: string;
    type?: string;
    description?: string;
    price: number;
    discount: number;
    priceWithDiscount: number;
    brand: string;
    category: string[];
    specifications: BikeSpecifications;
    inStock: boolean;
}

export interface ProductListProps {
    searchTerm: string;
    selectedCategories: string[];
    selectedBrands: string[];
    priceRange: { min: number; max: number };
    selectedFrameSizes: string[];
    inStock: boolean;
}

export interface UseFilteredBikesProps {
    bikes: Bike[];
    searchTerm: string;
    selectedCategories: string[];
    selectedBrands: string[];
    priceRange: { min: number; max: number };
    selectedFrameSizes: string[];
    inStock: boolean;
}

export interface BikeState {
    bikes: Bike[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface FiltersPanelProps {
    categories: string[];
    brands: string[];
    frameSizes: string[];
    selectedCategory: string[];
    selectedBrands: string[];
    selectedFrameSizes: string[];
    filterInStock: boolean;
    priceRange: { min: number; max: number };
    openFilters: Set<string>;
    handleCategoryChange: (category: string) => void;
    handleBrandChange: (brand: string) => void;
    handleFrameSizeChange: (size: string) => void;
    toggleFilter: (filter: string) => void;
    setFilterInStock: React.Dispatch<React.SetStateAction<boolean>>;
    setPriceRange: React.Dispatch<
        React.SetStateAction<{ min: number; max: number }>
    >;
}