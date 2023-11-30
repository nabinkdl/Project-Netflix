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
    <><h2 className='teaxt-white font-bold p-4 md:text-xl' >{title}  </h2>
        <div className='  relative flex items-center'>
          <MdChevronLeft className=" bg-white rounded-full text-black absolute  opacity-50" size={40}/>
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' id={'slider'}>      
                    {movies.map((item, id) => (
                <Movie item={item}/>
                ))}
            </div>
            <MdChevronRight className=" bg-white rounded-full text-black absolute  opacity-50  " size={40}/>
        </div>
    </>
    
  )
}

export default Row