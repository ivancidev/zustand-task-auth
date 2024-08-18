import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Form } from "../../components/form/form";
import { registerUserWithEmailAndPassword } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/inputs/input-field";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const register = useAuthStore((state) => state.register);
  const [userName, setUserName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await registerUserWithEmailAndPassword(email, password);
      register(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/task-manager");  
    }
  }, [isAuthenticated, navigate])

  return (
    <Form
      title="Register"
      email={email}
      password={password}
      onChangeEmail={(e) => setEmail(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
      handleSubmit={handleSubmit}
    >
      <InputField
        label="Username"
        type="text"
        placeholder="Enter username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <InputField
        label="Phone"
        type="number"
        placeholder="Enter phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Link to={"/"}>I already have an account</Link>
    </Form>
  );
}
