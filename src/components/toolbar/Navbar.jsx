import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../AuthContext";

import rabbit_log2 from "../../img/rabbit_log2.png";
import rabbit_log3 from "../../img/rabbit_log3.png";

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 2;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
    const currentPath = location.pathname;

    if (currentPath === path) {
      if (path === "/") {
        return "#DDE2E0"; // Home 글자 색상
      } else if (path === "/myspot" || path === "/make") {
        return "#3B3B3B"; // 나의 스팟 글자 색상
      } else if (path === "/randommake" || path === "/randomresult") {
        return "#3B3B3B"; // AI 추천 글자 색상
      } else if (path === "/mypage") {
        return "#3B3B3B"; // 보관함 글자 색상
      }
    }
    return "rgba(59,59,59,0.4)"; // 그 외 글자 색상
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
