import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='w-full px-4 pt-10 bg-black md:px-16 overflow-x-hidden'>
        <div className='flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-[12vw] pb-10 border-b border-gray-800'>
            <div className='flex flex-col gap-5'>
                <NavLink to='/'>
                    <svg width="180" height="40" viewBox="0 0 132 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.67474 1.43571H0.837934V0.225034H7.87905V1.43571H5.03026V8.63802H3.67474V1.43571ZM14.9082 0.0836559C17.2978 0.0458224 19.394 2.02113 19.3421 4.43053C19.394 6.83993 17.2978 8.81524 14.9082 8.7774C12.4926 8.81524 10.4364 6.83993 10.4863 4.43053C10.4483 2.02113 12.5046 0.0458224 14.9082 0.0836559ZM14.9202 1.32021C13.1694 1.32021 11.8917 2.64638 11.8917 4.41659C11.8917 6.1868 13.1694 7.53885 14.9202 7.53885C16.671 7.53885 17.9486 6.21269 17.9486 4.41659C17.9486 2.62049 16.645 1.32021 14.9202 1.32021ZM31.0227 0.0836559V8.63602H29.6672V3.35924L27.2516 6.51934H26.7924L24.3649 3.3453V8.63403H23.0094V0.081665H23.4825L27.022 4.78497L30.5615 0.081665H31.0207L31.0227 0.0836559ZM39.3555 0.0836559C41.7451 0.0458224 43.8413 2.02113 43.7893 4.43053C43.8413 6.83993 41.7451 8.81524 39.3555 8.7774C36.9399 8.81524 34.8836 6.83993 34.9335 4.43053C34.8956 2.02113 36.9519 0.0458224 39.3555 0.0836559ZM39.3674 1.32021C37.6166 1.32021 36.339 2.64638 36.339 4.41659C36.339 6.1868 37.6166 7.53885 39.3674 7.53885C41.1182 7.53885 42.3959 6.21269 42.3959 4.41659C42.3959 2.62049 41.0923 1.32021 39.3674 1.32021ZM52.7609 8.63602L50.3593 5.38632H48.8122V8.63602H47.4566V0.223043H50.537C52.2359 0.223043 53.3998 1.28039 53.3998 2.79771C53.3998 3.90683 52.7869 4.77302 51.7767 5.16928L54.3061 8.63602H52.7589H52.7609ZM48.8122 4.1876H50.511C51.4433 4.1876 52.0063 3.62607 52.0063 2.81165C52.0063 1.99724 51.4433 1.42177 50.511 1.42177H48.8122V4.1876ZM62.6149 8.63602L60.2133 5.38632H58.6661V8.63602H57.3106V0.223043H60.391C62.0899 0.223043 63.2537 1.28039 63.2537 2.79771C63.2537 3.90683 62.6409 4.77302 61.6307 5.16928L64.1601 8.63602H62.6129H62.6149ZM58.6661 4.1876H60.365C61.2973 4.1876 61.8603 3.62607 61.8603 2.81165C61.8603 1.99724 61.2973 1.42177 60.365 1.42177H58.6661V4.1876ZM71.3948 0.0836559C73.7845 0.0458224 75.8806 2.02113 75.8287 4.43053C75.8806 6.83993 73.7845 8.81524 71.3948 8.7774C68.9793 8.81524 66.923 6.83993 66.9729 4.43053C66.935 2.02113 68.9912 0.0458224 71.3948 0.0836559ZM71.4068 1.32021C69.656 1.32021 68.3784 2.64638 68.3784 4.41659C68.3784 6.1868 69.656 7.53885 71.4068 7.53885C73.1576 7.53885 74.4353 6.21269 74.4353 4.41659C74.4353 2.62049 73.1317 1.32021 71.4068 1.32021ZM90.8952 0.225034L87.6112 8.7774H87.164L84.6466 2.81165L82.1292 8.7774H81.67L78.386 0.225034H79.8813L81.9894 5.91002L84.405 0.0856476H84.8782L87.3057 5.91002L89.4139 0.225034H90.8952ZM93.9516 0.225034H95.3071V7.42734H99.166V8.63802H93.9516V0.225034ZM107.639 7.23618H103.843L103.243 8.63802H101.799L105.518 0.0856476H105.978L109.697 8.63802H108.239L107.639 7.23618ZM105.748 2.5966L104.329 6.07529H107.153L105.748 2.5966ZM119.78 0.225034V8.7774H119.321L114.185 2.93909V8.63602H112.829V0.0836559H113.302L118.427 5.89608V0.225034H119.782H119.78ZM124.216 0.225034H126.861C129.622 0.225034 131.449 1.93352 131.449 4.41858C131.449 6.90365 129.608 8.63802 126.861 8.63802H124.216V0.225034ZM126.849 7.42734C128.804 7.42734 130.058 6.17884 130.058 4.41858C130.058 2.65833 128.818 1.44965 126.849 1.44965H125.572V7.42734H126.849ZM1.2412 18.1701C1.7283 18.9228 2.39908 19.4086 3.29943 19.4086C4.19978 19.4086 4.85059 18.9128 4.85059 18.1183C4.81865 17.3855 4.49923 17.1685 3.5889 16.7145L2.81232 16.3421C1.95389 15.9498 1.34301 15.5675 1.30109 14.5779C1.30109 13.5365 2.20144 12.8953 3.28745 12.8953C4.15586 12.8953 4.89052 13.3174 5.3357 13.9785L4.93244 14.2772C4.5192 13.6997 3.95024 13.3891 3.28745 13.3891C2.90415 13.3891 2.56278 13.4827 2.28329 13.6778C2.0038 13.873 1.86006 14.1637 1.86006 14.544C1.90199 15.2669 2.25334 15.462 3.06985 15.8642L3.83445 16.2366C4.9005 16.7324 5.40757 17.2063 5.40757 18.1044C5.40757 19.1776 4.48726 19.9104 3.28745 19.9104C2.25334 19.9104 1.37295 19.3628 0.835938 18.4668L1.2392 18.1681L1.2412 18.1701ZM11.1311 13.4847H8.63766V12.9988H14.1715V13.4847H11.6681V19.8109H11.1311V13.4847ZM20.482 12.8973C22.3745 12.8654 24.0295 14.4664 23.9896 16.4058C24.0315 18.3353 22.3765 19.9562 20.482 19.9144C18.5675 19.9562 16.9445 18.3353 16.9864 16.4058C16.9445 14.4664 18.5695 12.8674 20.482 12.8973ZM20.492 13.3931C18.847 13.3612 17.5234 14.7352 17.5533 16.3959C17.5214 18.0785 18.847 19.4285 20.492 19.4086C22.117 19.4405 23.4506 18.0566 23.4206 16.3959C23.4526 14.7352 22.117 13.3632 20.492 13.3931ZM32.3263 19.8109L30.0305 16.7563H28.3656V19.8109H27.8285V13.0008H30.1463C31.43 13.0008 32.2145 13.7953 32.2145 14.8686C32.2145 15.8184 31.6356 16.5392 30.6514 16.7165L32.9592 19.8128H32.3283L32.3263 19.8109ZM28.3636 16.2724H30.1224C31.1046 16.2724 31.6535 15.7049 31.6535 14.8786C31.6535 14.0522 31.1046 13.4847 30.1224 13.4847H28.3636V16.2704V16.2724ZM36.4528 13.0008H40.725V13.4867H36.9898V15.8901H39.8965V16.376H36.9898V19.327H40.8487V19.8128H36.4528V13.0028V13.0008Z" fill="white"></path>
                    </svg>
                </NavLink>
                <div className='flex flex-row gap-5 items-center'>
                    <FaFacebookF style={{color: "white", fontSize: "1rem"}} />
                    <BsInstagram style={{color: "white", fontSize: "1.1em"}} />
                    <BsTwitter style={{color: "white", fontSize: "1.1em"}} />
                </div>
                <div className='flex flex-row gap-1'>
                    <img src="../../assets/paypal.svg" alt="paypal" />
                    <img src="../../assets/visa.svg" alt="paypal" />
                    <img src="../../assets/mastercard.svg" alt="paypal" />
                    <img src="../../assets/amex.svg" alt="paypal" />
                    <img src="../../assets/bancontact.svg" alt="paypal" />
                </div>
            </div>
            <div className='flex flex-col gap-4 whitespace-nowrap'>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>CUSTOMER CARE</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>CONTACT</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>PAYMENTS</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>SHIPPING AND DELIVERY</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>RETURNS AND REFUNDS</h4>
                </NavLink>
            </div>
            <div className='flex flex-col gap-4 whitespace-nowrap'>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>TOMORROWLAND STORE</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>ABOUT</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>COLLABS</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>GIFT CARD</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>OFFICIAL STORES</h4>
                </NavLink>
                <NavLink to='/'>
                    <h4 className='text-sm font-ceraRegular text-gray-300'>REFER A FRIEND</h4>
                </NavLink>
            </div>
            <div className='flex flex-col gap-5'>
                <h4 className='text-sm font-ceraRegular tracking-wider text-gray-300'>DON'T WANT TO MISS OUT?</h4>
                <p className='text-base font-ceraRegular tracking-wider text-gray-300'>Be the first to know about new product releases, limited edition items and much more</p>
                <button className='mr-28 border w-full min-[425px]:w-fit px-10 py-3 font-semibold text-sm tracking-wider font-ceraRegular text-gray-300
                    hover:bg-white hover:text-black transition-all ease-in-out'>
                    SUBSCRIBE
                </button>
            </div>
        </div>
        <div className='flex flex-row gap-1 justify-center py-4 tracking-wide text-gray-400'>
            <p className=' text-xs'>© 2023 Tomorrowland</p>
            <p className=' text-xs'>•</p>
            <p className=' text-xs'>Terms & Conditions</p>
            <p className=' text-xs'>•</p>
            <p className=' text-xs'>Privacy Policy</p>
        </div>
    </footer>
  )
}

export default Footer