import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceAll from './ServiceAll';

const ServiceCart = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://tourist-server-ten.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Tour</h2>
                <p>Tourism and travel-related services include services provided by hotels and restaurants (including catering), travel agencies and tour operator services, tourist guide services and other related services. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   services.map(service => <ServiceAll
                        key={service._id}
                        service={service}
                    ></ServiceAll>)
                }
            </div>

        </div>
    );
};

export default ServiceCart;