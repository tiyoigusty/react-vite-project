import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../libs/api";
import { ThreadEntity } from "../../home/entities/thread";

export function MyMediaUser() {
  const [data, setData] = useState<ThreadEntity[]>([]);

  const {id} = useParams()

  async function getThread() {
    const response = await api.get("/profiles/" + id);
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
