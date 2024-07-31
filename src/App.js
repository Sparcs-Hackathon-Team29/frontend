import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import RandomMaking from "./pages/RandomMaking";
import Making from "./pages/Making";
import Loading from "./pages/Loading";
import Loading2 from "./pages/Loading2";
import Randomresult from "./pages/Randomresult";
import Mymade from "./pages/Myspot";
import Mypage from "./pages/Mypage";
import Footer from "./components/toolbar/Footer";
import Navbar from "./components/toolbar/Navbar";

import { Routes, Route, useLocation } from "react-router-dom";
import { NavermapsProvider } from "react-naver-maps";
import GlobalStyle from "./GlobalStyle";

function App() {
  const location = useLocation();
  const noNavPaths = ["/loading", "/loading2"]; //nav를 표시하지 않을 경로
  return (
    <div>
      <GlobalStyle />
      {!noNavPaths.includes(location.pathname) && <Navbar />}

      <NavermapsProvider ncpClientId="pfbhixakqq">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/randommake" element={<RandomMaking />} />
          <Route path="/randomresult" element={<Randomresult />} />
          <Route path="/make" element={<Making />} />
          <Route path="loading" element={<Loading />} />
          <Route path="loading2" element={<Loading2 />} />
          <Route path="/myspot" element={<Mymade />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </NavermapsProvider>
    </div>
  );
}

export default App;
