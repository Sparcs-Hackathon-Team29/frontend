import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../AuthContext"; // 가정한 경로입니다. 실제 경로에 맞게 수정하세요.

import rabbit_log2 from "../../img/rabbit_log2.png";
import rabbit_log3 from "../../img/rabbit_log3.png";

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
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border-radius: 8px;
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
  const { isLoggedIn, logout } = useAuth();

  const getButtonColor = (path) => {
    if (location.pathname === path) {
      return path === "/" ? "rgba(221,226,224,1)" : "rgba(221,226,224,0.6)";
    } else if (
      location.pathname === "/myspot" ||
      location.pathname === "/make"
    ) {
      return path === "/make" ? "#3B3B3B" : "rgba(59,59,59,0.6)";
    } else if (
      location.pathname === "/randommake" ||
      location.pathname === "/randomresult"
    ) {
      return path === "/randommake" ? "#3B3B3B" : "rgba(59,59,59,0.6)";
    }
    return "rgba(59,59,59,0.6)";
  };

  const getImageSrc = () => {
    return location.pathname === "/" ? rabbit_log2 : rabbit_log3;
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("access");
      logout();
      alert("로그아웃 되었습니다.");
      setTimeout(() => {
        navigate("/"); // 메인페이지 이동
      }, 1500);
    }
  };

  const goToHome = () => {
    navigate("/");
  };
  const goToMaking = () => {
    navigate("/make");
  };
  const goToRandommake = () => {
    navigate("/randommake");
  };
  const goToMypage = () => {
    navigate("/mypage");
  };

  return (
    <div>
      <Container>
        <Img src={getImageSrc()} alt="Rabbit Logo" onClick={goToHome} />

        <Button color={getButtonColor("/")} onClick={goToHome}>
          Home
        </Button>
        <Button color={getButtonColor("/make")} onClick={goToMaking}>
          나의 스팟
        </Button>
        <Button color={getButtonColor("/randommake")} onClick={goToRandommake}>
          AI 추천
        </Button>
        <Button color={getButtonColor("/mypage")} onClick={goToMypage}>
          보관함
        </Button>
        <ButtonWrapper>
          <LoginButton
            onClick={isLoggedIn ? handleLogout : goToLogin}
            bgColor={isLoggedIn ? "#1B1B1B" : "#20FB7C"}
            textColor={isLoggedIn ? "#20FB7C" : "#1C1E1B"}
          >
            {isLoggedIn ? "로그아웃" : "로그인"}
          </LoginButton>
        </ButtonWrapper>
      </Container>
    </div>
  );
};

export default Navbar;
