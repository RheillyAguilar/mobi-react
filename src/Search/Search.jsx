import React, { useLocation, Link} from 'react-router-dom';
import Data from '../Data';
import Navigation from '../Components/Navigation/Navigation';

const Search = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('query');

    const searchMovie = [
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

    
    // Filter the data based on the search query
    const matchingSeries = searchMovie.filter((series) =>
        series.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Create a set of unique titles
    const uniqueTitles = new Set();
    const uniqueMatchingSeries = [];

    matchingSeries.forEach((series) => {
        if (!uniqueTitles.has(series.title)) {
            uniqueTitles.add(series.title);
            uniqueMatchingSeries.push(series);
        }
    })


    return (
        <>
        <Navigation/>
            <div className='px-7 py-32 max-w-screen-2xl mx-auto'>
            <h1 className='text-[#f5f5f1] text-2xl'>Search Results for: {searchQuery}</h1>
            {uniqueMatchingSeries.length === 0 ? (
                <p className='text-[#f5f5f1] text-4xl'>No results found.</p>
            ) : (
                <duv className='flex flex-wrap items-center justify-center'>
                    {uniqueMatchingSeries.map((series) => (
                        <div className='my-5 relative' key={series.id}>
                            <Link to={`/details/${series.id}/${series.title}`}>
                                {/* IMAGE HERE AND ALSO TITLE */}
                                <img src={series.image} alt="" className='h-[300px] w-[90%] rounded-lg hover:scale-105' />
                                <h1 className='text-[20px] text-[#f5f5f1] py-1.5 line-clamp-2'>{series.title}</h1>
                            </Link>
                        </div>
                    ))}
                </duv>
            )}
        </div>
        </>
    )
}

export default Search;
