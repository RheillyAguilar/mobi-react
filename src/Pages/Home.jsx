import React from 'react'
import Hero from '../Components/Hero/Hero'
import Data from '../Data'
import Trending from '../Components/Hero/Trending'
import Popular from '../Components/Hero/Popular'
import NewReleases from '../Components/Hero/NewReleases'
import Navigation from '../Components/Navigation/Navigation'

const Home = () => {

    const { heroData, trendingData, popularData, newreleasesData } = Data

    return (
        <>
        <Navigation />
            <div className='px-7 py-1.5 max-w-screen-2xl mx-auto'>
                <div className='pb-20'>
                    <Hero heroData={heroData} />
                    <Trending trendingData={trendingData} />
                    <Popular popularData={popularData} />
                    <NewReleases newreleasesData={newreleasesData} />
                </div>

            </div>
        </>

    )
}

export default Home