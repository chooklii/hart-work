
import React from "react"
import { Basics, Header, TopImage, BottomImage, Team, Footer, HomeCarousel} from "../Components"
import Helmet from 'react-helmet';
const Home = () => {
    return(
        <div>
            <Helmet>
                <title>#HARTWORK</title>
            </Helmet>
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