import React from "react"
import { ReactFragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";

const renderPricing = (): ReactFragment => {
    return (
        <div>
            <p className="grey fontNormal center">
                <FontAwesomeIcon className="grey fontNormal texticon" icon={faClock} />
                <span className="inlinetext">30 Minuten</span>
                <FontAwesomeIcon className="grey fontNormal texticon" icon={faTag} />
                45 €
            </p>
            <h3 className="red fontBold center">Therapieverlängerung</h3>
            <p className="grey fontNormal center">
                <FontAwesomeIcon className="grey fontNormal texticon" icon={faClock} />
                <span className="inlinetext">10 Minuten</span>
                <FontAwesomeIcon className="grey fontNormal texticon" icon={faTag} />
                15 €
            </p>
        </div>
    )
}

const PhysioPricing = () => {
    return (
        <div className="pricing marginFooter">
            <h2 className="red fontBold subheading center">Preise</h2>
            <p className="grey fontNormal center">Behandlungskosten (um evtl. körperliche Beschwerden vorzubeugen)</p>
            {renderPricing()}
        </div>
    )
}

export default PhysioPricing