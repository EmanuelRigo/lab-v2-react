import React from 'react'
import Carousel from './Carousel'
import ContactDetails from './ContactDetails'
import ServicesComponent from './ServicesComponent'

const Main = () => {
  return (
    <div className="flex-grow w-full flex flex-col items-center">
       <Carousel />
        <div className="container flex justify-center flex-col">
          <ServicesComponent></ServicesComponent>
          <ContactDetails></ContactDetails>
        </div>
    </div>
  )
}

export default Main
