import { useEffect, useState } from "react";
import { api } from "../../../libs/api";
import { FollowingEntity } from "../entities/follow";
import { CardFollow } from "./card-follower";

export function Followers() {
  const [data, setData] = useState<FollowingEntity[]>([]);

  async function getData() {
    const response = await api.get("/followings");
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((data) => {
        return <CardFollow key={data.id} data={data} />;
      })}
    </>
  );
}
