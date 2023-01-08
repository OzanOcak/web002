import { getUserById } from "../../../lib/prisma/users";
import User from "./User";

const Page = async ({ params }) => {
  //console.log(params);
  const { user } = await getUserById(params.userid);

  return <User user={user} />;
};

export default Page;
