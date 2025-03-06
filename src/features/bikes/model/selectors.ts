import { Bike } from './types';

export const useCategories = (bikes: Bike[] = []) => {
    const allCategories = bikes.flatMap((bike) => bike.category || []);
    return Array.from(new Set(allCategories)).sort();
};

export const useBrands = (bikes: Bike[] = []) => {
    const allBrands = bikes
        .map((bike) => bike.brand)
        .filter(Boolean);
    return Array.from(new Set(allBrands)).sort();
};

export const useFrameSizes = (bikes: Bike[] = []) => {
    const sizes = bikes.flatMap((bike) => bike.specifications?.frameSize || []);
    return Array.from(new Set(sizes)).sort();
};