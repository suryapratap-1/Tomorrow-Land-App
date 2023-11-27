import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbarData } from '../../data/NavData'

const Navlinks = ({ navlinks, setNavlinks, categoryHandler }) => {
    return (
        // ${navlinks ? 'flex' : 'hidden'}
        <div className={`hidden xl:flex w-full flex-row gap-5 justify-between items-center text-sm text-white`}>
            <div className="navlinks flex flex-row gap-8">
                {
                    navbarData.map( (nav, index) => (
                        <div key={index} onMouseEnter={categoryHandler} className='relative'>
                            <NavLink to={`${nav.key}`}>
                                <h3 className=' text-base'>{nav.value}</h3>
                            </NavLink>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Navlinks