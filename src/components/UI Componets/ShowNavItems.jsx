import React from 'react'

const ShowNavItems = ({items}) => {
    console.log(items);
    return (
        <div>
            {
                items.map((item, index) => (
                    <div className='w-full flex flex-row gap-36' key={index}>
                        {
                            item.options.map((item, i) => (
                                <div className='flex flex-col'>
                                    <div className='font-medium pb-6' key={i}>{item.title}</div>
                                    <div className='flex flex-col'>
                                        {
                                            item.items.map((type, i) => (
                                                <p className='navP hover:text-gray-400 cursor-pointer' key={i}>
                                                    {type}
                                                </p>
                                            ))
                                        } 
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            } 
        </div>
    )
}

export default ShowNavItems