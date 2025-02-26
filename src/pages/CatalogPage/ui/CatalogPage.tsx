import {
    Container, FilterSection,
    LeftSection,
    RightSection,
    SearchButton,
    SearchContainer,
    SearchInput
} from "./catalog.styles";
import {useState} from "react";



const CatalogPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <RightSection>

                <SearchContainer>
                    <SearchInput/>
                    <SearchButton>Поиск</SearchButton>
                </SearchContainer>
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