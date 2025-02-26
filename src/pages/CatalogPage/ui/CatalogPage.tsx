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
    FilterTitle
} from './catalog.styles';
import { useMemo, useState } from 'react';
import ProductList from '../../../features/bikes/ui/PostList';
import { useAppSelector } from '../../../app/providers/store';

const CatalogPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { bikes } = useAppSelector(state => state.bikes);

    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

    const categories = useMemo(() => {
        const allCategories = (bikes || []).flatMap((bike) => bike.category || []);
        return Array.from(new Set(allCategories));
    }, [bikes]);


    const handleCategoryChange = (category: string) => {
        setSelectedCategory(prev =>
            prev.includes(category) ? prev.filter(e => e !== category) : [...prev, category],
        );
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
                <ProductList searchTerm={searchTerm} selectedCategories={selectedCategory} />

            </RightSection>

            <LeftSection>
                <FilterSection>
                    <FilterTitle onClick={() => setIsOpen(!isOpen)}>Фильтры</FilterTitle>
                    <FilterList>
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
                </FilterSection>
            </LeftSection>
        </Container>
    )
        ;
};

export default CatalogPage;
