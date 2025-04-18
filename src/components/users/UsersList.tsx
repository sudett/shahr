"use client";

import { User } from "@/types/user.types";
import Link from "next/link";
import React from "react";
import SearchBox from "../ui/SearchBox";
import { useSearch } from "@/hooks/useSearch";

function UsersList({ users }: { users: User[] }) {
  const { search, searchStr } = useSearch();

  return (
    <article className="border-r pr-4">
      <SearchBox placeholder="Search Users" search={search} />
      <ul className="flex flex-col gap-4">
        {users
          .filter((user) => user.username.includes(searchStr))
          .map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <li className="cursor-pointer">{user.username}</li>
            </Link>
          ))}
      </ul>
    </article>
  );
}

export default UsersList;
