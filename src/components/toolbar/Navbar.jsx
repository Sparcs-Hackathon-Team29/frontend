import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Container>
        <ButtonWrapper></ButtonWrapper>
        <LoginButton onClick={goToSignup}>회원가입</LoginButton>
        <LoginButton onClick={goToLogin}>로그인</LoginButton>
      </Container>
    </div>
  );
};

export default Navbar;

const Container = styled.div`
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  margin-bottom: 0;
  border-bottom: 1px solid lightgray;
`;

const ButtonBase = styled.button`
  padding: 10px;
  margin-right: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

//추후 간격 조정
const Button = styled(ButtonBase)`
  background-color: white;
  margin-right: 8rem;
  font-size: 2.5rem;
`;

const LoginButton = styled(ButtonBase)`
  background-color: white;
  font-size: 30px;
  margin-right: 5rem;
  color: gray;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
