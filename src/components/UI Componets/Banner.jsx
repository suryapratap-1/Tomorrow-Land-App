import React from 'react'

const Banner = ({value}) => {
  return (
    <section className='w-full relative'>
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
        <div className='w-full absolute flex flex-col gap-2 bottom-10 z-20 text-center xl:bottom-20 xl:left-16 xl:w-fit'>
            {
                value.description && <p className='text-white '>{value.description}</p>
            }
            <h2 className='text-4xl tracking-wider text-white font-bold mb-4 px-8 xl:px-0'>
                {value.heading}
            </h2>
            <button className='relative left-1/2 -translate-x-1/2 px-8 py-2 w-fit whitespace-nowrap tracking-widest  font-bold 
                bg-white text-black border border-white hover:bg-white hover:text-black transition-all ease-in-out
                lg:py-3 lg:bg-transparent lg:text-white
                xl:left-0 xl:translate-x-0
            '>
                {value.btn}
            </button>
        </div>
    </section>
  )
}

export default Banner