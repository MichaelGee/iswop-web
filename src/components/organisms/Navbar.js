import React from 'react'
import styled from '@emotion/styled';
import LogoIcon from '../../assets/logo.svg'
import UilShoppingCart from '../../assets/icons/uil-shopping-cart';
import { ProfileComponent } from './ProfileComponent';
import { SearchBar } from '../atoms/Form/SearchBar';



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
 text-transform: capitalize;
 font-size: ${props => props.theme.font.size.small};
 font-weight: ${props => props.theme.font.weight.medium};
 cursor: pointer;
`
const UserOption = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
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
          <SearchBar />
         {/* <UilShoppingCart height="1.5em" width="1.5em" style={{cursor: "pointer", marginLeft: '1rem'}}/> */}
         <ProfileComponent/>
        </UserOption>
       </Container>
    )
}
