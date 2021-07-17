
import React from "react"
import { Basics, Header, TopImage, BottomImage, Team, Footer, HomeCarousel} from "../Components"

const Home = () => {
    return(
        <div>
            <Header/>
            <HomeCarousel/>
            <Basics/>
            <BottomImage
                imageName= "homeBottomImage"
            />
            <Team/>
            <Footer/>

        </div>
    )
}

export default Home