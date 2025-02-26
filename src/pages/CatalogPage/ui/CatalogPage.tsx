import {
    Container,
    FilterSection,
    LeftSection,
    RightSection,
    SearchButton,
    SearchContainer,
    SearchInput,
} from './catalog.styles';
import { useState } from 'react';
import ProductList from '../../../features/bikes/ui/PostList';

const CatalogPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
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
                <ProductList searchTerm={searchTerm}></ProductList>
            </RightSection>

            <LeftSection>
                <FilterSection>
                    <h2 onClick={() => setIsOpen(!isOpen)}>Фильтры</h2>
                    {isOpen && (
                        <div>
                            <label>
                                <input type="checkbox" /> Фильтр 1
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" /> Фильтр 2
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" /> Фильтр 2
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" /> Фильтр 2
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" /> Фильтр 2
                            </label>
                        </div>
                    )}
                </FilterSection>
            </LeftSection>
        </Container>
    );
};

export default CatalogPage;
