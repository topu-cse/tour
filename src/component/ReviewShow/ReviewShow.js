import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Usercontext';
import Review from './Review';

const ReviewShow = () => {
    const {user}=useContext(AuthContext)
    const[reviews,setReviews]=useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    // const handleDelete = id =>{
    //     const proceed = window.confirm('Are you sure, you want to cancel this order');
    //     if(proceed){
    //         fetch(`http://localhost:5000/orders/${id}`, {
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0){
    //                 alert('deleted successfully');
    //                 const remaining = orders.filter(odr => odr._id !== id);
    //                 setOrders(remaining);
    //             }
    //         })
    //     }
    // }

    // const handleStatusUpdate = id => {
    //     fetch(`http://localhost:5000/orders/${id}`, {
    //         method: 'PATCH', 
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({status: 'Approved'})
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.modifiedCount > 0) {
    //             const remaining = orders.filter(odr => odr._id !== id);
    //             const approving = orders.find(odr => odr._id === id);
    //             approving.status = 'Approved'

    //             const newOrders = [approving, ...remaining];
    //             setOrders(newOrders);
    //         }
    //     })
    // }

  
   
    return (
        <div>
            <h2 className="text-5xl text-center m-8">I have {reviews.length}reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full m-5 w-90">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>user name</th>
                            <th> Tour Area</th>
                         
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review=><Review
                            
                            key={review._id}
                            review={review}
                            
                            >

                            </Review>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewShow;