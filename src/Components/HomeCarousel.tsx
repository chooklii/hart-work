
import React from "react"
import { TopImage} from "../Components"
import { Carousel } from "antd"

const HomeCarousel = () => {
    return(
        <Carousel autoplay effect="fade">
            <TopImage
                imageName = "homeImage"
                title = "Physiotherapie & Personaltraining"
                additionaltitle=""
                text = ""
            />
            <TopImage
                imageName = "homeImage"
                title = "HARDOPENING"
                additionaltitle=""
                text = "Tag der offenen Tür am 21.08"
            />

        </Carousel>
    )
}

export default HomeCarousel