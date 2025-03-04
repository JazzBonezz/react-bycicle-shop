import React from 'react';
import {
    FilterSection,
    FilterTitle,
    FilterButton,
    FilterList,
    FilterItem,
    Checkbox,
} from './styles';

interface FiltersPanelProps {
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

const FiltersPanel: React.FC<FiltersPanelProps> = ({
    categories,
    brands,
    frameSizes,
    selectedCategory,
    selectedBrands,
    selectedFrameSizes,
    filterInStock,
    priceRange,
    openFilters,
    handleCategoryChange,
    handleBrandChange,
    handleFrameSizeChange,
    toggleFilter,
    setFilterInStock,
    setPriceRange,
}) => {
    return (
        <FilterSection>
            <FilterTitle>Фильтры</FilterTitle>

            <FilterButton onClick={() => toggleFilter('categories')}>
                Категории
            </FilterButton>
            <FilterList $isOpen={openFilters.has('categories')}>
                {categories.map((category) => (
                    <FilterItem key={category}>
                        <Checkbox
                            type="checkbox"
                            value={category}
                            checked={selectedCategory.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                        {category}
                    </FilterItem>
                ))}
            </FilterList>

            <FilterButton onClick={() => toggleFilter('brands')}>
                Бренды
            </FilterButton>
            <FilterList $isOpen={openFilters.has('brands')}>
                {brands.map((brand) => (
                    <FilterItem key={brand}>
                        <Checkbox
                            type="checkbox"
                            value={brand}
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                        />
                        {brand}
                    </FilterItem>
                ))}
            </FilterList>

            <FilterButton onClick={() => toggleFilter('frameSizes')}>
                Размер рамы
            </FilterButton>
            <FilterList $isOpen={openFilters.has('frameSizes')}>
                {frameSizes.map((size) => (
                    <FilterItem key={size}>
                        <Checkbox
                            type="checkbox"
                            value={size}
                            checked={selectedFrameSizes.includes(size)}
                            onChange={() => handleFrameSizeChange(size)}
                        />
                        {size}
                    </FilterItem>
                ))}
            </FilterList>

            <FilterButton onClick={() => toggleFilter('inStock')}>
                Наличие на складе
            </FilterButton>
            <FilterList $isOpen={openFilters.has('inStock')}>
                <FilterItem>
                    <Checkbox
                        type="checkbox"
                        value="inStock"
                        checked={filterInStock}
                        onChange={() => setFilterInStock((prev) => !prev)}
                    />
                    Только в наличии
                </FilterItem>
            </FilterList>

            <FilterButton onClick={() => toggleFilter('price')}>
                Цена
            </FilterButton>
            <FilterList $isOpen={openFilters.has('price')}>
                <div>
                    <label>
                        Минимальная цена:
                        <input
                            type="number"
                            value={priceRange.min}
                            onChange={(e) =>
                                setPriceRange({
                                    ...priceRange,
                                    min: Number(e.target.value),
                                })
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Максимальная цена:
                        <input
                            type="number"
                            value={priceRange.max}
                            onChange={(e) =>
                                setPriceRange({
                                    ...priceRange,
                                    max: Number(e.target.value),
                                })
                            }
                        />
                    </label>
                </div>
                <div>{`Цена от ${priceRange.min} до ${priceRange.max}`}</div>
            </FilterList>
        </FilterSection>
    );
};

export default FiltersPanel;
