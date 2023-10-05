
import RightSideItem from "../RightSideItem";


const ReadMore = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            <div className="col-span-3">
                <h1>details</h1>
            </div>
            <div>
                <RightSideItem></RightSideItem>
            </div>
        </div>
    );
};

export default ReadMore;