import React, {useEffect, useState} from "react"
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import axios from "axios"
import Movie from "./Movie";
const Row = ({ title, fetchURL   }) => {
   
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
          setMovies(response.data.results);
        });
      }, [fetchURL]);
    console.log(fetchURL)

  return (
    <><h2 className='teaxt-white font-bold p-4 md:text-xl ' >{title}  </h2>
        <div className='flex items-center relative group'>
          <MdChevronLeft className=" bg-white rounded-full text-black absolute  left-1  opacity-50 cursor-pointer z-10 hidden group-hover:block" size={40}/>

            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' id={'slider'}>      
                    {movies.map((item, id) => (
                <Movie item={item}/>
                ))}
            </div>
            <MdChevronRight className="bg-white rounded-full text-black absolute right-1  opacity-50 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        </div>
    </>
    
  )
}

export default Row