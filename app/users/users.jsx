import Link from "next/link";
import { getUsers } from "../../lib/prisma/users";
import SearchList from "../../components/SearchList";

const Users = async () => {
  const { users } = await getUsers();
  // console.log(users[0].name);
  return (
    <section className="fixed h-full w-1/4 bg-stone-800">
      <div className="center py-4">
        <h2 className="mb-4 text-xl font-medium text-white">Users</h2>
        <SearchList users={users} />
      </div>
    </section>
  );
};

export default Users;
