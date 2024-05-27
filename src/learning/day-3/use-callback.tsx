// ----------------------- useCallback -------------------------------

import { useCallback, useRef } from "react";

export function Submit() {
  const inputNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      alert(inputNameRef.current?.value);
    },
    []
  );

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input ref={inputNameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
