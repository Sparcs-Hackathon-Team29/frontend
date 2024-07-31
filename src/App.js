import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { MyMap } from "./pages/MyMap";
import Making from "./pages/Making";
import Loading from "./pages/Loading";
import Navbar from "./components/toolbar/Navbar";

import { Routes, Route, useLocation } from "react-router-dom";
import { NavermapsProvider } from "react-naver-maps";
import GlobalStyle from "./GlobalStyle";

function App() {
  const location = useLocation();
  const noNavPaths = ["/loading"]; //nav를 표시하지 않을 경로
  return (
    <div>
      <GlobalStyle />
      {!noNavPaths.includes(location.pathname) && <Navbar />}

      <NavermapsProvider ncpClientId="pfbhixakqq">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/map" element={<MyMap />} />
          <Route path="/make" element={<Making />} />
          <Route path="loading" element={<Loading />} />
        </Routes>
      </NavermapsProvider>
    </div>
  );
}

export default App;
