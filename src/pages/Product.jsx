import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { HomePageMensTShirt } from '../data/HomePageShirts';
import { jewelery } from '../data/Jwelery';
import{ BiSolidHeart } from 'react-icons/bi' 
import{ FiHeart } from 'react-icons/fi' 
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../features/add to cart/cartSlice';
import { collection } from '../data/Collection';
import { womenItems } from '../data/Women';
import { kidsItems } from '../data/Kids'

const CATEGORY = {
    'HomePageMensTShirt': HomePageMensTShirt,
    'jewelery': jewelery,
    'collection': collection,
    'womenItems': womenItems,
    'kidsItems' : kidsItems
}

const Product = () => {
    const params = useParams()
    // console.log(params);
    // console.log(params.category);
    const item = CATEGORY[params.category].filter((item) => item.id == params.id)
    // const item = HomePageMensTShirt.filter((item) => item.id == params.id)
    
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [sizeSelected, setSizeSelected] = useState(item[0].size[0])
    const [like, setLike] = useState(false)

    const likeHandler = () => {
        setLike(!like)
        if (like === false) toast.success('Item Liked')
        else toast.error('Removed Like')
    }
    // useEffect(()=>{
    //     if (like === false) toast.success('Remove Like')
    //     else toast.success('like')
    // },[like])


    const addItem = (item) => {
        dispatch(add(item))
        toast.success('Item added to cart')
    }
    const removeItem = (id) => {
        dispatch(remove(id))
        toast.success('Item removed from cart')
    }

    return (
        <main className='mt-16 w-screen text-black'>
            <section className='lg:px-20 py-12 flex flex-col xl:flex-row gap-10'>
                <section className=' w-full xl:w-[65%] '>
                    {
                        item.map((item, id) => (
                            <div key={id} className='no-scrollbar prodBox flex flex-row overflow-x-auto md:overflow-x-hidden gap-5'>
                                <img src={item.frontImage} className='w-full md:w-1/2 xl:w-[40%] h-[80vh] object-cover' alt="" />
                                <img src={item.backImage} className='w-full md:w-1/2 xl:w-[55%] h-[80vh] object-cover' alt="" />
                            </div>
                        )) 
                    }
                </section>
                <section className='px-4 w-full lg:w-[35%]'>
                    {
                        item.map((item, id) => (
                            <div key={id} className='flex flex-col gap-4 lg:gap-8'>
                                <h3 className='text-xl md:text-3xl font-bold'>{item.title}</h3>
                                <p className='text-lg md:text-xl'>Rs {item.price}</p>
                                <p className=' text-sm md:text-base tracking-wide'>{item.description}</p>
                                <div className='flex flex-col gap-3'>
                                    <p>Color</p>
                                    <div className='flex flex-row gap-3 items-center'>
                                        {
                                            item.color.map((color, index) => (
                                                // typeof(color) === String ? 
                                                // <div key={index} className={`w-8 h-8 rounded-full border bg-[${color}]`} /> :
                                                <button className='w-6 h-6 rounded-full border border-black'>
                                                    <img src={color} className='w-full h-full rounded-full object-cover' alt="item-color" />
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                                
                                <div className='flex flex-col gap-2'>
                                    <p>Size</p>
                                    <div className='flex flex-row gap-3'>
                                        {
                                            item.size.map((size, index) => (
                                                <div key={index}>
                                                    <button onClick={(e) => setSizeSelected(e.target.innerText)}
                                                        className={` px-3 md:px-5 py-1  md:py-2.5 border border-black hover:bg-black hover:text-white transition-all duration-300
                                                        ${sizeSelected == size ? 'bg-black text-white' : 'bg-transparent text-gray-500'} 
                                                    `}>
                                                        {size}
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
                                    {
                                        cart.some((p) => p.id == params.id ) ? 
                                        <button onClick={() => removeItem(item.id)}
                                            className='w-full py-2.5 text-xl text-white bg-black hover:bg-white hover:text-black
                                                border border-black text-center transition-all duration-500
                                            '>
                                            Remove from Cart
                                        </button> :
                                        <button onClick={() => addItem(item)}
                                            className='w-full py-2.5 text-xl text-white bg-black hover:bg-white hover:text-black
                                                border border-black text-center transition-all duration-500
                                            '>
                                            Add to Cart
                                        </button> 
                                        
                                    }

                                    <div className='flex justify-between'>
                                        <div className='block md:hidden'>
                                            <p className='text-lg'>Add to wishlist</p>
                                        </div>
                                        <button onClick={likeHandler} className=' md:px-3 md:border border-black'>
                                            {
                                                like ? 
                                                <BiSolidHeart className=' text-2xl md:text-[2rem]'/> :
                                                <FiHeart className=' text-2xl md:text-[2rem]'/>
                                            }
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </section>
            </section>
        </main>
    )
}

export default Product