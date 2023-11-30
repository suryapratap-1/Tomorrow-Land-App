import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiSolidHeart } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'


const Card = ({item, like}) => {
    const [liked, setLiked] = useState(false)

    return (
        <div className='text-black mb-4'>
            <NavLink>
                <div className='relative w-full flex flex-col gap-3 tracking-wider'>
                    {
                        like && 
                        <div onClick={() => setLiked(!liked)} className='absolute right-3 top-3 hover:scale-110'>
                            {
                                liked ? <BiSolidHeart fontSize={"1.2rem"} /> : <FiHeart fontSize={"1.2rem"} />
                            }
                        </div>
                    }

                    <NavLink to={`/product/${item.fileName}/${item.id}`}>
                        <img src={item.frontImage} className='w-full h-[400px] md:h-[600px] object-cover' alt="front image" />
                    </NavLink>
                    <div className='flex flex-row items-center justify-between'>
                        <h3 className='text-base'>
                            {item.title}
                        </h3>
                        <p className='whitespace-nowrap'>
                            {item.price}
                        </p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        {
                            item.color.map((color, id) => (
                                <div key={id} className={`bg-[${color}] w-5 h-5 rounded-full`} />
                            ))
                        }
                    </div>
                    
                </div>
            </NavLink>
        </div>
    )
}

export default Card