import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { Form } from "../../components/form/form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      login(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/task-manager");
    }
  }, [isAuthenticated, navigate])

  return (
    <Form
      title="Login"
      email={email}
      password={password}
      onChangeEmail={(e) => setEmail(e.target.value)}
      handleSubmit={(e) => handleSubmit(e)}
      onChangePassword={(e) => setPassword(e.target.value)}
    />
  );
}
