import React from "react"
import { TopImage } from "../Components"
import { Carousel } from "antd"

const PhysioCarousel = () => {
    return (
        <Carousel effect="fade" autoplay>
            <TopImage
                imageName="physio_top"
                title="Physio"
                additionaltitle="therapie"
                text="Für Kassen- und Privatpatienten"
            />
            <TopImage
                imageName="physio_rotation_1"
                noBox={true}
            />
            <TopImage
                imageName="physio_rotation_2"
                noBox={true}
            />
            <TopImage
                imageName="physio_rotation_3"
                noBox={true}
            />
            <TopImage
                imageName="physio_rotation_4"
                noBox={true}
            />
            <TopImage
                imageName="physio_rotation_5"
                noBox={true}
            />

        </Carousel>
    )
}

export default PhysioCarousel