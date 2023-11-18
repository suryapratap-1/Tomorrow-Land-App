import React from 'react'

const Banner = ({value}) => {
  return (
    <section className='relative'>
        <div className='w-full h-[calc(100vh-56px)] z-0'>
            {
                value.img &&
                <img src={value.img} className='w-full h-full object-cover' alt="banner-image" />
            }
            {
                value.video &&
                <video autoPlay loop muted className='w-full h-full object-cover'>
                    <source src="https://cdn.shopify.com/videos/c/vp/a483a85c93b74e609dfe1a4a4ab7b1c8/a483a85c93b74e609dfe1a4a4ab7b1c8.HD-720p-2.1Mbps-19942355.mp4" type="video/mp4" />
                </video>
            }        
        </div>

        <div className='absolute bottom-0 z-10 w-full h-[40vh] bg-gradient-to-t from-neutral-900 to-transparent opacity-75'></div>
        <div className='absolute flex flex-col gap-2 bottom-20 left-16 z-20'>
            {
                value.description && <p className='text-white '>{value.description}</p>
            }
            <h2 className='text-4xl tracking-wider text-white font-bold mb-4'>
                {value.heading}
            </h2>
            <button className='px-8 py-3 w-fit whitespace-nowrap tracking-widest text-white font-bold border border-white
            hover:bg-white hover:text-black transition-all ease-in-out'>
                {value.btn}
            </button>
        </div>
    </section>
  )
}

export default Banner