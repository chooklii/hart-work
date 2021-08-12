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
                    <a className="grey underline mapslink" target="_blank" href="https://www.google.de/maps/place/%23HARTWORK/@49.2124825,9.5922152,17z/data=!3m1!4b1!4m5!3m4!1s0x4798416f97759459:0xac94cb1bf82905e!8m2!3d49.212479!4d9.5944039">
                    auf Google Maps anzeigen</a>
                </p>

            </div>

            <div className="singleBasic">
                <FontAwesomeIcon className="basicIcon red" icon={faHome} />
                <h2 className="red fontBold">Öffnungszeiten</h2>
                <div className="grey fontNormal text opening inline"><span className="opening_days">Mo - Do:</span><span>7 - 18 Uhr</span></div>
                <p className="grey fontNormal text opening inline"><span className="opening_days">Freitag:</span> 7 - 15:30 Uhr</p>
                <p className="grey fontNormal text">individuelle Termine nach persönlicher Absprache</p>
            </div>

            <div className="singleBasic">
                <FontAwesomeIcon className="basicIcon red" icon={faCalendarAlt} />
                <h2 className="red fontBold">Terminanfragen</h2>
                <p className="grey fontNormal text"><FontAwesomeIcon className="texticon" icon={faPhone} />
                    <a className="link grey" href="tel:079427119877">07942/711 98 77</a>
                </p>
                <p className="grey fontNormal text"><FontAwesomeIcon className="texticon" icon={faEnvelope} />
                    <a className="link grey" href="mailto:info@hart-work.de">info@hart-work.de</a>
                </p>
            </div>

        </div>
    )
}

export default Basics