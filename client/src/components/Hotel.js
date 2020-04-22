import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 250px;
    width : 75%;
    display: flex;
    margin : 5% 5% 5% 5%;
`;

const Column = styled.div`
    width: 40%;
    height : 100%;
`;

const Column2 = styled.div`
    width: 60%;
    height : 100%;
    padding: 0pt 10pt 0pt 10pt;
    background-color : white;
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
    height : 90%;
    justify-content : space-evenly;
`;

const Facilities = styled.div`
    display : flex;
`;

const Service = styled.div`
    color : limegreen;
    border-radius : 5px;
    border : 1px solid limegreen;
    font-size : 10pt;
    margin-left : 5pt;
    padding : 3pt 3pt 3pt 3pt;
`;

const Name = styled.div`
    font-weight : 600;
    font-size : 15pt;
    
`;

const PriceInfo = styled.div`
    width: 100%;
    height : 10%;
`;

const Price = styled.div`
    float: right;
    background-color: cornflowerblue;
    color: white;
    padding: 0pt 10pt 0pt 10pt;
`;

const ReviewScore = styled.span`
    border-radius: 4pt;
    width : 30px;
    height: 30px;
    text-align : center;
    background-color: darkblue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left : 3pt;
`;

const ReviewInfo = styled.div`
    margin-left : auto;
    align-items : center;
    display : flex;
`;

const Row = styled.div`
    display:flex;
    height : 30px;
    width : 100%;
    align-items : center;
`;

export default ({ info }) => {
    return (
        <Container>
            <Column>
                <HotelImage img={info.imageUrl} />
            </Column>
            <Column2>
                <HotelInfo>
                    <Row>
                        <Name>{info.name}</Name>
                        <ReviewInfo>
                            <div>{info.totalReviewCount}개의 이용 후기</div>
                            <ReviewScore>{info.reviewScore}</ReviewScore>
                        </ReviewInfo>
                    </Row>

                    <Facilities>
                        {info.freeServices.map(service => <Service>{service}</Service>)}
                    </Facilities>
                    <p>{info.rate}성급 호텔</p>
                </HotelInfo>

                <PriceInfo>
                    <Price>
                        hello원~
                    </Price>
                </PriceInfo>
            </Column2>
        </Container>
    )
}