
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Services</Link></li>
        {
            user && <li><Link to='/bookings'>Bookings</Link></li>
        }
    </>
    const handleSignOUt = () => {
        signOutUser()
        .then(() => {
            console.log("Sign Out Successful")
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-base-100 py-5 lg:container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">ClinicZ</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleSignOUt} className='btn btn-outline btn-primary'>Log Out</button>
                    : <Link to='/login' className="btn btn-primary">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;