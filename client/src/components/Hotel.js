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
    background-image : url(${props => props.img});
    background-size : cover;
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

export default ({info}) => {
    return (
        <Container>
            <Column>
                <HotelImage img={info.imageUrl}/>
            </Column>
            <Column>
                <HotelInfo>
                    <Labels>{info.name}</Labels>
                    <Labels>{info.freeServices}</Labels>
                    <Labels>{info.rate}성급 호텔</Labels>
                    <Labels>가격~</Labels>
                </HotelInfo>
            </Column>
        </Container>
    )
}