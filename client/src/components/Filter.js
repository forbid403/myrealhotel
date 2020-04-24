import React, { useState } from 'react'
import styled from 'styled-components'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


const Container = styled.div`
    padding : 5% 10% 10% 10%;
    width : 100%;
`;

const Label = styled.p`
`;
const SliderContainer = styled.div`
    padding-bottom : 20pt;

`;

const priceMarks = {
    0: 0,
    100: {
        style: { transform: 'translateX(-100%)' },
        label: '1,000,000+',
    }
};
const reviewMarks = {
    0: 0,
    100: 5
}
const SliderStyle = [{ borderColor: 'darkblue', backgroundColor: 'darkblue' }, { borderColor: 'darkblue', backgroundColor: 'darkblue' }]


export default () => {
    const [price, setPrice] = useState([0, 100]);
    const [review, setReview] = useState([0, 100]);

    const onPriceChange = (val) => {
        setPrice(val)
    }

    const onReviewChange = (val) => {
        setReview(val)
    }

    return (
        <Container>
            <SliderContainer>
                <Label>1박당 요금</Label>
                <Range allowCross={false} defaultValue={price} marks={priceMarks} onChange={onPriceChange}
                    trackStyle={SliderStyle} handleStyle={SliderStyle} />
            </SliderContainer>

            <SliderContainer>
                <Label>리뷰 점수</Label>
                <Range step={20} defaultValue={review} marks={reviewMarks} onChange={onReviewChange}
                    trackStyle={SliderStyle} handleStyle={SliderStyle} />
            </SliderContainer>

            <Label>시설 정보</Label>
            <div><input type="checkbox" /> Free Wifi</div>
            <div><input type="checkbox" /> Free Parking</div>
            <div><input type="checkbox" /> Free Airport Pickup</div>
        </Container>

    )
}