import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbarData } from '../../data/NavData'
import { VscChevronRight } from 'react-icons/vsc'
import { FiHeart } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'


const SideNavLinks = ({ navlinks, setNavlinks }) => {
    return (
        <div onClick={() => setNavlinks(!navlinks)} className={`w-screen h-screen bg-[#00000043] ${navlinks ? "block" : "hidden"}`}>
            <div className={`${navlinks ? " opacity-100 translate-x-0" : " opacity-0 -translate-x-full"} side-nav-sidebar
                 bg-black px-4 w-screen h-full overflow-y-auto transition-all duration-300  text-white
                min-[425px]:w-[90%]
                md:w-[50%] xl:-translate-x-full
            `}>
                <div>
                    {
                        navbarData.map((nav, index) => (
                            <NavLink to={`${nav.key}`} key={index} >
                                <p className={`${index === 0 ? "border-t" : "border-t-0"}
                                    flex flex-row justify-between py-4 font-medium border-b border-gray-700
                                `}>
                                    {nav.value}
                                    <button>
                                        <VscChevronRight />
                                    </button>
                                </p>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='py-8 flex flex-col gap-5 border-b border-gray-700'>
                    <div className='flex flex-row gap-2'>
                        <NavLink to='wishlist'>
                            <button className='px-10 py-3 flex flex-row items-center gap-2 border border-white'>
                                <FiHeart />
                                <p>Wishlist</p>
                            </button>
                        </NavLink>
                        <button className='px-4 py-3 flex flex-row items-center gap-2 border border-white'>
                            <p>India (INR <span>₹</span>)</p>
                            <VscChevronRight />
                        </button>
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <h4 className='font-bold text-xl pb-2 capitalize'>Don't want to miss out?</h4>
                        <p className='text-gray-400'>Be the first to know about new product releases, limited edition items and much more</p>
                        <button className='px-14 py-3 font-bold tracking-widest w-fit border'>
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
                <div className=' pb-12'>
                    <div className='py-8 flex flex-col gap-4 border-b  border-gray-700'>
                        <p className='text-gray-400'>Have a quick question? Take a look at the commonly asked questions.</p>
                        <button className='px-14 py-3 font-bold tracking-widest w-fit border'>FAQ</button>
                    </div>
                    <div className='py-8 px-16 flex flex-row gap-5 justify-between items-center'>
                        <FaFacebookF style={{color: "white", fontSize: "1.5rem"}} />
                        <BsInstagram style={{color: "white", fontSize: "1.5em"}} />
                        <BsTwitter style={{color: "white", fontSize: "1.5em"}} />
                    </div>
                </div>

            </div>

            {/* <div className='zbsolute z-40 w-screen h-screen bg-slate-600'></div> */}
        </div>
    )
}

export default SideNavLinks