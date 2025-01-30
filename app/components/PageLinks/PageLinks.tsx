import { pageLinks } from "content/pageLinks.";
import { NavLink } from "react-router";

const PageLinks = () => {
  return (
    <div className="mt-12  ">
      <div className="text-lg ">
        {pageLinks.map((link, index) => (
          <>
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-black" : "text-emerald-600 hover:underline"
              }
            >
              {link.name}
            </NavLink>
            {index < pageLinks.length - 1 && (
              <span className="mx-3 text-slate-400">|</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default PageLinks;
