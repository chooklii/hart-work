import React from "react"
import { TopImage } from "../Components"
import { Carousel } from "antd"

const SportCarousel = () => {
    return (
        <Carousel effect="fade" autoplay>
            <TopImage
                imageName="sport_top"
                title="Sport"
                additionaltitle="therapie"
                text=""
            />
            <TopImage
                imageName="sport_rotation_1"
                title="EMS"
                additionaltitle=" Training"
                text=""
            />

            <TopImage
                imageName="sport_rotation_2"
                noBox={true}
            />

            <TopImage
                imageName="sport_rotation_3"
                noBox={true}
            />
            <TopImage
                imageName="sport_rotation_4"
                noBox={true}
            />
            <TopImage
                imageName="sport_rotation_5"
                noBox={true}
            />
            <TopImage
                imageName="sport_rotation_6"
                noBox={true}
            />
        </Carousel>
    )
}

export default SportCarousel