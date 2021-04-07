import React from 'react'
import  styled from '@emotion/styled';
import tw, {  css } from 'twin.macro';
import UilTimes from '../../assets/icons/uil-times';


const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem 3rem 3rem 3rem;
  display:flex; 
  flex-direction:column;
  align-items:center;
  width: 100%;
  position: relative;
  box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
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

const Cancel = styled.div`
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 position: absolute;
 right: 3px;
 top: 4px;
 &:hover{
  background: rgb(255, 234, 234, 0.9);
  transition: background 0.8s;
 }
 svg{
   cursor: pointer;
 }
`

export const Modal = () => {
    return (
        <Container size='md' >
          <Cancel><UilTimes size='2.5rem'/></Cancel>
         <Head>
            <Title>This is a modal</Title>
         </Head>
         <Body>
         I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you'll wonder how you ever worked with CSS any other way.
         </Body>
        </Container>
    )
}
