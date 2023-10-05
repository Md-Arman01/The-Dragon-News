import Marquee from "react-fast-marquee";
const Slider = () => {
  return (
    <div className="flex items-center gap-5 bg-gray-200 px-5 py-3">
      <button className="btn btn-accent">Latest</button>
      <Marquee pauseOnHover={true}>
             Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default Slider;
