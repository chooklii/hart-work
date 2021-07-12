import React from "react"
import { Header, Footer } from "../Components"


const Impressum = () => {
    return(
        <div>
            <Header/>
            <div className="content imprint">
                <h1 className="red fontBold center">Impressum</h1>
                <div className="imprint_icons">
                    <h3 className="red fontBold floatingheading">Icons</h3>
                    <p>Die auf den Seiten Physiotherapie und Sporttherapie genutzten Icons wurden von folgenden Künstlern erstellt:</p>
                    <div className="iconPhysio solo"/>

                </div>
            
            </div>
            <Footer/>
        </div>
    )
}

export default Impressum