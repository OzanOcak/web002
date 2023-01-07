import Image from "next/image";

const User = () => {
  return (
    <section className="m-4 py-4">
      <div className="center">
        <div className="relative h-40 w-40 rounded-full">
          <Image src="" alt="" />
        </div>
        <h1 className="text-xl font-bold"></h1>
        <p className="text-sm text-stone-400"></p>
      </div>
    </section>
  );
};

export default User;
