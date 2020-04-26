import fetch from "node-fetch"

const API_URL = "https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev";

export const getPrices = async(id)=>{
   let REQ_URL = API_URL;
   REQ_URL = REQ_URL + `/hotel-prices?ids=${id}`;
   
   const fetched = await fetch(REQ_URL).then(res => res.json());

   return {id : parseInt(id), price : fetched[id]}
}

export const getHotels = async(minPrice, maxPrice, freeServices, reviewScore)=>{
   let REQ_URL = API_URL;
   REQ_URL+= `/hotels?filters=`;

   REQ_URL += `PRICE=${minPrice}:${maxPrice}|`

   if(reviewScore){
      REQ_URL += `REVIEW-SCORE=${reviewScore}|`;
   }
   if(freeServices){
      REQ_URL += `FREE=`;
      freeServices.map((s=>REQ_URL+= `${s},`));
   }

   const fetched = await fetch(REQ_URL).then(res => res.json());
   return fetched;
};

