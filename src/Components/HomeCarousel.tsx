
import React from "react"
import { TopImage} from "../Components"
import { Carousel } from "antd"

const HomeCarousel = () => {
    return(
        <Carousel  effect="fade">
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
                link={true}
                url="https://bzenth.de/"
                text = "Tag der offenen Tür am 21.08"
            />

        </Carousel>
    )
}

export default HomeCarousel