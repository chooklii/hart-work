
import React from "react"
import { TopImage } from "../Components"
import { Carousel } from "antd"

const HomeCarousel = () => {
    return (
        <Carousel effect="fade" autoplay>
            <TopImage
                imageName="homeImage"
                title="Physiotherapie & Personaltraining"
                additionaltitle=""
                text=""
            />

        </Carousel>
    )
}

export default HomeCarousel