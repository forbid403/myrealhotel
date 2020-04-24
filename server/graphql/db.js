import fetch from "node-fetch"

const API_URL = "https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev";

const hotelLists =  [
   {
      "id":0,
      "name":"신라 레드호텔",
      "freeServices":[
         "FREE-WIFI",
         "FREE-PARKING"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_6-min.jpg",
      "rate":3,
      "reviewScore":7.8,
      "totalReviewCount":211
   },
   {
      "id":1,
      "name":"D 하우스",
      "freeServices":[
         "FREE-PARKING",
         "FREE-AIRPORT-PICKUP"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_6-min.jpg",
      "rate":5,
      "reviewScore":7,
      "totalReviewCount":309
   },
   {
      "id":2,
      "name":"남산 화이트하우스",
      "freeServices":[

      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_1-min.jpg",
      "rate":4,
      "reviewScore":8.3,
      "totalReviewCount":132
   },
   {
      "id":3,
      "name":"홀리데이인 블랙하우스",
      "freeServices":[
         "FREE-WIFI"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_9-min.jpg",
      "rate":3,
      "reviewScore":8.6,
      "totalReviewCount":136
   },
   {
      "id":4,
      "name":"E 블랙게스트하우스",
      "freeServices":[
         "FREE-WIFI",
         "FREE-AIRPORT-PICKUP"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_7-min.jpg",
      "rate":3,
      "reviewScore":9.2,
      "totalReviewCount":158
   },
   {
      "id":5,
      "name":"S 블루게스트하우스",
      "freeServices":[
         "FREE-WIFI",
         "FREE-AIRPORT-PICKUP"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_2-min.jpg",
      "rate":3,
      "reviewScore":9.2,
      "totalReviewCount":37
   },
   {
      "id":6,
      "name":"석촌 레드게스트하우스",
      "freeServices":[
         "FREE-WIFI",
         "FREE-AIRPORT-PICKUP"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_6-min.jpg",
      "rate":5,
      "reviewScore":8.9,
      "totalReviewCount":197
   },
   {
      "id":7,
      "name":"R 하얏트게스트하우스",
      "freeServices":[
         "FREE-PARKING",
         "FREE-AIRPORT-PICKUP"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_7-min.jpg",
      "rate":3,
      "reviewScore":9.3,
      "totalReviewCount":108
   },
   {
      "id":8,
      "name":"O 하얏트호텔",
      "freeServices":[
         "FREE-WIFI",
         "FREE-PARKING"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_8-min.jpg",
      "rate":5,
      "reviewScore":7.9,
      "totalReviewCount":494
   },
   {
      "id":9,
      "name":"C 블루게스트하우스",
      "freeServices":[
         "FREE-PARKING",
         "FREE-AIRPORT-PICKUP"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_4-min.jpg",
      "rate":4,
      "reviewScore":8.7,
      "totalReviewCount":167
   },
   {
      "id":10,
      "name":"T 호스텔",
      "freeServices":[
         "FREE-WIFI"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_10-min.jpg",
      "rate":5,
      "reviewScore":7.9,
      "totalReviewCount":426
   },
   {
      "id":11,
      "name":"쁘띠 하얏트하우스",
      "freeServices":[
         "FREE-PARKING",
         "FREE-AIRPORT-PICKUP"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_4-min.jpg",
      "rate":5,
      "reviewScore":8.4,
      "totalReviewCount":363
   },
   {
      "id":12,
      "name":"E 레드호텔",
      "freeServices":[
         "FREE-WIFI",
         "FREE-AIRPORT-PICKUP",
         "FREE-PARKING"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_7-min.jpg",
      "rate":4,
      "reviewScore":9.4,
      "totalReviewCount":58
   },
   {
      "id":13,
      "name":"S 블루하우스",
      "freeServices":[

      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_5-min.jpg",
      "rate":4,
      "reviewScore":8,
      "totalReviewCount":399
   },
   {
      "id":14,
      "name":"N 하얏트게스트하우스",
      "freeServices":[

      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_2-min.jpg",
      "rate":5,
      "reviewScore":8.3,
      "totalReviewCount":87
   },
   {
      "id":15,
      "name":"N 화이트호텔",
      "freeServices":[
         "FREE-WIFI",
         "FREE-PARKING"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_4-min.jpg",
      "rate":4,
      "reviewScore":8.2,
      "totalReviewCount":439
   },
   {
      "id":16,
      "name":"L 그랜드호텔",
      "freeServices":[
         "FREE-PARKING",
         "FREE-AIRPORT-PICKUP"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_8-min.jpg",
      "rate":5,
      "reviewScore":8.5,
      "totalReviewCount":151
   },
   {
      "id":17,
      "name":"백제 블랙호텔",
      "freeServices":[
         "FREE-WIFI",
         "FREE-AIRPORT-PICKUP",
         "FREE-PARKING"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_1-min.jpg",
      "rate":5,
      "reviewScore":9.8,
      "totalReviewCount":26
   },
   {
      "id":18,
      "name":"U 블루게스트하우스",
      "freeServices":[

      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_9-min.jpg",
      "rate":3,
      "reviewScore":9.6,
      "totalReviewCount":464
   },
   {
      "id":19,
      "name":"W 블랙호스텔",
      "freeServices":[
         "FREE-WIFI",
         "FREE-AIRPORT-PICKUP",
         "FREE-PARKING"
      ],
      "imageUrl":"https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_9-min.jpg",
      "rate":4,
      "reviewScore":9.9,
      "totalReviewCount":216
   }
];


export const getPrices = async(id)=>{
   let REQ_URL = API_URL;
   REQ_URL = REQ_URL + `/hotel-prices?ids=${id}`;
   
   const fetched = await fetch(REQ_URL).then(res => res.json());

   return {id : parseInt(id), price : fetched[id]}
}

export const getHotels =()=>{
   //let REQ_URL = API_URL;
   return hotelLists;
};

