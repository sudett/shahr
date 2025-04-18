import { getSingleUser } from "@/services/userService";
import { User } from "@/types/user.types";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: user }: { data: User } = await getSingleUser(id);

  return (
    <section className="flex flex-col items-center justify-center gap-8 h-screen">
      <div className="flex flex-col items-center gap-4 border rounded px-12 py-4">
        <FaRegCircleUser className="w-16 h-16" width={50} height={50} />
        <span>{user.username}</span>
        <span>
          {user.name.firstname} {user.name.lastname}
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span>Email: {user.email}</span>
        <span>Phone: {user.phone}</span>
        <span>
          Address: {user.address.city}, {user.address.street},{" "}
          {user.address.number}
        </span>
      </div>
    </section>
  );
}

export default page;
