import { useState } from "react";
import { RegisterForm } from "../types/register-form";
import { api } from "../../../libs/api";
import { useNavigate } from "react-router-dom";

export const useRegisterForm = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState<RegisterForm>({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;

    setRegister({
      ...register,
      [name]: value,
    });
  }

  async function handleSubmit() {
    try {
      const response = await api.post("/auth/register", register);
      navigate("/auth/login");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return { handleChange, handleSubmit };
};
