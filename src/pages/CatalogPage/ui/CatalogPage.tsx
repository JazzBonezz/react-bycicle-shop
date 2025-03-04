import React, { useMemo, useState } from 'react';
import ProductList from '../../../features/bikes/ui/ProductList/ProductList';
import {
    Container,
    FilterSection,
    LeftSection,
    RightSection,
    SearchContainer,
    SearchInput,
    FilterList,
    FilterItem,
    Checkbox,
    FilterTitle,
    FilterButton,
} from './catalog.styles';
import { useAppSelector } from '../../../app/providers/store';

const CatalogPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { bikes } = useAppSelector((state) => state.bikes);

    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedFrameSizes, setSelectedFrameSizes] = useState<string[]>([]);
    const [filterInStock, setFilterInStock] = useState<boolean>(false);
    const [openFilters, setOpenFilters] = useState<Set<string>>(new Set());
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
        min: 0,
        max: 1000000,
    });

    const categories = useMemo(() => {
        const allCategories = (bikes || []).flatMap(
            (bike) => bike.category || [],
        );
        return Array.from(new Set(allCategories));
    }, [bikes]);

    const brands = useMemo(() => {
        const allBrands = (bikes || []).map((bike) => bike.brand || '');
        return Array.from(new Set(allBrands));
    }, [bikes]);

    const frameSizes = useMemo(() => {
        const sizes = (bikes || []).flatMap(
            (bike) => bike.specifications?.frameSize || [],
        );
        return Array.from(new Set(sizes));
    }, [bikes]);

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

    return (
        <Container>
            <RightSection>
                <SearchContainer>
                    <SearchInput
                        type="text"
                        placeholder="Поиск"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </SearchContainer>
                <ProductList
                    searchTerm={searchTerm}
                    selectedCategories={selectedCategory}
                    selectedBrands={selectedBrands}
                    priceRange={priceRange}
                    selectedFrameSizes={selectedFrameSizes}
                    inStock={filterInStock}
                />
            </RightSection>
            <LeftSection>
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
                                    checked={selectedCategory.includes(
                                        category,
                                    )}
                                    onChange={() =>
                                        handleCategoryChange(category)
                                    }
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
                                onChange={() =>
                                    setFilterInStock((prev) => !prev)
                                }
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
                        <div>
                            {`Цена от ${priceRange.min} до ${priceRange.max}`}
                        </div>
                    </FilterList>
                </FilterSection>
            </LeftSection>
        </Container>
    );
};

export default CatalogPage;
