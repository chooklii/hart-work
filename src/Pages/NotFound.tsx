
import React from "react"
import { Header, Footer} from "../Components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <Header/>
            <div className="content notFound">
                <p className="center"><FontAwesomeIcon className="notFound_icon grey" icon={faSadTear}/></p>
                <h1 className="red fontBold center">Wir können diese Seite leider nicht finden</h1>
                <p className="center"><Link className="grey fontNormal underline link subheading" to="/">Zur Startseite</Link></p>
            </div>
            <Footer/>

        </div>
    )
}

export default NotFound
 