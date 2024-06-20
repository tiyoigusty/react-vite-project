import { useState } from "react";
import { RegisterForm } from "../types/register-form";
import { api } from "../../../libs/api";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const toast = useToast();
  
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
      toast({
        title: "register success!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/auth/login");
      console.log(response.data);
    } catch (error) {
      toast({
        title: "register failed!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.log(error);
    }
  }

  return { handleChange, handleSubmit };
};
