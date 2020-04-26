import React from 'react'
import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
}`;

const Container = styled.div`
    font-size : 50pt;
    font-style : italic;
    width : 100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Root = styled.div`
    overflow : scroll;
    width : 100%;
    height : 100vh;
    background-image : url("https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80");

`;

const StyledLink = styled(Link)`
    text-decoration : none;
    color : white;
    &:hover {
        color : gold;
    }
    &:active{
        color : gainsboro;
    }
`;

export default () => {
    return (
        <Root>
            <GlobalStyle />
            <Container><StyledLink to="/hotels">To Hotel Lists</StyledLink></Container>
        </Root>

    )
}