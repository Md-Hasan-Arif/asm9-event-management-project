import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut =() =>{
        logOut()
        .then (()=> console.log('user logged out successfully'))
        .catch(error => console.error(error))
    }
    

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">About</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
       
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar bg-gray-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                            {navLinks}
                        </ul>
                    </div >


                    <h3 className="text-2xl font-bold text-white md:ml-8">TRAINING <span className="text-orange-600">STUDIO</span></h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                        <span>{user.email}</span>
                        <a onClick={handleLogOut} className="btn btn-small">sign Out</a>
                        </>
                        : <Link to="/register">
                            <button className="btn btn-sm">SignIn</button>
                        </Link>
                    }
                   
                </div>

            </div>
        </div>
    );
};

export default Navbar;