import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { api } from "../../../libs/api";
import { UserSearch } from "../types/search";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<UserSearch[]>([]);
  const [debounceSearch] = useDebounce(search, 700);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function getData() {
    if(search === "") {
      return
    }
    const response = await api.get(`/users?search=${debounceSearch}`);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [debounceSearch]);

  return {handleChange, data};
};
