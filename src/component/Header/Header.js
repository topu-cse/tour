
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Usercontext';


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
           
<div className="navbar bg-primary  text-primary-content">
  <Link to='/' className="btn btn-ghost normal-case text-xl">Navber</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/products'>Products</Link>
  
  
  {user?.email && <span>welcome, {user.email}</span>}
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