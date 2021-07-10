import React from "react"
import { Basics, Header, HeadingImage } from "../Components"

const Home = () => {
    return(
        <div>
            <Header/>
            <HeadingImage
                imageName = "homeImage"
                title = "HART"
                additionaltitle="WORK"
                text = "Fit sein mit dem Profi"
            />
            <Basics/>


        </div>
    )
}

export default Home