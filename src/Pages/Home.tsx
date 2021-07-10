import React from "react"
import { Basics, Header, TopImage, BottomImage, Team} from "../Components"

const Home = () => {
    return(
        <div>
            <Header/>
            <TopImage
                imageName = "homeImage"
                title = "HART"
                additionaltitle="WORK"
                text = "Fit sein mit dem Profi"
            />
            <Basics/>
            <BottomImage
                imageName= "homeBottomImage"
            />
            <Team/>


        </div>
    )
}

export default Home