import React, {useEffect, useState} from "react"

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
        <div className=' relative flex items-center'>
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' id={'slider'}>      
                    {movies.map((item, id) => (
                <Movie item={item}/>
                ))}
            </div>
        </div>
    </>
    
  )
}

export default Row