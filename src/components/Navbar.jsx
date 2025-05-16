import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-4 place-content-evenly justify-end mb-8">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/pastes"> Pastes </NavLink>
    </div>
  );
};

export default Navbar;
