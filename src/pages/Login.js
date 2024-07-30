import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useAuth } from "../AuthContext";
import GlobalStyle from "../GlobalStyle";
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
  width: 100%; /* 화면 전체 너비를 차지하도록 설정 */
`;
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
const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  font-size: 24px;
  padding: 15px;
  color: gray;
`;
const LogoutButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  font-size: 24px;
  padding: 15px;
  color: gray;
  cursor: ${(props) => (props.isactive ? "pointer" : "not-allowed")};
  pointer-events: ${(props) => (props.isactive ? "auto" : "none")};
`;
function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const isFormFilled = userId && password;

  const navigate = useNavigate();
  const { login, logout, isLoggedIn } = useAuth();
  const handleLogin = async () => {
    if (isFormFilled) {
      try {
        const formData = new FormData();
        formData.append("username", userId);
        formData.append("password", password);

        const response = await axios.post(
          `https://a023-106-101-130-185.ngrok-free.app/login`,
          formData
        );
        console.log(response);

        console.log(response.headers["access"]);
        login(userId);
        const token = response.headers["access"];
        if (token) {
          console.log(token);
          localStorage.setItem("access", token);
        }
        alert("로그인 성공~.");
        console.log(typeof token);
        //GET 요청 보내기
        try {
          const adminResponse = await axios.post(
            "https://a023-106-101-130-185.ngrok-free.app/admin",
            {}, // 빈 객체를 요청 본문으로 사용
            {
              headers: {
                access: token,
              },
            }
          );
          console.log("Admin page response:", adminResponse);
        } catch (adminError) {
          console.error("Admin page 요청 중 오류가 발생했습니다:", adminError);
        }
      } catch (error) {
        console.error("로그인 중 오류가 발생했습니다:", error);
        alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
    }
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
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
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
              onKeyDown={handleKeyDown}
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
              onKeyDown={handleKeyDown}
            />
          </CustomColumn>

          <LoginButton isactive={isFormFilled} onClick={handleLogin}>
            <CustomFont font="1rem" color="white" fontWeight="bold">
              로그인 하기
            </CustomFont>
          </LoginButton>
        </CustomColumn>
        <Button onClick={goToSignup}>회원가입</Button>
        <LogoutButton isactive={isLoggedIn} onClick={handleLogout}>
          로그아웃
        </LogoutButton>
      </Container>
    </div>
  );
}

export default Login;
