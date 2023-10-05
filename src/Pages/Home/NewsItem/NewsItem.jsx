import { useEffect } from "react";
import { useState } from "react";
import News from "./News";


const NewsItem = () => {

    const [allNews , setAllNews] = useState([])

    useEffect(()=>{

        fetch('../../../../public/Data/news.json')
        .then(res => res.json())
        .then(res => setAllNews(res))

    },[])


    return (
        <div className="grid  gap-5">
            {
                allNews?.map(aNews => <News key={aNews._id} aNews={aNews}></News>)
            }
        </div>
    );
};

export default NewsItem;