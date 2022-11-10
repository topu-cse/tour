
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Usercontext';
 import './Header.css';
 import logo from '../../image/logo.png'


const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  console.log('context',user)
const handleSignOut=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>{
    console.log(error)
  })
}
    return (
        <div>
           
<div className="navbar bg-primary  text-primary-content nav-logo">
  <Link to='/' className=""> <img src={logo} alt="" /> Dream Tour</Link>
<div className='navber-link'>
<Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/reviewshow'>My Review</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
</div>
  
  
  {user?.email && <span> {user.email}</span>}
  {
    user?.email?
    <button onClick={handleSignOut} className="btn btn-ghost normal-case text-xl">Sign out</button>
     
  :<div>
    <Link to='/login' className="btn btn-ghost normal-case text-xl">Login </Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
  </div>
  }
</div>







        </div>
    );
};

export default Header;