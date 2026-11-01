import React,{useEffect, useState} from 'react'
import data from '../db/data'
import Navbar from './Navbar'
import Card from './Card'
const Home = () => {
    const [category,setCategory]=useState('All')
    const [color,setColor]=useState('All')
    const [price,setPrice]=useState('All')
    const [brand,setBrand]=useState('All')
    const [search,setSearch]=useState('')
    const [sort,setSort]=useState('')
    const [filterProducts,setFilterProducts]=useState(data)
    useEffect(()=>{
        let result=[...data] // don't refer "data" to the result because it modifies the original array 
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
        if(sort==="Low-High"){
            result=result.sort((a,b)=>a.newPrice-b.newPrice)
        }
        if(sort==="High-Low"){
            result=result.sort((a,b)=>b.newPrice-a.newPrice)
        }

        setFilterProducts(result)
    },[category,color,price,brand,search,sort])
    const handleReset=()=>{
        setCategory('All')
        setBrand('All')
        setColor('All')
        setPrice('All')
        setSearch('')
        setSort('')

    }

  return (
    <>
    <Navbar search={search} setSearch={setSearch}/>
    <div className='flex gap-8 pt-5'>
        {/* sidebar */}
        <div className='flex flex-col gap-6 ml-6'>
            {/* category */}
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-semibold'>Catgeory</h1>
            {
            ['All','sneakers','flats','sandals','heels'].map((item,index)=>(
                <label key={index}><input type="radio" name='category' value={item} onChange={(e)=>setCategory(item)} checked={category===item}/>{item}</label>
            ))
}
            </div>
            {/* color */}
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-semibold'>Color</h1>
            {
            ['All','black','Blue','Red','Green','White'].map((item,index)=>(
                <label key={index}><input type="radio" name='color' value={item} onChange={(e)=>setColor(item)} checked={color===item}/>{item}</label>
            ))
}
            </div>
            {/* price */}
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-semibold'>Price</h1>
            {
            ['All','0-50','50-100','100-150','150-200'].map((item,index)=>(
                <label key={index}><input type="radio" name='price' value={item} onChange={(e)=>setPrice(item)} checked={price===item}/>{item}</label>
            ))
}
            </div>
            <button className='w-40 h-10 px-4 py-2 bg-red-600 text-white font-medium' onClick={handleReset}>Reset Filters</button>
        </div>
        {/* productlist and  button*/}
        <div name='products' className='flex-1 mx-6'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
                {
                    ['All','Nike','Adidas','Puma','Vans'].map((item,index)=>(
                        <button key={index} className='px-4 py-2 border border-black cursor-pointer' onClick={(e)=>setBrand(item)}>{item}</button>
                    ))
                }
                

                </div>
                <div >
                    <select value={sort} onChange={(e)=>setSort(e.target.value)} name="" id="" className='w-30 h-10 border border-gray-400 px-4'>
                        <option value="">Default</option>
                        <option value="Low-High">Low-High</option>
                        <option value="High-Low">High-Low</option>
                        <option value="New-Old">New-Old</option>
                        <option value="Old-New">Old-New</option>
                        

                    </select>
                </div>

            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-4 pt-4 gap-4'>
                {
                    filterProducts.map((item,index)=>(
                        <Card key={index} item={item}/>
                    ))

                }

            </div>
        </div>
      
    </div>
    </>
  )
}

export default Home
