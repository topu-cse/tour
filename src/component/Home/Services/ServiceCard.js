import React from 'react';
import { Link } from 'react-router-dom';
 import PrivateRoute from '../../../Routed/Privatrouts.js'
 import './ServiceCard.css'
 
const ServiceCard = ({ service }) => {
    const { _id, img, price, name,description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 m-5 shadow-xl ">
            <figure className='service-card'><img src={img} alt="" /></figure>
         
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-end">
                <PrivateRoute>
                <Link to={`/myreview/${_id}`}>
<button className="btn btn-primary">Details</button>
</Link>
                </PrivateRoute>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
