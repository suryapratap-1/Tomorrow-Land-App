import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { remove } from '../features/add to cart/cartSlice';
import toast from 'react-hot-toast';


const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [totalAmout, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount( cart.reduce((accumulator, current) => accumulator + current.price, 0) )
    }, [cart])

    const removeItem = (cart) => {
        dispatch(remove(cart.id))
        toast.success('Item removed from cart')
    }

    return (
        <main className='mt-16 py-12 px-24'>
            {
                cart === undefined || cart.length == 0 ? 
                (
                    <div className='w-full h-[38.6vh] flex flex-col gap-5 justify-center items-center'>
                        <h4 className='text-2xl'>Cart Empty!</h4>
                        <NavLink to='/'>
                            <button className='text-xl px-4 py-3 bg-green-600 text-white rounded hover:scale-95 hover:shadow-lg'>
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                ) :
                (   
                    <div className='flex flex-row'>
                        <div className='no-scrollbar w-[60%] h-[78vh] flex flex-col gap-10  overflow-y-auto  '>
                            {
                                cart.map((cart) => (
                                    <div key={cart.id} className='flex flex-row gap-10'>
                                        <img src={cart.frontImage} className='w-[16vw]' alt="" />
                                        <div className='flex flex-col gap-5 py-6 pr-16'>
                                            <h2 className='text-3xl'>{cart.title}</h2>
                                            <p>{cart.description}</p>
                                            <div className='flex flex-row justify-between items-center'>
                                                <p className='text-green-600 text-xl font-bold'>{cart.price}</p>
                                                <button onClick={() => removeItem(cart)}
                                                    className='w-fit p-1.5 bg-red-100 rounded-full'>
                                                    <MdDelete fontSize={'1.4rem'} color='red'/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='w-[40%] flex flex-col gap-4 px-4'>
                            <h2 className='text-3xl py-1 mb-4 text-center bg-green-500 text-white  rounded-md'>Your Cart</h2>
                            <h3 className='text-2xl'>Total Items: {cart.length}</h3>
                            <h3 className='text-2xl '>Total Amount: {totalAmout}</h3>
                        </div>
                    </div>
                    
                )
            }

            
        </main>
    )
}

export default Cart