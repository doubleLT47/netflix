import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"
import "./list.scss"

const List = ({list}) => {
    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
    const [isMove, setIsMove] = useState(false);

    const handleClick = (step) => {
        setIsMove(true);
        let distance = listRef.current.getBoundingClientRect().x -50;
        
        if (step === -1 && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber + step)
        }
        if (step === 1 && slideNumber < 10 - clickLimit) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            setSlideNumber(slideNumber + step);
        }
    }

    return (
        <div className="list">
            <span className="list-title">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="slider-arrow left" 
                onClick={()=> handleClick(-1)}
                style={{display: !isMove && "none"}}/>
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <ListItem index={i} key={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className="slider-arrow right" onClick={()=> handleClick(1)}/>
            </div>
        </div>
    )
}

export default List
