import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Page = ()=> {
    const [movies, setmovies] = useState([])
    

    useEffect (()=>{
                        axios.get(requests.requestPopular).then((response)=>{
                            setmovies(response.data.results)
                        })
    },[])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    const truncatestring = (str,num) => {
        if(str?.length > num)
        {
            return str.slice(0,num) + '...'
        }
        else{
            return str
        }
    }
   
    // console.log(movies)
    // console.log(movie)

  return (
            <>
             <div className='w-full h-[550px] text-white'>
                {/* gradient */}
                <div className=' absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                {/*  */}
                <div className=' w-full h-full'><img className=' w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/></div>
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                    <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                </div>
                <p className=' text-neutral-400 text-sm'>
                Released: {movie?.release_date}
                </p>
                <p className=' w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                {truncatestring(movie?.overview,150)}</p>
                </div>
                
                
             </div>

            </>
  )
}

export default Page