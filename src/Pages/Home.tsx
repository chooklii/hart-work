
import React from "react"
import { Basics, Header, TopImage, BottomImage, Team, Footer, HomeCarousel} from "../Components"

const Home = () => {
    return(
        <div>
            <Header/>
            <div className="content">
            <HomeCarousel/>
            <Basics/>
            <BottomImage
                imageName= "homeBottomImage"
            />
            <Team/>
            </div>
            <Footer/>

        </div>
    )
}

export default Home