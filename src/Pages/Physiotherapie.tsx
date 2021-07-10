import React from "react"
import { Header, TopImage, BottomImage, Team} from "../Components"
import PhysioOptions from "../Components/PhysioOptions"

const Physiotherapie = () => {
    return(
        <div>
            <Header/>
            <TopImage
                imageName="physio_top"
                title="Physio"
                additionaltitle="therapie"
                text="Behandlung um evtl. körperliche Beschwerden vorzubeugen"
                />

            <PhysioOptions/>
            <BottomImage
                imageName="physio_bottom"
            />
        </div>
    )
}

export default Physiotherapie