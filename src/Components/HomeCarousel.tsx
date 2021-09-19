
import React, { useState } from "react"
import { TopImage } from "../Components"
import { Carousel } from "antd"


const HomeCarousel = () => {
    const [activeElement, setActiveElement] = useState(0)
    return (
        <Carousel
            beforeChange={(_,next) => setActiveElement(next)}
            effect="fade"
            autoplay>
            <TopImage
                imageName="homeImage"
                title="Physiotherapie & Personaltraining"
                additionaltitle=""
                text=""
                id={0}
                activeElement={activeElement}
            />
            <TopImage
                imageName="home_rotation_1"
                noBox={true}
                id={1}
                activeElement={activeElement}
            />
            <TopImage
                imageName="home_rotation_2"
                noBox={true}
                id={2}
                activeElement={activeElement}
            />
            <TopImage
                imageName="home_rotation_3"
                noBox={true}
                id={3}
                activeElement={activeElement}
            />
            <TopImage
                imageName="home_rotation_4"
                noBox={true}
                id={4}
                activeElement={activeElement}
            />
            <TopImage
                imageName="home_rotation_5"
                noBox={true}
                id={5}
                activeElement={activeElement}
            />
            <TopImage
                imageName="home_rotation_6"
                noBox={true}
                id={6}
                activeElement={activeElement}
            />


        </Carousel>
    )
}

export default HomeCarousel