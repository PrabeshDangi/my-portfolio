import { BiMoon, BiSun } from "react-icons/bi";
import { Link } from "react-router";
import { useDarkMode } from "~/hooks/useDarkMode";

const Nav = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logooo.png" alt="Logo" className="w-auto h-12 invert " />
        </Link>
        <div className="flex items-center gap-6">
          <div className="relative group cursor-help">
            <span className="text-[--color-text-light] [data-theme='dark']:text-[--color-text-dark] hover:opacity-80 transition-colors">
              Hover Me
            </span>
            <div className="absolute size-12 object-cover overflow-hidden rounded-full shadow-lg hidden group-hover:block z-40 top-12 ">
              <img
                src="/looking-up.jpg"
                alt="Prabesh Dangi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <button
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center  bg-[--color-background-light] [data-theme='dark']:bg-[--color-background-dark] hover:opacity-80 transition-colors"
          >
            <span className="sr-only">Toggle theme</span>
            {isDarkMode ? (
              <BiSun className="h-4 w-4 text-text-light dark:text-text-light" />
            ) : (
              <BiMoon className="h-4 w-4 text-text-dark " />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
