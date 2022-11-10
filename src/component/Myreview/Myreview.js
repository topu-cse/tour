import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/Usercontext';

const Myreview = () => {
    const {name,description,img,price,_id}=useLoaderData()

   const{user}=useContext(AuthContext)
      
    const handlePlacemyreview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
       
        const message = form.message.value;
        const reviewimg=user?.photoURL;
        const reviews = {
            service: _id,
            serviceName: name,
      
            revieweName: name,
            email,
            reviewimg,
            message
        }



    }


    
    return (
        <div>
            <form onSubmit={ handlePlacemyreview} >
                <img src={img} alt="" />
                <h2 className="text-4xl"> {name}</h2>
                <p>{description}</p>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="name" className="input input-ghost w-full  input-bordered" />
                   
                    <input name="reviewimg" type="text" placeholder="photoURl" defaultValue={user?.photoURL} className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Myreview;
