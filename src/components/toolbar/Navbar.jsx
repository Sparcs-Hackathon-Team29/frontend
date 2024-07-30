import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import rabbit_log2 from "../../img/rabbit_log2.png";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 2;
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 0;
  gap: 16px;
`;

const ButtonBase = styled.button`
  width: 206px;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
`;

const Button = styled(ButtonBase)`
  font-size: 24px;
  color: ${(props) => props.color || "rgba(59, 59, 59, 0.6)"};
`;

const LoginButton = styled(ButtonBase)`
  font-size: 24px;
  color: #3b3b3b;
`;

const Box = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 206px;
  font-weight: 600;
  border: none;
  margin: 0;
  padding: 0;
`;

const Img = styled.img`
  width: 206px;
  height: 64px;
  border: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToMyMap = () => {
    navigate("/map");
  };
  return (
    <div>
      <Container>
        <Img src={rabbit_log2} alt="Rabbit Logo" />

        <Box />
        <Button color={"#3b3b3b"} onClick={goToHome}>
          Home
        </Button>
        <Button>AI 스케줄</Button>
        <Button onClick={goToMyMap}>AI 추천</Button>
        <LoginButton onClick={goToLogin}>로그인</LoginButton>
      </Container>
    </div>
  );
};

export default Navbar;
