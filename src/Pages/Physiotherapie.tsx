import React from "react"
import { Header, TopImage, BottomImage, PhysioPricing, PhysioOptions, Footer} from "../Components"


const Physiotherapie = () => {
    return(
        <div>
            <Header/>
            <TopImage
                imageName="physio_top"
                title="Physio"
                additionaltitle="therapie"
                text="Krasser Slogan"
                />

            <PhysioOptions/>
            <BottomImage
                imageName="physio_bottom"
            />
            <PhysioPricing/>
            <Footer/>
        </div>
    )
}

export default Physiotherapie