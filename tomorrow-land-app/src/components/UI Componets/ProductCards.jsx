import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Card } from './index'

const ProductCards = ({products, like}) => {
  return (
    <section>
        <div className='flex flex-col gap-5 px-16 py-8'>
            <h2 className='jewelery text-3xl'>{products.heading}</h2>
            {
                products.text && <p>{products.text}</p>
            }
        </div>
        <div className=' w-full flex flex-wrap gap-6'>
            <>
                {
                    products.map((item, id) => (
                        <Card key={id} like={like} item={item} />
                    ))
                }
            </>
        </div>
    </section>
  )
}

export default ProductCards