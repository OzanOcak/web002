import Users from "./users";

const UsersLayout = async ({ children }) => {
  return (
    <section className="flex h-full ">
      <aside className="w-1/4">
        <Users />
      </aside>
      <main className="flex-1">{children}</main>
    </section>
  );
};

export default UsersLayout;
