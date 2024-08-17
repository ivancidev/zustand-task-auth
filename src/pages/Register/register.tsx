import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Form } from "../../components/form/form";
import { registerUserWithEmailAndPassword } from "../../services/authService";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const register = useAuthStore((state) => state.register);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await registerUserWithEmailAndPassword(email, password);
      register(user);
      console.log("User registered successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      title="Register"
      email={email}
      password={password}
      onChangeEmail={(e) => setEmail(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
      handleSubmit={handleSubmit}
    />
  );
}
