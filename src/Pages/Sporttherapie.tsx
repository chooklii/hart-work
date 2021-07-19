import React from "react"
import { Header, TopImage, BottomImage, SportOptions, SportPricing, Footer } from "../Components"

const Sporttherapie = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <TopImage
                    imageName="sport_top"
                    title="Sport"
                    additionaltitle="therapie"
                    text=""
                />
                <SportOptions />

                <BottomImage
                    imageName="sport_bottom"
                />
                <SportPricing />
            </div>
            <Footer />
        </div>
    )
}

export default Sporttherapie