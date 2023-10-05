import Slider from '../Pages/Home/Slider';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-2 my-10'>
            <div className='flex justify-center'>
            <img src={logo} alt="" />
            </div>
            <h1 className='text-[#706F6F]'>Journalism Without Fear or Favour</h1>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            <Slider></Slider>
        </div>
    );
};

export default Header;