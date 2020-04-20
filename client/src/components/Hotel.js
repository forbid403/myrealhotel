import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 250px;
    display:flex;
    margin : 5% 5% 5% 5%;
`;

const Column = styled.div`
    width: 50%;
    height : 100%;
`;

const HotelImage = styled.div`
    width : 100%;
    height : 100%;
    background-color : yellowgreen;
`;

const HotelInfo = styled.div`
    display : flex;
    flex-direction: column;
    width : 100%;
    height : 100%;
    justify-content: space-between;
    background-color : lightblue;
`;

const Labels = styled.p`
`;

export default ()=>{
    return(
        <Container>
            <Column>
                <HotelImage/>
            </Column>
            <Column>
                <HotelInfo>
                    <Labels>Hotel Name</Labels>
                    <Labels>Facilities</Labels>
                    <Labels>Rank</Labels>
                </HotelInfo>
            </Column>
        </Container>
    )
}