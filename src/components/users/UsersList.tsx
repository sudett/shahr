import { getUsers } from "@/services/userService";
import { User } from "@/types/user.types";
import Link from "next/link";
import React from "react";

async function UsersList() {
  const { data: users }: { data: User[] } = await getUsers();

  return (
    <article className="border-r">
      <h2 className="font-bold text-lg pb-8 cursor-pointer">Users</h2>
      <ul className="flex flex-col gap-4">
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li className="cursor-pointer">{user.username}</li>
          </Link>
        ))}
      </ul>
    </article>
  );
}

export default UsersList;
