import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../features/useSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    const isValidUser = users.some(
      (user) => user.email === email && user.password === password
    );
    if (isValidUser) {
      setMessage("Login successful");
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log In</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
