
import React from "react"
import { Basics, Header, TopImage, BottomImage, Team, Footer} from "../Components"

const Home = () => {
    return(
        <div>
            <Header/>
            <TopImage
                imageName = "homeImage"
                title = "Physiotherapie & Personaltraining"
                additionaltitle=""
                text = ""
            />
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