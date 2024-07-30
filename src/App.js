import React from "react";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { MyMap } from "./pages/MyMap";
import Navbar from "./components/toolbar/Navbar";

import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavermapsProvider } from "react-naver-maps";
import GlobalStyle from "./GlobalStyle";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  //const location = useLocation();
  //const noFooterPaths = ["/login", "/signup"]; //nav를 표시하지 않을 경로
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      {/*{!noFooterPaths.includes(location.pathname) && }*/}
      <NavermapsProvider ncpClientId="pfbhixakqq">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/map" element={<MyMap />} />
        </Routes>
      </NavermapsProvider>
    </div>
  );
}

export default App;
