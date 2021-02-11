import React from 'react'
import {Box as FlexBox} from 'rebass'
import  styled from '@emotion/styled';


const InputComponent = styled.input`
background-color: #fff;
border: transparent;
padding: 0.7rem 0.8rem;
transition: .4s;
 width: 100%;
 border-radius: 0.3rem;
 &:focus{
    border-color: #1e88e5;
    transition: border-color 0.2s ease-in-out;
    outline: 0;
}
`

const InputGroupContainer = styled(FlexBox)`
  width: 100%;
  border-radius: 8px;
  width: 100%;
  border-radius: 0.3rem;
  border: 1.5px solid #C8C8C8;
  input {
    background-color: transparent;
  }
`






const InputAddon = styled(FlexBox)`
  padding: 0 0.5rem;
  position: relative;
  width: 4rem;
`;

export const  InputGroup = ({addon, addonPosition})=>(<InputGroupContainer  display="flex"
  flexDirection="row">
    {addonPosition === 'left' && (<InputAddon display="flex" alignItems="center" justifyContent="center">{addon}</InputAddon>)}
  <InputComponent autoComplete="on" addonPosition={addonPosition}/>
  </InputGroupContainer>)
