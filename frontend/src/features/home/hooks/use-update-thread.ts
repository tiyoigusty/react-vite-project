import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../../libs/api";
import { ThreadEntity } from "../entities/thread";
import { CreateThreadDTO } from "../types/thread";
import { zodResolver } from "@hookform/resolvers/zod";
import { createThreadSchema } from "../validators/thread";

export const useUpdateThread = (id: number) => {
  const { data: threads, refetch } = useQuery<ThreadEntity[]>({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  const { register, handleSubmit } = useForm<CreateThreadDTO>({
    mode: "onSubmit",
    resolver: zodResolver(createThreadSchema),
  });

  async function getThreads() {
    const response = await api.get("/threads");
    return response.data;
  }

  const { mutateAsync } = useMutation<
    ThreadEntity,
    AxiosError,
    CreateThreadDTO
  >({
    mutationFn: (newThread) => {
      const formData = new FormData();
      formData.append("content", newThread.content);
      if(newThread.image[0]) {
        formData.append("image", newThread.image[0]);
      }
      return api.patch("/threads/"+id, formData);
    },
  });

  const onSubmit: SubmitHandler<CreateThreadDTO> = async (data) => {
    try {
      await mutateAsync(data);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return { threads, register, handleSubmit, onSubmit };
};
