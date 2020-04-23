import React, { useContext } from 'react'
import styled from 'styled-components'
import RecentContext from './RecentContext'
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
export default () => {
     const { clickedHotels } = useContext(RecentContext);
    
    return (
        <Container>
            {clickedHotels.map(hotel => <ClickedHotel key={Math.random()}>{hotel}</ClickedHotel>)}
        </Container>
    )
}