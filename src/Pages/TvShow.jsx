import React from 'react'
import TVShowAction from '../Components/TvShow/TVShowAction'
import Data from '../Data'
import TVShowComedy from '../Components/TvShow/TVShowComedy'
import TVShowRomance from '../Components/TvShow/TVShowRomance'
import TVShowScifi from '../Components/TvShow/TVShowScifi'
import Navigation from '../Components/Navigation/Navigation'

const TvShow = () => {

  const { tvshowAction, tvshowComedy, tvshowRomance, tvshowScifi } = Data

  return (
    <>
    <Navigation />
      <div className='px-7 py-1.5 max-w-screen-2xl mx-auto'>
      <div className='pb-20'>
        <TVShowAction tvshowAction={tvshowAction} />
        <TVShowComedy tvshowComedy={tvshowComedy}/>
        <TVShowRomance tvshowRomance={tvshowRomance}/>
        <TVShowScifi tvshowScifi={tvshowScifi}/>
      </div>
        
    </div>
    </>
    
  )
}

export default TvShow