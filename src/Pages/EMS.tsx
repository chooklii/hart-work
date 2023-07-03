import React from "react"
import { Header, Footer, TopImage } from "../Components"
import Helmet from 'react-helmet';
const Ems = () => {
    return (
        <div>
            <Helmet>
                <title>#HARTWORK - EMS-Training</title>
            </Helmet>
            <Header />
            <div className="content">

                <TopImage
                imageName="emstraining"
                id={0}
                boxbackground={true}
                mobileBottom={false}
                textred={true}
                title={"EMS-Training"}
                activeElement={0}
                text={"In 20 Minuten fit sein? Kein Problem!"}
                />

                <h2 className="red fontBold subheading center marginbottom">EMS-Training</h2>
                <h3 className="grey center">#Strom #fitseinundfitwerden #Elektrostimulation #20min #HARTWORK
                </h3>

                <h3 className="floatingheading fontBold red emsHeading">Was ist EMS-Training?</h3>
                <p className="grey fontNormal philosophie">
                EMS (=elektrische Muskelstimulation oder Elektromyostimulation) ist eine Trainingsform, die die positive Wirkung des nieder- oder mittelfrequenten Stroms 
                für ein effektives Training aller Muskeln nutzt.
                </p>
                <h3 className="floatingheading fontBold red emsHeading">Wie funktioniert EMS-Training?</h3>
                <p className="grey fontNormal philosophie">
                    Bei dieser Form des Trainings wird die Muskulatur durch elektrische Reize stimuliert. Dabei werden Nieder- oder <span className="fontBold">Mittelfrequenzen </span> 
                    genutzt, die für den 
                    Menschen bei korrekter Anwendung ungefährlich sind. Die elektrischen Impulse lösen eine kurze Muskelzuckung aus. Mehrere dieser Impulse hintereinander 
                    bewirken eine vollständige Muskelstimulation, wie sie auch beim klassischen Training entsteht.
                    <br></br><br></br>
                    Beim EMS-Training werden somit alle großen Muskelgruppen gleichzeitig trainiert und auch tiefer liegende Muskeln optimal erreicht. Das Training ist 
                    hochintensiv, da es wissenschaftlich nachgewiesen fast 20 Mal stärker auf den Körper wirkt, als herkömmliches Krafttraining. 
                    <br></br>
                    Laut Expertenmeinung sollte man in den ersten acht bis zehn Wochen <span className="fontBold">nicht mehr als 1x die Woche</span> trainieren. Nach dieser Anpassungsphase wird ein 
                    <span className="fontBold"> Abstand von mindestens 4 Tagen zwischen den Trainingseinheiten</span> empfohlen, um Regeneration und Anpassung zu sichern, den Trainingserfolg zu gewährleisten und 
                    Überlastungen zu vermeiden.
                    <br></br>
                </p>
                <h3 className="grey fontBold center jobstext emsInfoText">
                    Termine sind einzeln telefonisch oder vor Ort buchbar und beinhalten keine monatliche Bindung!
                </h3>
                <h3 className="red fontBold center jobstext emsInfoText">
                    Preis: 30 Euro
                </h3>
            </div>
            <Footer />
        </div>
    )
}

export default Ems