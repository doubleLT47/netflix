import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"
import "./list.scss"

const List = () => {
    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMove, setIsMove] = useState(false);

    const handleClick = (step) => {
        setIsMove(true);
        let distance = listRef.current.getBoundingClientRect().x -50;
        
        if (step === -1 && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber + step)
        }
        if (step === 1 && slideNumber < 4) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            setSlideNumber(slideNumber + step);
        }
    }

    return (
        <div className="list">
            <span className="list-title">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="slider-arrow left" 
                onClick={()=> handleClick(-1)}
                style={{display: !isMove && "none"}}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlined className="slider-arrow right" onClick={()=> handleClick(1)}/>
            </div>
        </div>
    )
}

export default List
