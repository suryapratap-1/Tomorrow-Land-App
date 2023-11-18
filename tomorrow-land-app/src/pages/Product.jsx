import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { HomePageMensTShirt } from '../data/HomePageShirts';
import{ BiSolidHeart } from 'react-icons/bi' 
import{ FiHeart } from 'react-icons/fi' 
import toast from 'react-hot-toast';

const Product = () => {
    const params = useParams()
    const item = HomePageMensTShirt.filter((item) => item.id == params.id)
    const [sizeSelected, setSizeSelected] = useState(item[0].size[0])
    const [like, setLike] = useState(false)

    const sizeHandler = (e) => {
        setSizeSelected(e.target.innerText)
    }
    const likeHandler = () => {
        setLike(!like)
        console.log(like);
        if (like === false) toast.success('Liked')
        else toast.success('Removed like')
    }

    return (
        <main className='mt-16 w-screen text-black'>
            <section className='lg:px-20 py-12 flex flex-row gap-10'>
                <section className='w-[65%]'>
                    {
                        item.map((item, id) => (
                            <div key={id} className='flex flex-row gap-5'>
                                <img src={item.frontImage} className='w-[40%] h-[80vh] object-cover' alt="" />
                                <img src={item.backImage} className='w-[55%] h-[80vh] object-cover' alt="" />
                            </div>
                        )) 
                    }
                </section>
                <section className='w-[35%]'>
                    {
                        item.map((item, id) => (
                            <div key={id} className='flex flex-col gap-8'>
                                <h3 className='text-3xl font-bold'>{item.title}</h3>
                                <p className='text-xl'>{item.price}</p>
                                <p className='text-lg tracking-wide'>{item.description}</p>
                                <div className='flex flex-row gap-3 items-center'>
                                    {
                                        item.color.map((color, index) => (
                                            <div key={index} className={`w-8 h-8 rounded-full border bg-[${color}]`} />
                                        ))
                                    }
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p>Size</p>
                                    <div className='flex flex-row gap-3'>
                                        {
                                            item.size.map((size, index) => (
                                                <div key={index}>
                                                    <button onClick={sizeHandler}
                                                        className={`px-5 py-2.5 border border-black hover:bg-black hover:text-white
                                                        ${sizeSelected == size ? 'bg-black text-white' : 'bg-transparent text-gray-500'} 
                                                    `}>
                                                        {size}
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-row gap-6'>
                                    <button className='w-full py-2 text-xl text-white bg-black hover:bg-white hover:text-black
                                        border border-black text-center
                                    '>
                                        Add to Cart
                                    </button>
                                    <button onClick={likeHandler} className='px-3 border border-black'>
                                        {
                                            like ? 
                                            <BiSolidHeart fontSize={'2rem'}/> :
                                            <FiHeart fontSize={'2rem'}/>
                                        }
                                    </button>
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