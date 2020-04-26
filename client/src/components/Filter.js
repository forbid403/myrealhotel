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
    1000000: {
        style: { transform: 'translateX(-100%)' },
        label: '1,000,000+',
    }
};
const reviewMarks = {
    0: 0,
    10 : 10
}
const SliderStyle = [{ borderColor: 'darkblue', backgroundColor: 'darkblue' }, { borderColor: 'darkblue', backgroundColor: 'darkblue' }]
const checkBox = [{isChecked:false, value:"FREE-WIFI"}, {isChecked:false, value:"FREE-PARKING"}, {isChecked:false, value:"FREE-AIRPORT-PICKUP"}];

export default (props) => {
    const [price, setPrice] = useState([0, 1000000]);
    const [review, setReview] = useState([0, 10]);

    const onPriceChange = (val) => {
        setPrice(val);
        props.setMinPrice(price[0]);
        props.setMaxPrice(price[1]);
    }

    const onReviewChange = (val) => {
        setReview(val);
        props.setMaxReview(review[1]);
    }

    const onFreeServicesCheck = (e) =>{
        const id = e.target.id;
        checkBox[id].isChecked === true? checkBox[id].isChecked = false : checkBox[id].isChecked = true;
        
        let setCheckbox = [];
        checkBox.map(c => {if(c.isChecked===true)setCheckbox.push(c.value); console.log(c.value, c.isChecked)});
        props.setFreeServices(setCheckbox);
    }

    return (
        <Container>
            <SliderContainer>
                <Label>1박당 요금</Label>
                <Range allowCross={false} defaultValue={price} marks={priceMarks} onChange={onPriceChange}
                    trackStyle={SliderStyle} handleStyle={SliderStyle} max={1000000} />
            </SliderContainer>

            <SliderContainer>
                <Label>리뷰 점수</Label>
                <Range step={1} defaultValue={review} marks={reviewMarks} onChange={onReviewChange}
                    trackStyle={SliderStyle} handleStyle={SliderStyle} max={10}/>
            </SliderContainer>

            <Label>시설 정보</Label>
            <div><input type="checkbox" id={0} onChange={onFreeServicesCheck} /> Free Wifi</div>
            <div><input type="checkbox" id={1} onChange={onFreeServicesCheck}/> Free Parking</div>
            <div><input type="checkbox" id={2} onChange={onFreeServicesCheck}/> Free Airport Pickup</div>
        </Container>

    )
}