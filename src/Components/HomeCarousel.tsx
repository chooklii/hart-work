
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
            <TopImage
                imageName="home_rotation_1"
                noBox={true}
            />
            <TopImage
                imageName="home_rotation_2"
                noBox={true}
            />
            <TopImage
                imageName="home_rotation_3"
                noBox={true}
            />
            <TopImage
                imageName="home_rotation_4"
                noBox={true}
            />           
             <TopImage
                imageName="home_rotation_5"
                noBox={true}
            />


        </Carousel>
    )
}

export default HomeCarousel