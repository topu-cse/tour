import React from 'react';
import { Link } from 'react-router-dom';
 
const ServiceCard = ({ service }) => {
    const { _id, img, price, name,description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
         
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/myreview/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;