import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

const Header = () => {
    return(
        <Nav>
            <h1>BLOG</h1>
        </Nav>
    )
}
const Nav = styled.nav`
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');
text-align: center;
font-size:2em;
font-family: 'Monoton', cursive;
width:100%;
margin-top:5%;
color:#ff8e91;
h1:hover{
    color:#235ba8;
    transition:ease-in-out 1s;

}
`
export default Header