import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMinus } from "react-icons/fi";
import { BiSolidHeart } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../../features/add to cart/cartSlice'
import { addWish, removeWish } from '../../features/wishlist/wishListSlice'
import toast from 'react-hot-toast';

const ItemsCard = ({item}) => {
    
    const cart = useSelector(state => state.cart)
    const wishlist = useSelector(state => state.wishlist)
    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(add(item))
        toast.success('Item added to cart')
    }
    const removeItem = () => {
        dispatch(remove(item.id))
        toast.error('Item removed from cart')
    }
    const addWishList = () => {
        dispatch(addWish(item))
        toast.success('Added to wishlist')
    }
    const removeWishList = () => {
        dispatch(removeWish(item.id))
        toast.error('Removed from wishlist')
    }

    return (
        <div>
            <div className='relative xl:w-[21vw] max-[426px]:w-screen min-[426px]:w-[300px] flex flex-col gap-3 tracking-wider'>
                <div className='absolute right-5 top-3 hover:scale-110'>
                    {
                        wishlist.some((p) => p.id == item.id) ?
                        <button onClick={removeWishList}>
                            <BiSolidHeart fontSize={"1.2rem"} />
                        </button> :
                        <button onClick={addWishList}>
                            <FiHeart fontSize={"1.2rem"} />
                        </button>
                    }
                </div>
                <NavLink to={`product/${item.fileName}/${item.id}`}>
                    <img src={item.frontImage} className='w-full' alt="front image" />
                </NavLink>
                <div className='flex flex-col gap-2 px-3'>
                    <h3>{item.title}</h3>
                    <div className='flex justify-between'>
                        <p>Rs {item.price}</p>
                        <div className='flex gap-2'>
                            {
                                item.color.map((color, index) => (
                                    <div key={index} className={`w-5 h-5 rounded-full bg-[${color}]`} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p className='text-sm'>Add to cart</p>
                        <button>
                            {
                                cart.some((p) =>  p.id == item.id) ? 
                                <button onClick={removeItem}>
                                    <FiMinus fontSize={"1.2rem"} />
                                </button> :
                                <button onClick={addItem}>
                                    <AiOutlinePlus fontSize={"1.2rem"}/>  
                                </button>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemsCard