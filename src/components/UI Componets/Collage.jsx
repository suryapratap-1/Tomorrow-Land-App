import React from 'react'

const Collage = ({data}) => {
    return (
        <section className='w-screen py-6 md:px-16 px-4 flex flex-col gap-6 bg-black'>
            <h2 className='collab-text text-center text-2xl md:text-[2.6vw] text-white'>
                {data.title}
            </h2>

            <div className='no-scrollbar flex gap-5 overflow-x-auto'>
                {
                    data.cardsDetail.map((card, index) => (
                        <div key={index} className='relative 
                            h-[50vh] max-[426px]:min-w-[100%] 
                            min-[425px]:w-[26%] min-[425px]:h-[55vh]
                            overflow-hidden cursor-pointer
                        '>
                            <img className='w-full h-full object-cover hover:scale-110 transition-all duration-700'
                                src={card.image} 
                                alt="card-image" 
                            />
                            <p className='collab-text absolute bottom-[10%] z-20 w-full text-base md:text-xl md:px-4 text-center text-white'>
                                {card.text}
                            </p>
                        </div>
                    ))
                }
            </div>

            <div className='text-center pt-4 md:pt-16'>
                <button className='w-fit text-white border border-white px-10 py-2.5 hover:bg-white hover:text-black transition-all ease-in-out'>
                    <p className='shop-btn tracking-widest'>
                        {data.btn}
                    </p>
                </button>
            </div>
        </section>
    )
}

export default Collage