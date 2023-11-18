import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiSolidHeart } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'


const ItemsCard = ({item, like}) => {
    const [liked, setLiked] = useState(false)

    return (
        <div>
            <NavLink>
                <div className='relative w-[21vw] h-[550px] flex flex-row gap-3 tracking-wider'>
                    {
                        like && 
                        <div onClick={() => setLiked(!liked)} className='absolute right-3 top-3 hover:scale-110'>
                            {
                                liked ? <BiSolidHeart fontSize={"1.2rem"} /> : <FiHeart fontSize={"1.2rem"} />
                            }
                        </div>
                    }
                    <div className='overflow-hidden'>
                        <img src={item.frontImage} className='w-full h-full object-cover hover:scale-105 transition-all duration-500' alt="front image" />
                    </div>
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
            </NavLink>
        </div>
    )
}

export default ItemsCard