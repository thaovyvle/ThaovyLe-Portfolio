import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#807e7e] sm:text-l tracking-[0.18em] rounded md:p-0 hover:text-[#ff3888]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
