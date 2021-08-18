import "./home.css"

import FeatureInfo from "../../components/featureInfo/FeatureInfo"
import Chart from "../../components/chart/Chart"
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react"
import axios from "axios"

const Home = () => {
    const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],[]) ;
    const [userStats, setUserStats] = useState([]);

    useEffect(() =>{
        const getStats = async () => {
        try {
            const res = await axios.get(`/users/stats`, {
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDAyMGYxZDY0MGI1Mzg4NDQwMjM1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTAzODg4NCwiZXhwIjoxNjI5NDcwODg0fQ.92JC8TnvL5jLFpHo9x0BxJdSkmlfho-caxLZjS9D-NE"
            }
            });
            const statsLists = res.data.sort(function(a, b) {
                return a._id - b._id;
            })
            statsLists.map(item => setUserStats(prev => [...prev, {name: MONTHS[item._id-1], "New User": item.total}]))
        }
        catch (err) {
            console.log(err)
        }
        }

        getStats();
    },[MONTHS])
    return (
        <div className="home">
            <FeatureInfo />
            <Chart data={userStats} title="User Analytics" dataKey="New User" grid/>
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
