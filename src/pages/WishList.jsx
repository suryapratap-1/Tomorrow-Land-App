import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross1 } from "react-icons/rx";
import { FiMinus } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { removeWish } from '../features/wishlist/wishListSlice';
import { add, remove } from '../features/add to cart/cartSlice'
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const WishList = () => {
    const wishlist = useSelector(state => state.wishlist);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addItem = (item) => {
        dispatch(add(item))
        toast.success('Item added to cart')
    }
    const removeItem = (id) => {
        dispatch(remove(id))
        toast.error('Item removed from cart')
    }
    const removeWishList = (id) => {
        dispatch(removeWish(id))
        toast.error('Removed from wishlist')
    }

    return (
        <main className='mt-16 py-12 px-24 text-black'>
            <div className='w-full'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='text-3xl'>My wishlist</h2>
                    <div className='flex flex-row gap-4 items-center'>
                        <FaFacebookF fontSize={"1.2rem"} />
                        <FaTwitter fontSize={"1.2rem"} />
                        <FaWhatsapp fontSize={"1.2rem"} />
                        <IoIosMail fontSize={"1.5rem"} />
                        <FaLink fontSize={"1.3rem"} />
                    </div>
                </div>
            </div>
            {
                wishlist === undefined || wishlist.length == 0 ?
                    (
                        <div className='w-full h-[38.6vh] flex flex-col gap-5 justify-center items-center'>
                            <h4 className='text-2xl'>Wishlist is Empty!</h4>
                            <NavLink to='/'>
                                <button className='text-xl px-4 py-3 bg-green-600 text-white rounded hover:scale-95 hover:shadow-lg'>
                                    Shop Now
                                </button>
                            </NavLink>
                        </div>
                    ) :
                    (
                        <div className='flex flex-row gap-10'>
                            {
                                wishlist.map((item) => (
                                    <div key={item.id} className='relative w-[21vw] flex flex-col gap-3 tracking-wider'>
                                        <div className='absolute right-3 top-3 hover:scale-110'>
                                            {
                                                <button onClick={() => removeWishList(item.id)}>
                                                    <RxCross1 fontSize={"1.5rem"} />
                                                </button>
                                            }
                                        </div>
                                        <div>
                                            <img src={item.frontImage} alt="wishlist image" />
                                        </div>
                                        <div className='flex flex-col gap-2 px-3'>
                                            <h3>{item.title}</h3>
                                            <p>Rs {item.price}</p>
                                            <div>
                                                {
                                                    cart.some(p => p.id == item.id) ?
                                                    <div className='w-full flex flex-row justify-between'>
                                                        <p>Remove from cart</p>
                                                        <button onClick={() => removeItem(item.id)}>
                                                            <FiMinus fontSize={"1.2rem"} />
                                                        </button>
                                                    </div> :
                                                    <div className='w-full flex flex-row justify-between'>
                                                        <p>Move to cart</p>
                                                        <button onClick={() => addItem(item)}>
                                                            <AiOutlinePlus fontSize={"1.2rem"} />
                                                        </button>
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    )
            }
        </main>
    )
}

export default WishList