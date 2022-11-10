import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/Usercontext';
import './Myreview.css'

const Myreview = () => {
    const {name,description,img,price,_id}=useLoaderData()

   const{user}=useContext(AuthContext)
      
    const handlePlacemyreview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const username = user?.displayName;
     
        const message = form.message.value;
        const reviewimg=user?.photoURL;
        const reviews = {
            service: _id,
            serviceName: name,
           
            revieweName:username,
            email,
            reviewimg,
            message
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));




    }


    
    return (
        <div>
            <form onSubmit={ handlePlacemyreview} className="review" >
                <img src={img} alt="" />
                <h2 className="text-4xl m-5"> {name}</h2>
                <p className="m-5">{description}</p>
                <h4 className="text-3xl m-5">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-5'>
                    <input name="username" type="text" placeholder="name" defaultValue={user?.displayName} className="input m-5 input-ghost w-full  input-bordered" readOnly />
                   
                    <input name="reviewimg" type="text" placeholder="photoURl" defaultValue={user?.photoURL} className="input input-ghost w-full m-5 input-bordered" readOnly />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full m-5 input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered m-5 h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn m-5' type="submit" value="add review" />
            </form>
        </div>
    );
};

export default Myreview;
