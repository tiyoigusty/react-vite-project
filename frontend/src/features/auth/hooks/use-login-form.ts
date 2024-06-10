import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../../libs/api";
import { SET_USER } from "../../../redux/slices/auth";
import { LoginForm } from "../types/login-form";
import { loginSchema } from "../validators/login-form";

export const useLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const response = await api.post("/auth/login", data);

      const token = response.data.token;
      const user = response.data.user;

      if (token) localStorage.setItem("token", response.data.token);
      if (user) {
        dispatch(SET_USER(user));
        toast({
          title: "login success!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/home");
      }
    } catch (error) {
      toast({
        title: "login failed!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return { register, handleSubmit, onSubmit };
};
