import { useEffect, useState } from "react";
import { api } from "../../../libs/api";
import { FollowerEntity } from "../entities/follow";
import { CardFollow } from "./card-following";

export function Followings() {
  const [data, setData] = useState<FollowerEntity[]>([]);

  async function getData() {
    const response = await api.get("/followers");
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((data) => {
        return (
          <>
            <CardFollow key={data.id} data={data} />
          </>
        );
      })}
    </>
  );
}
