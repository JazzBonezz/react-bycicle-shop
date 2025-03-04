import React from 'react';
import { SearchContainer, SearchInput as StyledInput } from './styles';

interface SearchInputProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <SearchContainer>
            <StyledInput
                type="text"
                placeholder="Поиск"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </SearchContainer>
    );
};

export default SearchInput;
