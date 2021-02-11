import React from 'react'
import styled from '@emotion/styled';
import { InputGroup } from './Input';
import UilSearch from '../../../assets/icons/uil-search';

const SearchComponent = styled(InputGroup)`
border-radius: 0.3rem;
overflow: hidden;
padding: 0 1rem;
input {
  padding-left: 1rem;
}
`

export const SearchBar = () => {
    return (
        <SearchComponent
         addon={<UilSearch width={20} height={19} style={{ cursor: 'pointer' }} fill/>}
         addonPosition="left"
        />
    )
}
