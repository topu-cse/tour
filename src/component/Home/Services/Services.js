import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://tourist-server-ten.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    const sliceService=services.slice(0,3)
    return (
        
        <div>
            <div className='text-center mb-4 m-7'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Tour</h2>
                <p>Tourism and travel-related services include services provided by hotels and restaurants (including catering), travel agencies and tour operator services, tourist guide services and other related services. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   sliceService.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className='mt-5 text-center'>
                <Link to='/service'>
                <button className="btn  btn-success m-6">
                    views all
            </button>
            </Link>
            </div>
        </div>
    );
};

export default Services;
