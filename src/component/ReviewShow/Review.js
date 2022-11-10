import React, { useEffect, useState } from 'react';

const Review = ({ review, handleDelete, handleStatusUpdate }) => {
    
        const { _id, serviceName,reviewimg,message,revieweName,service,status } = review;
        // const [orderService, setOrderService] = useState({})
    
        // useEffect(() => {
        //     fetch(`http://localhost:5000/services/${service}`)
        //         .then(res => res.json())
        //         .then(data => setOrderService(data));
        // }, [service])
   

    
    return (


        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {/* {
                                orderService?.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />} */}
                                <img src={reviewimg}alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold ">{serviceName}</div>
                        
                    </div>
                    
                </div>
            </td>
            <td>
            <div className="text-sm opacity-50">{revieweName}</div>
               
               
            </td>
            <td><div> {message}</div></td>


            
            <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default Review;