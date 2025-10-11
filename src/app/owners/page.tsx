//the purpose of using the server component  is because we are simply doing a fetch call

import { getAllOwners } from "@/lib/actions/data";

export default async function OwnersPage() {
  //query the database directly on the server

  const owners = await getAllOwners();

  return (
    <div>
      {owners.map((owner) => (
        <div key={owner.id}>
          {owner.firstname} {owner.lastname}
        </div>
      ))}
    </div>
  );
}
