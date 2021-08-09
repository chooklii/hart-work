
import React from "react"
import { TopImage } from "../Components"
import { Carousel } from "antd"

const HomeCarousel = () => {
    return (
        <Carousel effect="fade" autoplay>
            <TopImage
                imageName="hartopening"
                title="HARTOPENING"
                additionaltitle=""
                link={true}
                url={window.location + "/hartopening.pdf"}
                text="Tag der offenen Tür am 21.08"
            />
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