import React from 'react'
import {Box as FlexBox} from 'rebass'
import  styled from '@emotion/styled';


const InputComponent = styled.input`
background-color: #fff;
border-radius: 0.3rem;
border: ${props => (props.error ? '1.5px solid #fe0000' : '1.5px solid #C8C8C8')};
padding: 0.7rem 0.8rem;
transition: .4s;
 width: 100%;
 border-radius: 0.3rem;
 &:focus{
    border-color: ${props => (props.error ? '#fe0000' : ' #1e88e5')};
    transition: border-color 0.2s ease-in-out;
    outline: 0;
}
`

const InputGroupContainer = styled(FlexBox)`
  width: 100%;
  border-radius: 8px;
  width: 100%;
  border-radius: ${props => (props.bordered ? '3rem' : '0.3rem')};
  border: ${props => (props.notRegular === true ? '1.5px solid #C8C8C8' : 'none')};
  input {
    background-color: transparent;
    border: ${props => (props.notRegular === true ? 'none' : '1.5px solid #C8C8C8')};
  }
`






const InputAddon = styled(FlexBox)`
  padding: 0 0.5rem;
  position: relative;
  width: 4rem;
`;

export const  InputGroup = ({addon, addonPosition, notRegular, error, bordered })=>(<InputGroupContainer  display="flex"
  flexDirection="row" notRegular={notRegular} error={error} bordered>
    {addonPosition === 'left' && (<InputAddon display="flex" alignItems="center" justifyContent="center">{addon}</InputAddon>)}
  <InputComponent autoComplete="on" addonPosition={addonPosition} />
  </InputGroupContainer>)
