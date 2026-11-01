import React from 'react'
import data from '../db/data'
const Card = ({item}) => {
  return (
    <div className='flex flex-col items-start justify-center gap-3'>
      <img src={item.img} alt="" className='object-center w-[120px] h-[100px]'/>
      <h1 className='text-2xl font-semibold'>{item.title}</h1>
      <div className='flex gap-2'>
        <p>{item.star}</p>
        <p>{item.reviews}</p>
      </div>
      <p>{item.newPrice}$</p>
      <button className='bg-blue-500 w-full py-2 text-white font-semibold cursor-pointer rounded-xl'>Add to Cart</button>

    </div>
  )
}

export default Card
