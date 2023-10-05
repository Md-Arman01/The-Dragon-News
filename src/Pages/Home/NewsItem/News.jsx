import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const News = ({ aNews }) => {
  const { _id, image_url, title, details ,author, total_view } = aNews;
  return (
    <div>
      <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            className="w-full"
            src={image_url}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          {
                details.length > 200 ?
                <p className="flex flex-col mt-3 font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                    {
                        details.slice(0, 200)
                    }
                    <Link to={`/aNews/${_id}`} className='text-[#FF8C47] font-bold '>Read More</Link>
                </p>
                 :
                <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                    {
                        details
                    }
                </p>
          }
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center -space-x-3">
            <img
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              data-tooltip-target="author-1"
            />
            <div
              data-tooltip="author-1"
              className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
              Natali Craig
            </div>
            <img
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              data-tooltip-target="author-2"
            />
            <div
              data-tooltip="author-2"
              className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
              {author.name}
            </div>
          </div>
          <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};


News.propTypes ={
    aNews: PropTypes.object.isRequired,
}
export default News;
