import { useMemo } from 'react';
import { Bike } from './types'; // Подключаем тип для bike

export const useCategories = (bikes: Bike[] | null) => {
    return useMemo(() => {
        const allCategories = (bikes || []).flatMap(
            (bike) => bike.category || [],
        );
        return Array.from(new Set(allCategories));
    }, [bikes]);
};

export const useBrands = (bikes: Bike[] | null) => {
    return useMemo(() => {
        const allBrands = (bikes || []).map((bike) => bike.brand || '');
        return Array.from(new Set(allBrands));
    }, [bikes]);
};

export const useFrameSizes = (bikes: Bike[] | null) => {
    return useMemo(() => {
        const sizes = (bikes || []).flatMap(
            (bike) => bike.specifications?.frameSize || [],
        );
        return Array.from(new Set(sizes));
    }, [bikes]);
};
