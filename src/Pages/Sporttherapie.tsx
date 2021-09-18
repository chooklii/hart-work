import React from "react"
import { Header, BottomImage, SportOptions, SportPricing, Footer, SportCarousel } from "../Components"
import Helmet from 'react-helmet';

const Sporttherapie = () => {
    return (
        <div>
            <Helmet>
                <title>#HARTWORK - Sporttherapie</title>
            </Helmet>
            <Header />
            <div className="content">
                <SportCarousel />
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