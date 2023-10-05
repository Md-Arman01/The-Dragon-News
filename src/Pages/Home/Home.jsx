import LeftSideItem from "./LeftSideItem";
import NewsItem from "./NewsItem/NewsItem";
import RightSideItem from "./RightSideItem";



const Home = () => {
    return (
        <>
        
        <div className="grid grid-cols-4 gap-5 mt-10">
            <div>
                <LeftSideItem></LeftSideItem>
            </div>
            <div className="col-span-2">
                <NewsItem></NewsItem>
            </div>
            <div>
                <RightSideItem></RightSideItem>
            </div>
        </div>
        </>
    );
};

export default Home;