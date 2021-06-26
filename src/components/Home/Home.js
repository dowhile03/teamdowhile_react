import React from 'react'
import Footer from '../Footer/Footer'
import Nav from "../Nav/Nav"
import Carousal from '../UI/Carousal'

const Home = () => {
    return (
        <React.Fragment>
        <Nav/>
            <Carousal/>
        <Footer/>
        </React.Fragment>
    )
}

export default Home
