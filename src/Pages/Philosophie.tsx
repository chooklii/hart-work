import React from "react"
import { Header, Footer } from "../Components"
import Helmet from 'react-helmet';
const Philosophie = () => {
    return (
        <div>
            <Helmet>
                <title>#HARTWORK - Philosophie</title>
            </Helmet>
            <Header />
            <div className="content">

                <h2 className="red fontBold subheading center">#Philosophie</h2>

                <p className="grey fontNormal philosophie">
                    Das Innere einer Frucht ist der Kern und dieser ist der Ursprung von etwas ganz Großem. Da ist es egal, ob es eine Traube oder eine Melone wird - der Kern ist immer das Wichtigste, sowohl bei Früchten, als auch beim menschlichen Körper. Er ist immer hart und hart ist auch das erste Wort von unserem Neuunternehmen #HARTWORK. 
                    <br /><br />
                    Der zweite Teil der Unternehmensbezeichnung ist „work“. Work heißt übersetzt arbeiten. Wir wollen mit unseren Kunden durch individuelles und attraktives Personaltraining an einem gesünderen Lebensstil arbeiten. Für diese Kombination steht #HART- WORK: Gezielte Physiotherapie gepaart mit Fitnessübungen im Personaltraining und Gruppentraining. 
                    <br /><br />
                    Die Philosophie von #HARTWORK ist das Innere, der Ursprung und die Mitte. 
                    <br /><br />
                    Mit der Mitte verbinden viele Menschen immer etwas Besonderes. Ob es nun die goldene Mitte im Leben ist, das mittlere Kind von dreien oder ein zentraler Punkt, von dem aller Erfolg ausgeht - die Mitte steht immer für etwas Außergewöhnliches. 
                    <br />
                    Dabei ist die Kombination aus Fitness und Physiotherapie von entscheidender Bedeutung! Diese Kombination ist der Kern und die Philosophie von unserem neuen Unternehmen #HARTWORK.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Philosophie