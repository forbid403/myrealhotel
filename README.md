
# 🏨 My Real Hotel

### Cloning Hotel Website with React, Apollo, Styled Components and GraphQL

- 개발 기간 : 1주일
- 개발 인원 : 1명
- 기술 스택 : React, Apollo, GraphQL, StyledComponents

---

## Main Page
<img width="1440" alt="main" src="https://user-images.githubusercontent.com/41617388/80303088-fc1ad200-87e8-11ea-8b1e-6e6bb4444e18.png">
- 호텔 리스트로 링크, 마우스 호버 시 색깔 변경
  

## Hotel List Page
<img width="1440" alt="hotellists" src="https://user-images.githubusercontent.com/41617388/80303091-fd4bff00-87e8-11ea-8dda-968f580f961a.png">

- 왼쪽의 Filter Bar로 호텔들을 필터링 할 수 있다. 가격, 리뷰 점수, 시설 정보로 필터링 할 수 있다.
- 호텔 클릭 시 상단의 바에 최근 클릭한 호텔을 저장한다. 중복이 되지 않고, 5개가 넘을 시 가장 먼저 본 호텔부터 삭제 된다.
- 데이터 로딩 중을 확인할 수 있다.
- 데이터 로딩 실패 시 retry 버튼이 생성되고, 3번 이상 호출 시 오류임을 표시한다.
- 호텔 가격 정보와 호텔 정보는 따로 렌더링 된다.


## 트러블슈팅
- https://forbid403.github.io/react/React-useContext-%EB%B0%B0%EC%97%B4-%EC%98%88%EC%A0%9C/
- https://forbid403.github.io/til/TIL-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81,-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%BA%A1%EC%B3%90%EB%A7%81,-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/
- https://forbid403.github.io/til/TIL-%EC%8A%A4%EB%A1%9C%ED%8B%80%EA%B3%BC-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8B%B1/

---
## 실행 방법

`git clone https://github.com/forbid403/myrealhotel.git`

`cd myrealhotel`

`yarn start`


---

## TODOS
- [ ] 배포
- [ ] 미디어쿼리 적용


