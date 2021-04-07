import React from 'react'
import tw, {  css } from 'twin.macro';
import styled from '@emotion/styled'
import { keyframes} from '@emotion/react'




const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;


const TemplateButton = styled.button`

 ${tw`
 text-center text-xl font-medium rounded-md py-3 px-9
 `}
 text-transform: uppercase;
 font-weight: 400;
 ${({ loading }) =>
 loading &&
 css`
   color: transparent !important;
   pointer-events: none;
   position: relative;
   outline: none;
   &::after {
     content: '';
     animation: ${rotate} 550ms infinite linear;
     border: 2px solid #2196f3;
     border-radius: 50%;
     border-right-color: transparent !important;
     border-top-color: transparent !important;
     height: 1.2em;
     width: 1.2em;
     position: absolute;
     left: calc(50% - (1.2em / 2));
     top: calc(50% - (1.2em / 2));
   }
 `}
 ${({large})=>
 large &&
 css`
  width: 100%; 
  font-size: 1.5rem;
  padding: 1.8rem 2.5rem;
`}
`

const PrimaryButton = styled(TemplateButton)`
 ${tw`
  bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-600 
 `}
 
`


const SecondaryButton = styled(TemplateButton)`
 ${tw`

 bg-gray-100 text-black 
 `}

`

export const Button = () => {
    return (
        <div>
              <PrimaryButton  type="submit">Check avaliability</PrimaryButton>
        </div>
    )
}

export const OutlineButton =()=>{
    return(
        <div>
            <SecondaryButton  type="submit">Check avaliability</SecondaryButton>
        </div>
    )
}

