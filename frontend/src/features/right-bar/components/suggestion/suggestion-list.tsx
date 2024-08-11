import { useEffect, useState } from "react";
import { api } from "../../../../libs/api";
import { Card } from "./card";
import { SugesstionCardTypes } from "./types";

export function SuggestionList() {
  const [data, setData] = useState<SugesstionCardTypes[]>([]);

  async function getData() {
    const response = await api.get("/users");
    const suffle = response.data.sort(() => 0.5 - Math.random());
    const limited = suffle.slice(0, 5);
    setData(limited);
  }
  // console.log(data);
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </>
  );
}
