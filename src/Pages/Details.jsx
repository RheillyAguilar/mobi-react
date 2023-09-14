import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import Data from '../Data'
import '../index.css'
import Navigation from '../Components/Navigation/Navigation'

const Details = () => {

    const { id } = useParams()
    const allMoviesData = [
        ...Data.trendingData,
        ...Data.popularData,
        ...Data.newreleasesData,
        ...Data.heroData,
        ...Data.actionMovies,
        ...Data.comedyMovies,
        ...Data.romanceMovies,
        ...Data.scifiMovie,
        ...Data.documentaryMovie,
        ...Data.tvshowAction,
        ...Data.tvshowComedy,
        ...Data.tvshowRomance,
        ...Data.tvshowScifi
    ]
    const card = allMoviesData.find((movie) => movie.id === parseInt(id) || null)


    // Random Position of Recommended Movies
    const getRecommendedMovies = (count) => {
        const allMovies = [
            ...Data.trendingData,
            ...Data.popularData,
            ...Data.newreleasesData,
            ...Data.heroData,
            ...Data.actionMovies,
            ...Data.comedyMovies,
            ...Data.romanceMovies,
            ...Data.scifiMovie,
            ...Data.documentaryMovie,
            ...Data.tvshowAction,
            ...Data.tvshowComedy,
            ...Data.tvshowRomance,
            ...Data.tvshowScifi
        ];
        const recommendedMovieIds = card.recommendation || [];
        const randomMovies = [];

        while (randomMovies.length < count && recommendedMovieIds.length > 0) {
            const randomIndex = Math.floor(Math.random() * recommendedMovieIds.length);
            const movieId = recommendedMovieIds.splice(randomIndex, 1)[0];
            const movie = allMovies.find((m) => m.id === movieId);

            if (movie) {
                randomMovies.push(movie);
            }
        }

        return randomMovies;
    };

    // Random selection of recommended movies
    const randomRecommendedMovies = getRecommendedMovies(12);



    // Slider Setting for Recommended Movies
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

    // To Scroll up when I click the recommendation 
    const scrollUp = () => {
        window.scrollTo(0, 0)
    }


    return (
        <>
        <Navigation />
            <div className='px-7 py-1.5 max-w-screen-2xl mx-auto text-white'>

                {/* Image Background */}
                <div className=' left-0 top-0 right-0 relative' >
                    <div className='overlay-slick'></div>
                    <img src={card.background} className='h-[500px] w-full' alt='' />
                </div>


                {/* Poster and Description */}
                <section className="-mt-[150px] flex items-center relative z-10 mb-32 detailsMobile">
                    <img src={card.image} className="w-[200px] min-w-[200px] h-[300px] rounded-xl" alt='' />
                    <div className="px-8 flex flex-col items-start gap-3">
                        <p className="text-5xl line-clamp-1 titleName">{card.title}</p>
                        <ul className="flex items-center gap-3 genreType">

                            {/* Display Genre */}
                            {card.genres.map((genre, index) => (
                                <li key={index} className="px-3 py-1.5 bg-[#b81d24] rounded-lg text-sm">
                                    {genre}
                                </li>
                            ))}
                        </ul>
                        <p className="line-clamp-4 opacity-[0.9] text-lg descriptionMovie">{card.description}</p>
                    </div>
                </section>

                {/* Casts */}
                <section className='mb-32'>
                    <h1 className='text-2xl mb-3'>Casts</h1>
                            <div>
                                <Slider {...settings}>
                                    {card.casts.map((cast, index) => (
                                        <div key={index}>
                                            <img className='h-[300px] w-[90%] mb-3' src={cast.imageCast} alt='' />
                                            <p className='text-[18px]'>{cast.name}</p>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                </section>


                {/* Trailer */}
                <section className='mb-32'>
                    <h1 className='text-2xl mb-3'>Trailers</h1>
                            <div className="flex gap-5 videoTrailer">
                                {card.trailers.map((video, index) => (
                                    <div className='w-full' key={index}>
                                        <iframe
                                            className='w-[100%] h-[500px]'
                                            src={video}
                                            title="YouTube video player">
                                        </iframe>
                                    </div>
                                ))}
                            </div>
                </section>


                {/* Recommendation */}
                <section className='mb-32'>
                    <h1 className='text-2xl mb-3'>Recommendation</h1>
                            <div>
                            <Slider {...settings}>
                                {randomRecommendedMovies.map((movie) => (
                                    <Link key={movie.id} to={`/details/${movie.id}/${movie.title}`} onClick={scrollUp}>
                                        <img src={movie.image} className="h-[300px] w-[90%] rounded-lg hover:scale-105" alt={movie.title} />
                                        <h1 className='text-[18px] text-[#f5f5f1] py-1.5 line-clamp-2'>{movie.title}</h1>
                                    </Link>
                                ))}
                            </Slider>
                            </div>
                </section>

            </div>

        </>
    )
}

export default Details