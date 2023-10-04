import { hamburger } from "../../../Nike-t/src/assets/icons";
import { headerLogo } from "../../../Nike-t/src/assets/images";
import { navLinks } from "../../../Nike-t/src/constants";

const Navbar = () => {
  return (
    <header className="my-6 w-full px-16 max-sm:px-8 z-20 absolute ">
      <nav className="flex justify-between  py-2 max-sm:mx-1">
        <a href="/" className="outline-none">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="mx-8 font-montserrat text-slate-gray text-lg leading-7 max-lg:hidden"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block ">
          <img src={hamburger} alt="Hambergur" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
