import React from 'react';

const Review = ({ review, handleDelete, handleStatusUpdate }) => {
    
        const { _id, serviceName,reviewimg,message,revieweName,status } = review;
       
   

    
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