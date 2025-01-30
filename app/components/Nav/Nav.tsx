import { Link } from "react-router";
import { useTheme } from "~/context/theme-provider";

const Nav = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logooo.png" alt="Logo" className="w-auto h-12" />
        </Link>
        <div className="flex items-center gap-6">
          <div className="relative group cursor-help">
            <span className="hover:text-gray-700 transition-colors">
              Hover Me
            </span>
            <div className="absolute w-32 h-32 object-cover overflow-hidden rounded-full shadow-lg hidden group-hover:block z-40 top-12 -left-8">
              <img
                src="/looking-up.jpg"
                alt="Prabesh Dangi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* <button
            onClick={toggleTheme}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-[--foreground]  transition-colors hover:bg-[--foreground] "
          >
            <span className="sr-only">Toggle dark mode</span>
            <span
              className={`${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-[--foreground] transition-transform `}
            />
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
