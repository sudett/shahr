import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  search: (str: string) => void;
}

function SearchBox({ search, ...props }: Props) {
  return (
    <input
      onChange={(e) => search(e.target.value)}
      type="search"
      placeholder={props.placeholder}
      className="mb-8 w-full px-2 rounded bg-transparent border outline-none cursor-pointer"
    />
  );
}

export default SearchBox;
