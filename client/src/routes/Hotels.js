import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import Filter from '../components/Filter'
import Hotel from '../components/Hotel'
import Recent from '../components/Recent'
import styled, { createGlobalStyle } from 'styled-components'
import { gql } from 'apollo-boost'

const GET_HOTELS = gql`
    {
        hotels{
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
    const { loading, error, data, refetch } = useQuery(GET_HOTELS);
    console.log(loading, data);
    return (
        <React.Fragment>
            <GlobalStyle />
            <Root>
                {/* <Header>HEADER</Header> */}
                <Container>
                    <Column width={"20%"}>
                        <Row height={"100%"}>
                            <Filter />
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
                                            <Hotel info={hotel} />)
                            }
                            </HotelLists>
                    </Column>

                </Container>
            </Root>
        </React.Fragment>

    )
}