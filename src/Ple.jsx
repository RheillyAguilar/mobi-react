import React from 'react'

const Ple = ({dataTwo}) => {
  return (
    <>
        {
        dataTwo.map((dataTwo) => {
            return(
                <h1>{dataTwo.name}</h1>
            )
        })
    }
    </>
  )
}

export default Ple