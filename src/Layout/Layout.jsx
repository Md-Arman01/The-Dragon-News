import { NavLink, Outlet, } from "react-router-dom";
import Header from "../Header/Header";
import userImage from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Layout = () => {

  const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
      logOut()
      .then(() => {
          alert('Sign-out successful.')
        }).catch((error) => {
          alert(error.message)
        });
    }
    

    const allNavber = <nav className="flex gap-5 justify-center">
    <NavLink to='/' className='text-[#706F6F] text-sm'>Home</NavLink>
    <NavLink to='/about' className='text-[#706F6F] text-sm'>About</NavLink>
    <NavLink to='/career' className='text-[#706F6F] text-sm'>Career</NavLink>
    </nav>
    
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className="navbar bg-base-100">
  <div className="navbar-start items-center">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {allNavber}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {allNavber}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userImage} />
        </div>
      </label>

      {
        user? 
      <button onClick={handleLogOut}  className="btn btn-neutral normal-case px-10 rounded-none">LogOut</button>
      :
      <NavLink to='/login'>
      <button  className="btn btn-neutral normal-case px-10 rounded-none">Login</button>
      </NavLink>


      }
    
  </div>
</div>


            <Outlet></Outlet>
        </div>
    );
};

export default Layout;