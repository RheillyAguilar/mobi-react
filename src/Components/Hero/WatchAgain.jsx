import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const WatchAgain = ({ watchagainData }) => {
    var settings = {
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1391,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    }
    return (

        <>


            <div className='text-[#f5f5f1] text-2xl mt-20 '>
                <h1 className='mx-3 my-1.5'>Watch Again</h1>
            </div>

            {/* CAROUSEL ACTION MOVIE */}
            <Slider {...settings}>

                {
                    watchagainData.map((watchagainData) => {
                        return (

                            <div className='mx-3 my-1.5 relative' key={watchagainData.id}>
                                <Link to={`/details/${watchagainData.id}`}>
                                    {/* IMAGE HERE AND ALSO TITLE */}
                                    <img src={watchagainData.image} alt="" className='h-[270px] w-[90%]' />
                                    <h1 className='text-[18px] text-[#f5f5f1] py-1.5 line-clamp-2'>{watchagainData.title}</h1>
                                </Link>

                            </div>
                        )
                    })
                }
            </Slider>

        </>
    )
}

export default WatchAgain