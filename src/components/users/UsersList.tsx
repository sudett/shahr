import { getUsers } from "@/services/userService";
import { User } from "@/types/user.types";
import React from "react";

async function UsersList() {
  const { data: users }: { data: User[] } = await getUsers();

  return (
    <article className="border-r">
      <h2 className="font-bold text-lg pb-8 cursor-pointer">Users</h2>
      <ul className="flex flex-col gap-4">
        {users.map((user) => (
          <li key={user.id} className="cursor-pointer">
            {user.username}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default UsersList;
