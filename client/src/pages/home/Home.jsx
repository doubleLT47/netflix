import "./home.scss"
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState, useEffect  } from "react";
import axios from 'axios';

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? '&genre=' + genre : ""}`, {
                    headers: {
                        token: "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDAyMGYxZDY0MGI1Mzg4NDQwMjM1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTAzODg4NCwiZXhwIjoxNjI5NDcwODg0fQ.92JC8TnvL5jLFpHo9x0BxJdSkmlfho-caxLZjS9D-NE"
                    }
                });
                
                setLists(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        getRandomLists();
    },[genre, type])
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre}/>
            {lists.map(list => (
                <List key={list._id} list={list}/>
            ))}
        </div>
    )
}

export default Home
