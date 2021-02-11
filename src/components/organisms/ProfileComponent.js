import React from 'react'
import styled from '@emotion/styled';
import UilAngleDown from '../../assets/icons/uil-angle-down';
import UilPower from '../../assets/icons/uil-power';
import UilUserCircle from '../../assets/icons/uil-user-circle';

const Container = styled.div`
display: flex;
align-items: center;
postion: relative;
`

const Avatar = styled.div`
  height: 2.5rem;
  object-fit: cover;
  width: 2.5rem;
  border-radius: 4rem;
  flex-shrink: 0;
  background: orange;
  margin: 0 0rem 0 1rem;
  cursor: pointer;
`;

const Menu = styled.div`
 position: absolute;
 top: 109%;
 left: 90%;
 background: #fff;
 border-radius: 0.5rem;
 box-shadow: 0px 3px 41px -4px  rgba(0,0,0,.3);
 :before{
    border-bottom: 12px solid #fff;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    content: '';
    left: 50%;
    position: absolute;
    top: -0.7rem;
    transform: translateX(-50%);
}
`

const MenuList = styled.ul`
 
`
const MenuItem = styled.li`
padding: 1rem 2rem;
display: flex;
align-items: center;
font-size: 1.3rem;
svg{
    width:1.4em;
    height:1.4em;
    margin-right: 0.5rem;
}
`


export const ProfileComponent = () => {
    return (
        <Container>
            <Avatar></Avatar>
            <Menu>
                <MenuList>
                <MenuItem><UilUserCircle/>Account</MenuItem>
                <MenuItem><UilPower/>Logout</MenuItem>
                </MenuList>
            </Menu>
         <UilAngleDown style={{cursor: "pointer"}}/>
        </Container>
        
    )
}
