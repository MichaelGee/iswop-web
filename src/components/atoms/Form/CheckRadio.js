import styled from '@emotion/styled';
import tw, {  css } from 'twin.macro';


export const CheckBox = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 0.1rem solid gray;
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  position: relative;
  transition: all 0.1s;
  width: 2rem;

  &::after {
    background-color: #2196f3;
    border-radius: 50%;
    content: '';
    display: block;
    height: 1.1rem;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.1rem;
    ${({ checked }) =>
    checked &&
    css`
      border-color: #2196f3;
      &::after {
        opacity: 1;
      }
    `}
  }
  `