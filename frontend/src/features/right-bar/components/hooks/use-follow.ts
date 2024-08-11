import { api } from "../../../../libs/api";

export default function useFollow({ followingId }: { followingId: number }) {
  const onClick = async () => {
    try {
      const response = await api.post(`/follows/${followingId}`);

      console.log(response);

      return response;
    } catch (error) {
      console.error;
      return error;
    }
  };

  const handleClick = async () => {
    await onClick();
  };

  return { handleClick };
}
