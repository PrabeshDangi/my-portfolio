import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import { Link } from "react-router";

const Nav = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logooo.png"
            alt="Logo"
            className="w-auto h-12 dark:invert transition-all duration-300"
          />
        </Link>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full bg-gray-200 dark:bg-gray-800 
              transition-all duration-300 ease-in-out
              hover:bg-gray-300 dark:hover:bg-gray-700
              hover:scale-110 group
              cursor-pointer
              transform-gpu`}
            aria-label="Toggle theme"
          >
            <div className={`transform-gpu transition-all duration-1000 `}>
              {theme === "dark" ? (
                <BiSun className="w-5 h-5 text-yellow-500 transition-colors duration-300" />
              ) : (
                <BiMoon className="w-5 h-5 text-gray-600 transition-colors duration-300" />
              )}
            </div>
          </button>
          <div className="relative hidden md:block group cursor-help">
            <span className="text-foreground dark:text-primary hover:opacity-80 transition-colors duration-300">
              Hover Me
            </span>
            <div className="absolute size-32 object-cover overflow-hidden rounded-full shadow-lg hidden group-hover:block z-40 top-12">
              <img
                src="/looking-up.jpg"
                alt="Prabesh Dangi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
