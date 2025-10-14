//the purpose of using the server component  is because we are simply doing a fetch call

import { getAllOwners } from "@/lib/actions/data";
import Link from "next/link";

export default async function OwnersPage() {
  //query the database directly on the server

  const owners = await getAllOwners();

  return (
    <div>
      <div>
        <Link href="/owners/add">Add an Owner</Link>
      </div>
      {owners.map((owner) => (
        <div key={owner.id}>
          {owner.firstname} {owner.lastname}
        </div>
      ))}
    </div>
  );
}
