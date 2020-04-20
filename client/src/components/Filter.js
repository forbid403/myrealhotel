import React, {useState} from 'react'
import styled from 'styled-components'
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

const Container = styled.div`
    padding : 5% 5% 5% 5%;
    width : 100%;
`;

const Label = styled.p`
    
`;

export default () => {

    const [value, setValue] = useState([20, 40]);

    return (
        <Container>
            <Label>1박당 요금</Label>
            <Range defaultValue={[]} allowCross={false} value={value}/>

            <Label>리뷰 점수</Label>
            <Range/>
            
            <Label>시설 정보</Label>
            <div><input type="checkbox"/> Free Wifi</div>
            <div><input type="checkbox"/> Free Parking</div>
            <div><input type="checkbox"/> Free Airport Pickup</div>
        </Container>

    )
}