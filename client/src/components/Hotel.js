import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import RecentContext from './RecentContext';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Filter from '../components/Filter'

const Container = styled.div`
    height : 250px;
    width : 75%;
    display: flex;
    margin : 3% 3% 3% 3%;
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

const GET_PRICE = gql`
    query prices($id: Int!){
        prices(id: $id){
            price
        }
    }
`;

export default ({ info }) => {
    const { pushHotels } = useContext(RecentContext);
    const { loading, error, data, refetch } = useQuery(GET_PRICE, {variables : {"id" : info.id}});
    const [retryCnt, setRetryCnt] = useState(1);
    const [tempError, setError] = useState(false);

    const handleClickHotel = (hotelName, e) => {
        alert(`${hotelName} 을 조회하였습니다.`)
        pushHotels(hotelName)
    }

    const handleErrorBtnClicked = (e) =>{
        e.stopPropagation();
        if(retryCnt >= 3) {
            setError(true)
            return;
        }
        setRetryCnt(retryCnt+1);
        refetch();
    }

    return (
        <Container onClick={handleClickHotel.bind(this, info.name)}>
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
                        {info.freeServices.map((service, idx) => <Service key={idx}>{service}</Service>)}
                    </Facilities>
                    <p>{info.rate}성급 호텔</p>
                </HotelInfo>

                <PriceInfo>
                    <Price>
                        {error ?
                            tempError ? <div>일시적 오류</div> :
                                <button onClickCapture={handleErrorBtnClicked.bind(this)}>retry</button>:
                                loading ? "loading..." : `${data.prices.price} 원~`
                        }
                    </Price>
                </PriceInfo>
            </Column2>
        </Container>        
    )
}