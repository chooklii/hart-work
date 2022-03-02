import React, { useState } from "react"
import { TopImage } from "../Components"
import { Carousel } from "antd"

const SportCarousel = () => {
    const [activeElement, setActiveElement] = useState(0)
    return (
        <Carousel
            beforeChange={(_, next) => setActiveElement(next)}
            effect="fade"
            autoplay>
            <TopImage
                imageName="sport_top"
                title="Sport"
                additionaltitle="therapie"
                text=""
                id={0}
                activeElement={activeElement}
            />
            {/*
            <TopImage
                imageName="sport_rotation_1"
                title="EMS"
                additionaltitle=" Training"
                text=""
                id={1}
                activeElement={activeElement}
            />
            */}

            <TopImage
                imageName="sport_rotation_2"
                noBox={true}
                id={1}
                activeElement={activeElement}
            />

            <TopImage
                imageName="sport_rotation_3"
                noBox={true}
                id={2}
                activeElement={activeElement}
            />
            <TopImage
                imageName="sport_rotation_4"
                noBox={true}
                id={3}
                activeElement={activeElement}
            />
            <TopImage
                imageName="sport_rotation_5"
                noBox={true}
                id={4}
                activeElement={activeElement}
            />
            <TopImage
                imageName="sport_rotation_6"
                noBox={true}
                id={5}
                activeElement={activeElement}
            />
        </Carousel>
    )
}

export default SportCarousel