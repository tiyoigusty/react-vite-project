import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../../libs/api";
import { UserEntity } from "../../home/entities/user";
import { CreateProfileDTO } from "../types/profile";

export const useProfile = (id: number) => {
  const { data, refetch } = useQuery<UserEntity[]>({
    queryKey: ["users"],
    queryFn: getThreads,
  });

  const { register, handleSubmit } = useForm<CreateProfileDTO>({
    mode: "onSubmit",
    // resolver: zodResolver(createThreadSchema),
  });

  async function getThreads() {
    const response = await api.get("/users");
    return response.data;
  }

  const { mutateAsync } = useMutation<
    UserEntity,
    AxiosError,
    CreateProfileDTO
  >({
    mutationFn: (newProfile) => {
      const formData = new FormData();
      if(newProfile.background[0]){
        formData.append("background", newProfile.background[0]);
      }
      if(newProfile.photoProfile[0]){
        formData.append("photoProfile", newProfile.photoProfile[0]);
      }
      formData.append("fullName", newProfile.fullName);
      formData.append("username", newProfile.username);
      formData.append("bio", newProfile.bio);
      return api.patch("/users/"+id, formData);
    },
  });

  const onSubmit: SubmitHandler<CreateProfileDTO> = async (data) => {
    try {
      await mutateAsync(data);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return { data, register, handleSubmit, onSubmit };
};
