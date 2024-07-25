// Signup.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/useSlice";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleSignUp = () => {
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setMessage("User already exists");
      return;
    }
    dispatch(addUser({ email, password }));
    setMessage("User registered successfully");
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
      <button onClick={handleSignUp}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
}

export default SignUp;
