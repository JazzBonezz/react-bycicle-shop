import React, { useState } from 'react';
import ProductList from '../../../features/bikes/ui/ProductList/ProductList';
import {
    Container,
    LeftSection,
    RightSection,
} from './styles';
import { useAppSelector } from '../../../app/providers/store';
import { useBrands, useCategories, useFrameSizes } from '../../../features/bikes/model/selectors';
import { useFilters } from '../../../features/bikes/model/filters';
import FiltersPanel from '../../../features/bikes/ui/FiltersPanel/FiltersPanel';
import SearchInput from '../../../features/bikes/ui/SearchInput/SearchInput';

const CatalogPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { bikes } = useAppSelector((state) => state.bikes);
    const categories = useCategories(bikes);
    const brands = useBrands(bikes);
    const frameSizes = useFrameSizes(bikes);
    const filters = useFilters();

    return (
        <Container>
            <RightSection>
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ProductList
                    searchTerm={searchTerm}
                    selectedCategories={filters.selectedCategory}
                    selectedBrands={filters.selectedBrands}
                    priceRange={filters.priceRange}
                    selectedFrameSizes={filters.selectedFrameSizes}
                    inStock={filters.filterInStock}
                />
            </RightSection>
            <LeftSection>
                <FiltersPanel
                    categories={categories}
                    brands={brands}
                    frameSizes={frameSizes}
                    {...filters}
                />
            </LeftSection>
        </Container>
    );
};

export default CatalogPage;
