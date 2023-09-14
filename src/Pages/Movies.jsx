import React from 'react'
import Data from '../Data'
import Action from '../Components/Movies/Action'
import Comedy from '../Components/Movies/Comedy'
import Romance from '../Components/Movies/Romance'
import Scifi from '../Components/Movies/Scifi'
import Documentary from '../Components/Movies/Documentary'
import Navigation from '../Components/Navigation/Navigation'

const Movies = () => {

  const { actionMovies, comedyMovies, romanceMovies, scifiMovie, documentaryMovie } = Data

  return (
    <>
    <Navigation />
      <div className='px-7 py-1.5 max-w-screen-2xl mx-auto'>
        <div className='pb-20'>
          <Action actionMovies={actionMovies} />
          <Comedy comedyMovies={comedyMovies} />
          <Romance romanceMovies={romanceMovies} />
          <Scifi scifiMovie={scifiMovie} />
          <Documentary documentaryMovie={documentaryMovie} />
        </div>

      </div>
    </>

  )
}

export default Movies
