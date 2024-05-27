import { Button, Heading } from "@chakra-ui/react";
import { useMemo, useState } from "react";

export function TestMemo() {
  const [count, setCount] = useState<number>(0);

  const countMemo = useMemo(() => {
    return count + 2;
  }, [count]);

  return (
    <>
      <Heading>{countMemo}</Heading>
      <Button onClick={() => setCount((prev) => prev + 1)}>Tambah</Button>
    </>
  );
}
