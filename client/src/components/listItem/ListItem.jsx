import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState, useEffect } from "react"
import "./listItem.scss";
import axios from "axios";
import { Link } from "react-router-dom"

const ListItem = ({ index, item }) => {
    const [isHover, setIsHover] = useState(false);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async() => {
            try {
                const res = await axios.get('movies/'+item, {
                    headers: {
                        token: "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDAyMGYxZDY0MGI1Mzg4NDQwMjM1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTQ3MTE1MCwiZXhwIjoxNjI5OTAzMTUwfQ.BJt2lZ1pJczqsjqs0yz73_DzvgrDpxzUClY0aGQhW2Y"
                    }
                });
                setMovie(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        getMovie();
    },[item])

    return (
        <Link to={{pathname: "/watch", movie: movie}}>
            <div className="list-item" 
            style={{left: isHover && index*225 - 50 + index*2.5}}
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)}
            >
                <img 
                src={movie?.img} 
                alt=""
                />
                {isHover && (
                    <> 
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="item-info">
                            <div className="icons">
                                <PlayArrow className="icon"/>
                                <Add className="icon"/>
                                <ThumbUpAltOutlined className="icon"/>
                                <ThumbDownOutlined className="icon"/>
                            </div>
                            <div className="item-info-top">
                                <span>{movie.duration}</span>
                                <span className="limits">{movie.limit}+</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.desc}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}

export default ListItem
