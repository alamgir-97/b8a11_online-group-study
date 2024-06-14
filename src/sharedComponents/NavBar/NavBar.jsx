import { NavLink } from "react-router-dom";

const NavBar = () => {
    const NavItems = <>
        <NavLink to="/" className="btn btn-ghost">Home</NavLink>
        <NavLink to="/createAssignment" className="btn btn-ghost">Create Assignment</NavLink>
        <NavLink to="/createAssignment" className="btn btn-ghost">Assignments</NavLink>
        <NavLink to="/createAssignment" className="btn btn-ghost">My Assignments</NavLink>
        <NavLink to="/allAssignments" className="btn btn-ghost">All Assignments</NavLink>
        <NavLink to="/submittedAssignment" className="btn btn-ghost">Submitted Assignments</NavLink>
        <div className="flex flex-col">
        <NavLink to="/signIn" className="btn btn-ghost">SignIn</NavLink>
        <NavLink to="/signUp" className="btn btn-ghost">SignUp</NavLink>
        <NavLink to="/signUp" className="btn btn-ghost">LogOut</NavLink>
        </div>      
        <NavLink to="/requirements" className="btn btn-ghost">Requirements</NavLink>
    </>
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {NavItems}        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Online Group Study</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-6 justify-center items-center">
    {NavItems} 
    </ul>
  </div>
  
</div>
        <div className="shadow-sm flex gap-4 justify-center m-4 p-4 items-center"> 
        
        </div>
           
        </>
    );
};

export default NavBar;