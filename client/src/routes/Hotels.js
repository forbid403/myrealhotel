import React, {useState} from 'react'
import { useQuery } from "@apollo/react-hooks";
import Filter from '../components/Filter'
import Hotel from '../components/Hotel'
import Recent from '../components/Recent'
import styled, { createGlobalStyle } from 'styled-components'
import { gql } from 'apollo-boost'

const GET_HOTELS = gql`
    query hotels($minPrice: Int, $maxPrice: Int, $freeServices: [String], $reviewScore: Int){
        hotels(minPrice: $minPrice, maxPrice: $maxPrice, freeServices: $freeServices, reviewScore: $reviewScore){
            id
            name
            freeServices
            rate
            imageUrl
            totalReviewCount
            reviewScore
        }
    }
`;
const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
  background-color : gainsboro;
}`;

const Header = styled.div`
    height : 10%;
    width : 100%;
    background-color:beige;
    margin-bottom: 10px;
`;
const Root = styled.div`
    height : 100vh;
    width : 100%;
`;
const Container = styled.div`
    height: 90%;
    width : 100%;
    display : flex;
`;
const Column = styled.div`
    margin : 1% 1% 1% 1%;
    width: ${props => props.width};
`;

const Row = styled.div`
    display : flex;
    flex-direction: row;
    margin-bottom : 1%;
    background-color : white;
    height : ${props => props.height};
`;

const HotelLists = styled.div`
    width : 100%;
    height : 90%;
    overflow: scroll;
    align-items: center;
    display: flex;
    flex-direction: column;
`;
export default () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [maxReview, setMaxReview] = useState(10);
    const [freeServices, setFreeServices] = useState([]);
    const { loading, error, data, refetch } = useQuery(GET_HOTELS, {
        variables : { "minPrice" : minPrice, "maxPrice" : maxPrice, "reviewScore": maxReview, "freeServices" : freeServices}
    });
    
    return (
        <React.Fragment>
            <GlobalStyle />
            <Root>
                {/* <Header>HEADER</Header> */}
                <Container>
                    <Column width={"20%"}>
                        <Row height={"100%"}>
                            <Filter 
                            setMinPrice={setMinPrice}
                            setMaxPrice={setMaxPrice}
                            setMaxReview={setMaxReview}
                            setFreeServices={setFreeServices}
                            />
                        </Row>
                    </Column>

                    <Column width={"80%"}>
                        <Row height={"10%"}>
                            <Recent />
                        </Row>
                        <HotelLists>
                            {
                                error ? <button onClick={() => refetch()}>retry</button> :
                                    loading ? "loading..." :
                                        data?.hotels?.map(hotel =>
                                            <Hotel key={hotel.id} info={hotel} />)
                            }
                        </HotelLists>
                    </Column>

                </Container>
            </Root>
        </React.Fragment>

    )
}