import { useState } from "react";

export const useSearch = () => {
  const [searchStr, setSearchStr] = useState("");

  const search = (str: string) => {
    setSearchStr(str);
  };

  return { searchStr, search };
};
