import React from 'react'
import  styled from '@emotion/styled';
import tw, {  css } from 'twin.macro';


const Container = styled.div`
  background: skyblue;
  border-radius: 13.5px;
  padding: 2rem 3rem 3rem 3rem;
  display:flex; 
  flex-direction:column;
  align-items:center;
  width: 100%;
  ${({ size }) => {
    if (size === 'sm') {
      return css`
        max-width: 36rem;
      `;
    }
    if (size === 'md') {
      return css`
        max-width: 50rem;
      `;
    }
    if (size === 'lg') {
      return css`
        max-width: 72rem;
      `;
    }
  }}
`
const Head = styled.div`
 
`
const Title = styled.h4`
 font-weight: 600;
 margin: 1rem 0;
`
const Body = styled.div`
 font-size: 1.3rem;
`

export const Modal = () => {
    return (
        <Container size='sm' >
         <Head>
            <Title>This is a modal</Title>
         </Head>
         <Body>
         I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you'll wonder how you ever worked with CSS any other way.
         </Body>
        </Container>
    )
}
