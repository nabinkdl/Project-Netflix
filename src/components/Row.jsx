import React, {useEffect, useState} from "react"
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import axios from "axios"
import Movie from "./Movie";
const Row = ({ title, fetchURL, rowID  }) => {
   
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
          setMovies(response.data.results);
        });
      }, [fetchURL]);
    console.log(fetchURL)

    const slideLeft = () => {
      var slider = document.getElementById('slider' + rowID);
      slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight= () => {
      var slider = document.getElementById('slider' + rowID);
      slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <><h2 className='teaxt-white font-bold p-4 md:text-xl ' >{title}  </h2>
        <div className='flex items-center relative group'>
          <MdChevronLeft onClick={slideLeft} className=" bg-white rounded-full text-black absolute  left-1  opacity-50 cursor-pointer z-10 hidden group-hover:block" size={40}/>

            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' id={'slider' + rowID}>      
                    {movies.map((item, id) => (
                <Movie item={item}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className="bg-white rounded-full text-black absolute right-1  opacity-50 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        </div>
    </>
    
  )
}

export default Row