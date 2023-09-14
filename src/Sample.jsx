import React from 'react'

const Sample = ({dataOne}) => {
  return (
    <>
{
        dataOne.map((dataOne) => {
            return(
                <h1>{dataOne.name}</h1>
            )
        })
    }
    </>
  )
}

export default Sample