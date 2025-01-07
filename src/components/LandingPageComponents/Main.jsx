import React from 'react'
import Carousel from './Carousel'
import ContactDetails from './ContactDetails'

const Main = () => {
  return (
    <div className="flex-grow w-full flex flex-col items-center">
       <Carousel />
        <div className="container flex justify-center">
          <ContactDetails></ContactDetails>
        </div>
    </div>
  )
}

export default Main
