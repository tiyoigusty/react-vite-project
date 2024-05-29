// ----------------------- useEffect -------------------------

import { useEffect, useState } from "react";

export function Count() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <h1>{count}</h1>;
}

export function Test() {
  const [data, setData] = useState();

  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setData(await response.json());
  }

  useEffect(() => {
    getData();
  }, []);

  return <>{JSON.stringify(data)}</>;
}