import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display : flex;
    width : 100%;
    background-color : white;
    align-items: center;
`;
const ClickedHotel = styled.div`
    background-color : gray;
    padding: 10px 10px 10px 10px;
    margin-left: 10px;    
`;

let arr = ["temp1", "temp2"];

export default () => {
    return (
        <Container>
            {arr.map(hotel => <ClickedHotel>{hotel}</ClickedHotel>)}
        </Container>
    )
}