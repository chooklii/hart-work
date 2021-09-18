import React from "react"
import { Header, BottomImage, PhysioPricing, PhysioOptions, Footer, PhysioCarousel } from "../Components"
import Helmet from 'react-helmet';

const Physiotherapie = () => {
    return (
        <div>
            <Helmet>
                <title>#HARTWORK - Physiotherapie</title>
            </Helmet>
            <Header />
            <div className="content">
                <PhysioCarousel/>

                <PhysioOptions />
                <BottomImage
                    imageName="physio_bottom"
                />
                <PhysioPricing />
            </div>
            <Footer />
        </div>
    )
}

export default Physiotherapie