import React from 'react'
import  styled from '@emotion/styled';
import { CheckBox } from './CheckRadio';
import { Box } from 'rebass';
import PropTypes from 'prop-types';



const Wrapper = styled(Box)`
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const CheckBoxComponent = styled(CheckBox)`
margin-right: 1rem;
`

const Text = styled.p`

`


export const Radio=()=> {
    return (
        <Wrapper>
            <CheckBoxComponent checked/>
            <Text>Budweiser</Text>
        </Wrapper>
    )
}

Radio.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  };
