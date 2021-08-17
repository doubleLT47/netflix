import { ArrowBackOutlined } from "@material-ui/icons"
import { Link, useLocation } from "react-router-dom"
import "./watch.scss"

const Watch = () => {
    const movie = useLocation().movie;
    
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video 
                className="video" 
                autoPlay 
                progress 
                controls 
                src={movie.video} 
            />
        </div>
    )
}

export default Watch
