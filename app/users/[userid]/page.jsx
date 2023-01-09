import { getUserById, getUsers } from "../../../lib/prisma/users";
import User from "./User";

export async function generateStaticParams() {
  const { users } = await getUsers();

  return users.map((user) => ({
    userid: user.id,
  }));
}

const Page = async ({ params }) => {
  //console.log(params);
  const { user } = await getUserById(params.userid);

  return <User user={user} />;
};

export default Page;
