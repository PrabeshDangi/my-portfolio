import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="w-full ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logooo.png" alt="Logo" className="w-auto h-12" />
            <span className="text-xl font-semibold">Prabesh</span>
          </Link>
          <button>Contact Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
