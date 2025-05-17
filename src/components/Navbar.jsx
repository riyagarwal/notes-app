import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-600 p-2 pr-12 text-xl flex flex-row gap-8 place-content-evenly justify-end mb-8">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/pastes"> Pastes </NavLink>
    </div>
  );
};

export default Navbar;
