import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-12 w-12 font-semibold flex justify-center items-center text-xl'>{props.id}</h2>
        <div>
        <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, laborum omnis dolore quos consectetur ipsam!
        </p>
        <div className='flex  justify-between items-center gap-4 mt-6'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-long-line"></i></button>
        </div>
        </div>

    
     </div>
    </div>
  )
}

export default RightCardContent
