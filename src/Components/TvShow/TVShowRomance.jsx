import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const TVShowRomance = ({ tvshowRomance }) => {
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

      // to scroll up when click the link
    const scrollUp = () => {
        window.scrollTo(0,0)
    }

    return (

        <>


            <div className='text-[#f5f5f1] text-2xl mt-20 '>
                <h1 className='mx-3 my-1.5'>Tv Show Romance</h1>
            </div>

            {/* CAROUSEL ACTION MOVIE */}
            <Slider {...settings}>

                {
                    tvshowRomance.map((tvshowRomance) => {
                        return (

                            <div className='mx-3 my-1.5 relative' key={tvshowRomance.id}>
                                <Link to={`/details/${tvshowRomance.id}/${tvshowRomance.title}`} onClick={scrollUp}>
                                    {/* IMAGE HERE AND ALSO TITLE */}
                                    <img src={tvshowRomance.image} alt="" className='h-[270px] w-[90%] rounded-lg hover:scale-105' />
                                    <h1 className='text-[18px] text-[#f5f5f1] py-1.5 line-clamp-2'>{tvshowRomance.title}</h1>
                                </Link>
                            </div>
                        )
                    })
                }
            </Slider>

        </>
    )
}

export default TVShowRomance