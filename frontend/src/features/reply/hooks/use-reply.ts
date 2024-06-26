import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../../libs/api";
import { ReplyEntity } from "../entities/reply";
import { CreateReplyDTO } from "../types/reply";
import { useParams } from "react-router-dom";

export const useReply = () => {
  const { data: replies, refetch } = useQuery<ReplyEntity[]>({
    queryKey: ["replies"],
    queryFn: getReplies,
  });

  const { register, handleSubmit } = useForm<CreateReplyDTO>({
    mode: "onSubmit",
    // resolver: zodResolver(createThreadSchema),
  });

  const {id} = useParams()

  async function getReplies() {
    const response = await api.get("/replies/"+id);
    return response.data;
  }


  const { mutateAsync } = useMutation<ReplyEntity, AxiosError, CreateReplyDTO>({
    mutationFn: (newReplies) => {
      const formData = new FormData();
      formData.append("content", newReplies.content);
      formData.append("image", newReplies.image[0]);
      return api.post("/replies/"+id, formData);
    },
  });

  const onSubmit: SubmitHandler<CreateReplyDTO> = async (data) => {
    try {
      await mutateAsync(data);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return { replies, register, handleSubmit, onSubmit };
};
