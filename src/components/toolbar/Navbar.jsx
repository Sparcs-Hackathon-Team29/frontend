import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import rabbit_log2 from "../../img/rabbit_log2.png";

const Container = styled.div`
  position: relative;
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
  padding-top: 30px;
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
  color: ${(props) => props.color};
`;

const LoginButton = styled(ButtonBase)`
  width: 122px;
  height: 54px;
  font-size: 24px;
  font-weight: 700;
  background-color: #20fb7c;
  border: none;
  border-radius: 8px;
  color: #1c1e1b;
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
  justify-content: center;
  width: 206px;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonColor = (path) => {
    if (location.pathname === path) {
      return path === "/" ? "rgba(221,226,224,1)" : "#3B3B3B";
    }
    return "rgba(221,226,224,0.6)";
  };

  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToMyMap = () => {
    navigate("/map");
  };
  const goToMaking = () => {
    navigate("/make");
  };

  return (
    <div>
      <Container>
        <Img src={rabbit_log2} alt="Rabbit Logo" />

        <Box />
        <Button color={getButtonColor("/")} onClick={goToHome}>
          Home
        </Button>
        <Button color={getButtonColor("/make")} onClick={goToMaking}>
          AI 스케줄
        </Button>
        <Button color={getButtonColor("/map")} onClick={goToMyMap}>
          AI 추천
        </Button>
        <ButtonWrapper>
          <LoginButton onClick={goToLogin}>로그인</LoginButton>
        </ButtonWrapper>
      </Container>
    </div>
  );
};

export default Navbar;
