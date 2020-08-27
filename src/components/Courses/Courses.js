import React from 'react';
import { useState } from 'react';
import fakeData from '../fakeData/fakeData';
import './Courses.css';
import Study from '../Study/Study';
import Cart from '../Cart/Cart';


const Courses = () => {
    const data = fakeData;
    const [courses, setCourses] = useState(data); 
    const [cart, setCart] = useState([]);

    const addToEnroll = (course) => { //Add course to cart function
        const totalCartItem = [...cart, course];
        setCart(totalCartItem);
    }
    const totalPrice = cart.reduce((total, item) => total + item.price, 0); // Calculate total price
    return (
        <div className="container-fluid">
           
            <div className="row">
                <div className="col-md-3 cart">
                    <h2 className="text-center">Total Cart Item : {cart.length}  </h2>
                    <ul className="list-group">
                        {
                            cart.map(item => <Cart key={item.id * Math.random()} item={item} />)
                        }
                    </ul>
                   <h6> Checkout <span className="badge badge-light">$ {totalPrice}</span></h6>
            
                   
                </div>
                <div className="col-md-9 row border-left course-item">
                    {
                        courses.map(item => <Study key={item.id} course={item} addToEnroll={addToEnroll} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;
