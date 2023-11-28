import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiSolidHeart } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'

const ItemsCard = ({item, like}) => {
    const [liked, setLiked] = useState(false)

    return (
        <div>
            <div className='relative xl:w-[21vw] max-[426px]:w-screen min-[426px]:w-[300px] flex flex-row gap-3 tracking-wider'>
                {
                    like && 
                    <div onClick={() => setLiked(!liked)} className='absolute right-5 top-3 hover:scale-110'>
                        {
                            liked ? <BiSolidHeart fontSize={"1.2rem"} /> : <FiHeart fontSize={"1.2rem"} />
                        }
                    </div>
                }
                <NavLink to={`/product/${item.fileName}/${item.id}`}>
                    <div className='overflow-hidden'>
                        <img src={item.frontImage} className='w-full h-full object-cover hover:scale-105 transition-all duration-500' alt="front image" />
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