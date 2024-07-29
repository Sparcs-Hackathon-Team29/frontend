import React, { useState, useEffect, useRef } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
  width: 100%; /* 화면 전체 너비를 차지하도록 설정 */
`;
const InputForm = styled.input`
  display: flex;
  border: 1.5px solid #8cc63f;
  background-color: transparent;
  border-radius: 15px;
  width: 100%;
  height: 2rem;
  padding: 0.3rem;
  padding-left: 1rem;

  &::placeholder {
    color: #d9d9d9;
  }

  &:active {
    outline: none;
  }
`;
export function MyMap() {
  //<div ref={mapRef} style={{ width: "500px", height: "500px" }}></div>

  //마커를 클릭했을 때 실행할 이벤트 핸들러
  // const markerClickHandler = (id) => {
  //   navigate(`/ground/${id}`);
  // };

  function ClickMark() {
    alert();
  }
  return (
    <Container>
      <MapDiv style={{ height: 400, width: 400 }}>
        <NaverMap>
          <Marker
            defaultPosition={{ lat: 37.0012, lng: 127.1002 }}
            onClick={ClickMark}
          />
          <Marker defaultPosition={{ lat: 37.3595704, lng: 127.105399 }} />
        </NaverMap>
      </MapDiv>
    </Container>
  );
}
