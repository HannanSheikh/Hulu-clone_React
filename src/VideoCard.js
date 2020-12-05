import React,{ forwardRef} from 'react'
import './VideoCard.css'
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
import TextTruncate from "react-text-truncate";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard= forwardRef(({ movie },ref) =>{

    return (

        <div ref={ref} className="videoCard">

            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" />

            <TextTruncate 
            line={1} 
            element="p" 
            truncateText="..." 
            text={movie.overview}
            />

            <h2>{movie.title || movie.original_name}</h2>

            {/* <p>{movie.overview}</p> */}

            <p className="videoCard__stats">

                {movie.media_type && `${movie.media_type} .`}

                {movie.release_date || movie.first_air_date} .

                <ThumbUpSharpIcon /> {" "}

                {movie.vote_count}
            </p>
        </div>
    )
})

export default VideoCard
