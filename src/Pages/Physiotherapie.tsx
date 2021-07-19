import React from "react"
import { Header, TopImage, BottomImage, PhysioPricing, PhysioOptions, Footer} from "../Components"


const Physiotherapie = () => {
    return(
        <div>
            <Header/>
            <div className="content">
            <TopImage
                imageName="physio_top"
                title="Physio"
                additionaltitle="therapie"
                text=""
                />

            <PhysioOptions/>
            <BottomImage
                imageName="physio_bottom"
            />
            <PhysioPricing/>
            </div>
            <Footer/>
        </div>
    )
}

export default Physiotherapie