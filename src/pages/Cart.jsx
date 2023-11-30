import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { remove } from '../features/add to cart/cartSlice';
import toast from 'react-hot-toast';


const Cart = () => {

    const [totalAmout, setTotalAmount] = useState(0);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        let sum = cart.reduce((acc, current) => acc + current.price, 0)
        setTotalAmount( sum )
    }, [cart])

    const removeItem = (cart) => {
        dispatch(remove(cart.id))
        toast.error('Item removed from cart')
    }

    return (
        <main className='mt-16 py-5 px-4 lg:py-12 lg:px-14'>
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
                    <div className='flex flex-col xl:flex-row gap-4 md:gap-16'>
                        <div className='no-scrollbar w-full flex flex-col gap-10  
                            md:grid md:grid-cols-2 lg:grid-cols-3
                            xl:w-[60%] xl:h-[78vh] xl:flex xl:flex-col xl:overflow-y-auto
                        '>
                            {
                                cart.map((cart) => (
                                    <div key={cart.id} className='flex flex-col xl:flex-row pb-2 md:gap-10 border-b-2 border-gray-500'>
                                        <img src={cart.frontImage} className='w-full xl:w-[16vw]' alt="" />
                                        <div className='flex flex-col gap-2 md:gap-5 py-6 md:pr-16'>
                                            <h2 className='text-xl md:text-3xl'>{cart.title}</h2>
                                            <p className=' text-sm md:text-base'>{cart.description}</p>
                                            <div className='flex flex-row justify-between items-center mt-2 md:mt-0'>
                                                <p className='text-green-700 text-xl font-bold'>Price: {cart.price}</p>
                                                <button onClick={() => removeItem(cart)}
                                                    className='relative w-fit p-1.5 bg-red-100 rounded-full group  delay-500'>
                                                    <MdDelete fontSize={'1.4rem'} color='red'/>
                                                    <div className='absolute -top-5 right-[0.1%] group-hover:block hidden'>
                                                        <p className='text-sm text-red-500'>remove</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='w-full lg:w-[70%] xl:w-[40%] md:mt-10 flex flex-col gap-[40%] md:pl-4 md:pr-28'>
                            <div className='flex flex-col gap-2 md:gap-4'>
                                <h2 className='text-4xl py-2 text-black  rounded-md'>Your</h2>
                                <h2 className='text-4xl md:text-6xl text-green-700'>Cart List</h2>
                                <h3 className='md:text-2xl text-gray-700'>Total Items: 
                                    <span className='text-black font-bold'> {cart.length}</span>
                                </h3>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <h3 className='md:text-2xl text-gray-700 '>Total Amount: 
                                    <span className='text-black font-bold'> Rs {totalAmout}</span>
                                </h3>
                                <NavLink to='/'>
                                    <button className='w-full text-3xl py-2 mb-4 text-center bg-green-700 text-white  rounded-md
                                        hover:scale-95 hover:shadow-xl
                                    '>
                                        Shop More
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    
                )
            }

            
        </main>
    )
}

export default Cart