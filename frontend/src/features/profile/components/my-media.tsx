import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../../libs/api";
import { RootState } from "../../../redux/store";
import { ThreadEntity } from "../../home/entities/thread";

export function MyMedia() {
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const [data, setData] = useState<ThreadEntity[]>([]);

  async function getThread() {
    const response = await api.get("/profiles/" + currentUser.id);
    setData(response.data);
  }

  useEffect(() => {
    getThread();
    console.log(data);
  }, []);

  return (
    <>
      {data.map((data) => {
        return (
          <>
            <Image w="175px" src={data.image} />
          </>
        );
      })}
    </>
  );
}
