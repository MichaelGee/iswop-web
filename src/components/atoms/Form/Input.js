import React from 'react'
import {Box as FlexBox} from 'rebass'
import  styled from '@emotion/styled';


const InputComponent = styled.input`
background-color: #fff;
border-radius: 0.3rem;
border: 1.5px solid #C8C8C8;
padding: 0.7rem 0.8rem;
transition: .4s;
&:focus{
    border-color: #1e88e5;
    transition: border-color 0.2s ease-in-out;
    outline: 0;
}
`

const InputGroupContainer = styled(FlexBox)`
  width: 100%;
`

const InputAddon = styled(FlexBox)`
  padding: 0 0.5rem;
  position: relative;
  width: 4rem;
`;

export const  InputGroup = ()=>{
  return (<InputGroupContainer><InputComponent/></InputGroupContainer>)
}