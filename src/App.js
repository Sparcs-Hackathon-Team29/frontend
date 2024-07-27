import React from "react";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Navbar from "./components/toolbar/Navbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

const Container = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Container>안녕하세요</Container>
    </div>
  );
}

export default App;
