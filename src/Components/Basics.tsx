import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHome, faCalendarAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Basics = () => {
    return (
        <div className="basics">
            <div className="singleBasic">
                <FontAwesomeIcon className="basicIcon red" icon={faCompass} />
                <h2 className="red fontBold">Standort</h2>
                <p className="grey fontNormal text">Max-Eyth-Straße 36, 74632 Neuenstein</p>
                <p className="grey fontNormal text">
                    <a className="grey underline mapslink" target="_blank" href="https://www.google.de/maps/@49.2127037,9.5938756,177m/data=!3m1!1e3?hl=de">auf Google Maps anzeigen</a>
                </p>

            </div>

            <div className="singleBasic">
                <FontAwesomeIcon className="basicIcon red" icon={faHome} />
                <h2 className="red fontBold">Öffnungszeiten</h2>
                <p className="grey fontNormal text opening inline"><div className="opening_days">Mo - Do:</div> 7 - 18 Uhr</p>
                <p className="grey fontNormal text opening inline"><div className="opening_days">Freitag:</div> 7 - 15:30 Uhr</p>
                <p className="grey fontNormal text">individuelle Termine nach persönlicher Absprache</p>
            </div>

            <div className="singleBasic">
                <FontAwesomeIcon className="basicIcon red" icon={faCalendarAlt} />
                <h2 className="red fontBold">Terminanfragen</h2>
                <p className="grey fontNormal text"><FontAwesomeIcon className="texticon" icon={faPhone} />
                    <a className="link grey" href="tel:079427941459">07942/79 41 459</a>
                </p>
                <p className="grey fontNormal text"><FontAwesomeIcon className="texticon" icon={faEnvelope} />
                    <a className="link grey" href="mailto:info@hart-work.de">info@hart-work.de</a>
                </p>
            </div>

        </div>
    )
}

export default Basics