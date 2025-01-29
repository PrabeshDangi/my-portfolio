import { Link } from "react-router";

const PageLinks = () => {
  return (
    <div className="container mx-auto px-4 py-4 border-t border-slate-200">
      <div className="text-lg text-center">
        <Link to="/contact" className="text-emerald-600 hover:underline">
          Get in Touch
        </Link>
        <span className="mx-3 text-slate-400">|</span>
        <Link to="/projects" className="text-emerald-600 hover:underline">
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default PageLinks;
