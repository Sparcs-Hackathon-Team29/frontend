import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useAuth } from "../AuthContext";
const CustomColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap || "30px"};
  align-items: ${(props) => props.alignitems || "flex-start"};
  justify-content: ${(props) => props.justifycontent || "flex-start"};
`;

const CustomRow = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap || "10px"};
  align-items: ${(props) => props.alignitems || "center"};
  justify-content: ${(props) => props.justifycontent || "center"};

  padding-left: ${(props) => props.paddingLeft || 0};
  padding-right: ${(props) => props.paddingRight || 0};
  padding-top: ${(props) => props.paddingTop || 0};
  padding-bottom: ${(props) => props.paddingBottom || 0};
  padding: ${(props) => props.padding || 0};
`;

const CustomFont = styled.a`
  font-size: ${(props) => props.font || "0.8rem"};
  color: ${(props) => props.color || "#F0F0F0"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

const InputForm = styled.input`
  display: flex;
  border: 1.5px solid #8cc63f;
  background-color: transparent;
  border-radius: 15px;
  width: 100%;
  height: 2rem;
  padding: 0.3rem;
  padding-left: 1rem;

  &::placeholder {
    color: #d9d9d9;
  }

  &:active {
    outline: none;
  }
`;
const LoginButton = styled.button`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: white;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => (props.isactive ? "#585858" : "#D9D9D9")};
  cursor: ${(props) => (props.isactive ? "pointer" : "not-allowed")};
  pointer-events: ${(props) => (props.isactive ? "auto" : "none")};
`;

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const isFormFilled = userId && password;

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    if (isFormFilled) {
      try {
        const formData = new FormData();
        formData.append("username", userId);
        formData.append("password", password);

        const response = await axios.post(`LOGIN 요청 URL`, formData);
        console.log(response);
        login(userId);
        if (response.data.token) {
          console.log(response.data.token);
          localStorage.setItem("wtw-token", response.data.token);
        }
        alert("로그인 성공~.");
        setTimeout(() => {
          navigate("/"); // 경로 확인 필요
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <CustomColumn
        width="100%"
        justifycontent="center"
        alignitems="center"
        gap="2rem"
      >
        <CustomColumn
          width="30%"
          justifycontent="center"
          alignitems="flex-start"
          gap="1rem"
        >
          <CustomFont color="black" font="1rem" fontWeight="bold">
            아이디
          </CustomFont>
          <InputForm
            placeholder="아이디를 입력하세요."
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </CustomColumn>

        <CustomColumn
          width="30%"
          justifycontent="center"
          alignitems="flex-start"
          gap="1rem"
        >
          <CustomFont color="black" font="1rem" fontWeight="bold">
            비밀번호
          </CustomFont>
          <InputForm
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CustomColumn>

        <LoginButton isactive={isFormFilled} onClick={handleLogin}>
          <CustomFont font="1rem" color="white" fontWeight="bold">
            로그인 하기
          </CustomFont>
        </LoginButton>
      </CustomColumn>
    </div>
  );
}

export default Login;
