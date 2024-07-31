import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NinthContain = styled.div`
  display: block;
  position: absolute;
  top: 5210px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  margin: 20px auto;
  padding-bottom: 100px;
  text-align: center;
`;

const NinthContainBot = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin: 20px auto;
  width: 100%;
  gap: 16px;
`;

const Button = styled.button`
  height: 64px;
  width: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 31.87px;
  font-weight: bold;
  color: ${(props) => props.color || "#F0F0F0"};
  background-color: ${(props) => props.backgroundColor || "#F0F0F0"};
`;

const NavButton = styled.button`
  height: 64px;
  width: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 31.87px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#FBFBFB" : "#1B1B1B")};
  background-color: ${(props) =>
    props.disabled ? "rgba(136,136,136,0.5)" : "#20FB7C"};
  border: ${(props) =>
    props.disabled ? "none" : "1px solid rgba(40,40,40,0.5)"};
`;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function NinthBox({ canNavigate }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/loading");
  }

  return (
    <NinthContain>
      <NinthContainBot>
        <Button color="#ffffff" backgroundColor="#000000" onClick={scrollToTop}>
          맨 위로 돌아가기
        </Button>
        <NavButton onClick={handleClick} disabled={canNavigate == null}>
          스케줄 생성 시작
        </NavButton>
      </NinthContainBot>
    </NinthContain>
  );
}

export default NinthBox;
