
import React from "react"
import { Basics, Header, BottomImage, Team, Footer, HomeCarousel, AdditionalTeam} from "../Components"
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
            <div className="centerdiv mobileCenter marginTopBottom">
            <h2 className="green fontBold subheading nobottom mobileSmaler center">"Nur wer sein Ziel kennt, findet den Weg!"</h2>
            <h4 className="green floatright">Laotse</h4>
            </div>
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

export default Home