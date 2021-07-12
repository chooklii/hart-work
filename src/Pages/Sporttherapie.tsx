import React from "react"
import { Header, TopImage, BottomImage, SportOptions, SportPricing, Footer} from "../Components"

const Sporttherapie = () => {
    return(
        <div>
            <Header/>
            <TopImage
                imageName="sport_top"
                title="Sport"
                additionaltitle="therapie"
                text="Krasser Slogan"
                />
            <SportOptions/>

            <BottomImage
                imageName="sport_bottom"
            />
            <SportPricing/>
            <Footer/>
        </div>
    )
}

export default Sporttherapie