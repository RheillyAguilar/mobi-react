import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './hero.css'



const Hero = ({ heroData }) => {

    return (
        <>

            {/* INSERT SLIDE CAROUSEL  */}
            <Slider className='slick-hero' autoplay={true} slidesToShow={1} slidesToScroll={1}>

                {/* INSERT THE DATA FROM FETCHING */}
                {
                    heroData.map((heroData) => {
                        return (
                            <div className='h-[500px] relative flex items-center' key={heroData.id}>

                                {/* IMAGE HERE */}
                                <div className='absolute left-0 top-0 right-0 bottom-0'>
                                    <div className='overlay-slick'></div>
                                    <img src={heroData.background} alt="" className='w-full h-full' />
                                </div>

                                {/* CONTENT HERE */}
                                <div className='flex flex-col items-start relative z-10 gap-3  py-[150px] mx-[75px] max-w-[50%] text-[#f5f5f1] '>
                                    <h2 className='text-3xl line-clamp-2'>{heroData.title}</h2>
                                    <p className='text-lg line-clamp-3'>{heroData.description}</p>
                                    <Link to={`/details/${heroData.id}/${heroData.title}`}>
                                        <button className='px-10 py-1.5 flex items-center text-xl gap-1 bg-[#e50914] rounded-md hover:bg-[#f5f5f1] hover:text-[#e50914]'>View</button>
                                    </Link>

                                </div>

                            </div>
                        )
                    })
                }

            </Slider>

        </>
    )
}

export default Hero