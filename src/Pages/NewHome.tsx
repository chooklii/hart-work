
import React from "react"
import { Basics, Header, BottomImage, Team, Footer, HomeCarousel, AdditionalTeam} from "../Components"
import Helmet from 'react-helmet';

const NewHome = () => {
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
            <AdditionalTeam/>
            </div>
            <Footer/>

        </div>
    )
}

export default NewHome