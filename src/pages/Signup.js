import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const CustomFont = styled.a`
  font-size: ${(props) => props.font || "0.8rem"};
  color: ${(props) => props.color || "#F0F0F0"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })``;

const SignupButton = styled.button`
  width: 100%;
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

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default function Signup() {
  const [userId, setUserId] = useState(""); // 추후 username으로 수정
  const [password, setPassword] = useState("");
  const isPasswordsMatch = password;
  const [isCheck, setIsCheck] = useState(false);
  const isFormFilled = password && isPasswordsMatch && isCheck;

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (isFormFilled) {
      try {
        // FormData 객체 생성
        const formData = new FormData();
        formData.append("username", userId);
        formData.append("password", password);

        // POST 요청 보내기
        const response = await axios.post(
          "https://3763-106-101-130-32.ngrok-free.app/join",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("기본응답:", response);
        setUserId(userId);
        alert("회원가입 성공~");
        setTimeout(() => {
          navigate("/login"); // /login로 이동
        }, 1500);
      } catch (error) {
        console.error("에러응답:", error);
        alert("회원가입에 실패했습니다.");
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSignup();
    }
  };

  return (
    <div>
      <Container>
        <CustomColumn
          width="30%"
          justifycontent="center"
          alignitems="center"
          gap="1rem"
        >
          <CustomColumn
            width="100%"
            justifycontent="center"
            alignitems="flex-start"
            gap="0.5rem"
          >
            <CustomFont color="black" font="1rem" fontWeight="bold">
              아이디 <span style={{ color: "red" }}>*</span>
            </CustomFont>
            <InputForm
              placeholder="사용하실 아이디를 입력하세요."
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </CustomColumn>

          <CustomColumn
            width="100%"
            justifycontent="center"
            alignitems="flex-start"
            gap="0.5rem"
          >
            <CustomFont color="black" font="1rem" fontWeight="bold">
              비밀번호 <span style={{ color: "red" }}>*</span>
            </CustomFont>
            <InputForm
              type="password"
              placeholder="사용하실 비밀번호를 입력하세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </CustomColumn>

          <CustomColumn
            width="100%"
            justifycontent="center"
            alignitems="center"
            gap="1rem"
          >
            <Label onKeyDown={handleKeyDown}>
              <Checkbox
                checked={isCheck}
                onChange={(e) => setIsCheck(e.target.checked)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSignup();
                  }
                }}
              />
              <CustomFont color="black" font="1rem">
                개인정보 이용 약관에 동의합니다.
              </CustomFont>
            </Label>
          </CustomColumn>
          <SignupButton isactive={isFormFilled} onClick={handleSignup}>
            <CustomFont font="1rem" color="white" fontWeight="bold">
              회원가입 완료
            </CustomFont>
          </SignupButton>
        </CustomColumn>
      </Container>
    </div>
  );
}
