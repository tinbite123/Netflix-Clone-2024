import React, { useEffect, useState } from "react"
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        (async () =>{
            try {
                const request = await axios.get(requests.fetchNetflixOriginals)
                console.log(request)
                setMovie(request?.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
                
            } catch (error) {
                console.log("error", error);
            }
        })()
    }, []);

    return (
        <div 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path})'`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button play">Play</button>
                    <button className="banner__button myList">My List</button>
                </div>
                {/* <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1> */}
            </div>
            <div className='banner_fadeBottom' />
        </div>
    )

}

export default Banner