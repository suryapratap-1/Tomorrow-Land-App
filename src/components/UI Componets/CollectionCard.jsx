import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiSolidHeart } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { addWish, removeWish } from '../../features/wishlist/wishListSlice'
import toast from 'react-hot-toast';

const ItemsCard = ({item, like}) => {
    const wishlist = useSelector(state => state.wishlist)
    const dispatch = useDispatch()

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
            <div className='relative xl:w-[21vw] h-full max-[426px]:w-screen min-[426px]:w-[300px] flex flex-row gap-3 tracking-wider'>
                {
                    like && 
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
                }
                <NavLink to={`/product/${item.fileName}/${item.id}`}>
                    <div className='h-full overflow-hidden'>
                        <img src={item.frontImage} className='w-full h-full object-cover' alt="front image" />
                    </div>
                </NavLink>
                {
                    item.text && 
                    <>
                        <h3 className='absolute z-20 bottom-[10%] left-1/2 -translate-x-1/2 text-2xl whitespace-nowrap text-white'>
                            {item.text}
                        </h3>
                        <div className='absolute z-10 bottom-0 w-full h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent' />
                    </>
                }
            </div>
        </div>
    )
}

export default ItemsCard