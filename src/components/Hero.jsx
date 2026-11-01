import React,{useEffect, useState} from 'react'
import data from '../db/data'
import Card from './Card'
import Navbar from './Navbar'
const Hero = () => {
    const [category,setCategory]=useState('All')
    const [color,setColor]=useState('All')
    const [price,setPrice]=useState('All')
    const [search,setSearch]=useState('')
    const [brand,setBrand]=useState('All')

    const [filterProducts,setFilterProducts]=useState(data)
    
    useEffect(()=>{
        let result=data
        if(category!=='All'){
            result=result.filter((item)=>item.category===category)
        }
        if(color!=='All'){
            result=result.filter((item)=>item.color===color)
        }
        if(price!=='All'){
            let arr=price.split('-')
            result=result.filter((item)=>item.newPrice>=arr[0] && item.newPrice<=arr[1])
        }
        if(brand!=='All'){
            result=result.filter((item)=>item.company===brand)
        }
        if(search!==''){
            result=result.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
        }
        setFilterProducts(result)
        
        

    },[category,color,search,price,brand])
    console.log(search)



  return (
    <>
    <Navbar search={search} setSearch={setSearch}/>
    <div className='flex gap-8 p-5 '>
        {/* sidebar filter */}
      <div name='sidebar' className='flex flex-col gap-4 px-4 '>
        {/* category */}
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold mb-2'>Category</h1>
            {
                ["All", "sneakers", "flats", "sandals", "heels"].map((item,index)=>(
                    <label key={index}><input type="radio" name='category' value={item} onChange={(e)=>setCategory(e.target.value)} checked={category===item}/>{item}</label>
                ))

            }
        </div>
        {/* color */}
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold mb-2'>Color</h1>
            {
                ["All", "black", "white", "red", "blue", "green"].map((item,index)=>(
                    <label key={index}><input type="radio" name='Color' value={item} onChange={(e)=>setColor(e.target.value)} checked={color===item}/>{item}</label>
                ))

            }
        </div>
        {/* price */}
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold mb-2'>price</h1>
            {
                ['All',"0-50", "50-100", "100-200"].map((item,index)=>(
                    <label key={index}><input type="radio" name='price' value={item} onChange={(e)=>setPrice(e.target.value)} checked={price===item}/>{item}</label>
                ))

            }
        </div>
        {/* Reset filters */}

       <button className='w-40 h-10 bg-red-600 text-white font-semibold cursor-pointer text-md' onClick={()=>{setCategory('All');setColor('All');setPrice('All');setSearch('');setBrand('All');}}>
        Reset Filters</button>


      </div>
      {/* product */}
      <div name='products' className='flex-1'>
        <div name=''className=' flex gap-3'>
            {["All","Nike","Adidas","Puma",'Vans'].map((item,index)=>(
                <button key={index} className='px-4 py-2 border border-black cursor-pointer' onClick={()=>setBrand(item)} >{item}</button>
            ))
            }

        </div>
        <div className='grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 pt-4 gap-4'>
            {filterProducts.map((item,index)=>(
                <Card key={index} item={item}/>
            ))}
        </div>

      </div>
    </div>
    </>
  )  

}

export default Hero
