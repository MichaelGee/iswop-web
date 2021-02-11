import React from 'react'
import styled from '@emotion/styled';
import LogoIcon from '../../assets/logo.svg'
import UilShoppingCart from '../../assets/icons/uil-shopping-cart';
import { ProfileComponent } from './ProfileComponent';



const Container = styled.div`
 background: #fff;
 padding: 1rem 3rem;
 position: fixed;
 display: flex;
 align-item: center;
 justify-content: space-between;
 box-shadow: 0px 8px 8px -6px rgba(0,0,0,.2);
`
const Logo = styled.img`
 width: 6%;
 cursor: pointer;
`

const List = styled.ul`
 display: flex;
 align-items: center;
`
const Links = styled.li`
 margin-right: 3rem;
 text-transform: caplitalize;
 font-size: 1.4rem;
 font-weight: 600;
 cursor: pointer;
`
const UserOption = styled.div`
 display: flex;
 align-items: center;
`



export const Navbar = () => {
    return (
       <Container>
        <Logo src={LogoIcon} alt='logo'></Logo>
        <List>
        <Links>Explore</Links>
        <Links>About us</Links>
        <Links>How it works</Links>
        <Links>Impact</Links>
        </List>
        

        <UserOption>
         <UilShoppingCart height="1.5em" width="1.5em" style={{cursor: "pointer"}}/>
         <ProfileComponent/>
        </UserOption>
       </Container>
    )
}
