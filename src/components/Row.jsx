import React, {useEffect, useState} from "react"
import axios from "axios"
const Row = ({ title, fetchURL ,  }) => {
   
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
          setMovies(response.data.results);
        });
      }, [fetchURL]);
    console.log(fetchURL)

  return (
    <><h2 className='teaxt-white font-bold p-4 md:text-xl' >{title}</h2>
        <div className=' relative flex items-center'>
            <div className="" id={'slider'}>      
            
            {movies.map((item, id) => (
           <div className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
            <img className=" object-cover w-full h-auto block"  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}/>
            <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100">
                    <p className="className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item?.title}</p>
            </div>
           </div>
          ))}
            </div>
        </div>
    </>
    
  )
}

export default Row