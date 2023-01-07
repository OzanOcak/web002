const { default: Link } = require("next/link");

const Header = () => {
  return (
    <header>
      <nav>
        <ul
          className="flex gap-2 justify-center items-center h-[6rem] text-small font-bold uppercase
         bg-gray-100 text-stone-500 "
        >
          <li>
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:text-gray-900">
              User
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
