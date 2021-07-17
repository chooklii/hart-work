import React, { ReactText } from "react"
import { ReactFragment } from "react"
import { Col, Row } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag, faDumbbell } from "@fortawesome/free-solid-svg-icons";


interface Options {
    name: string,
    services: string[],
    halfPrice: number,
    halfTime: number,
    fullPrice: number,
    fullTime: number
}

const keyGenerator = (): ReactText =>
    "_" + Math.random().toString(36).substr(2, 9);

const sportOptions: Options[] = [
    {
        name: "Training mit einer Person",
        services: [
            "Eingehen auf individuelle Bedürfnisse",
            "Modernes Training an hochwertigen Geräten",
            "EMS-Training"
        ],
        halfPrice: 50,
        halfTime: 30,
        fullPrice: 100,
        fullTime: 60
    },
    {
        name: "Training zu zweit",
        services: [
            "Eingehen auf beide Bedürfnisse",
            "Modernes Training an hochwertigen Geräten"
        ],
        halfPrice: 35,
        halfTime: 30,
        fullPrice: 70,
        fullTime: 60
    },
    {
        name: "Training mit 3-4 Personen",
        services: [
            "Eingehen auf eure Bedürfnisse",
            "Modernes Training an hochwertigen Geräten"
        ],
        halfPrice: 25,
        halfTime: 30,
        fullPrice: 50,
        fullTime: 60
    },
]

const renderPricing = (): ReactFragment => {
    return sportOptions.map(single => {
        return (
            <Col xl={8} xxl={8} lg={8} md={12} sm={12} xs={24} key={keyGenerator()}>
                <h3 className="red fontBold center thirdheading">{single.name}</h3>
                <Row>
                    <Col xl={12} xxl={12} lg={12} md={12} sm={12} xs={24}>
                        <div className="inline-col">
                            <p className="grey fontNormal floatingtext">
                                <FontAwesomeIcon className="grey fontNormal texticon" icon={faClock} />
                                {single.halfTime} Minuten
                            </p>
                            <p className="grey fontNormal floatingtext">
                                <FontAwesomeIcon className="grey fontNormal texticon" icon={faTag} />
                                {single.halfPrice}€ p.P.
                            </p>
                        </div>
                    </Col>
                    <Col xl={12} xxl={12} lg={12} md={12} sm={12} xs={24}>
                        <div className="inline-col">
                            <p className="grey fontNormal floatingtext">
                                <FontAwesomeIcon className="grey fontNormal texticon" icon={faClock} />
                                {single.fullTime} Minuten
                            </p>
                            <p className="grey fontNormal floatingtext">
                                <FontAwesomeIcon className="grey fontNormal texticon" icon={faTag} />
                                {single.fullPrice}€ p.P.
                            </p>
                        </div>
                    </Col>
                </Row>
                <p className="grey fontNormal services">
                    <FontAwesomeIcon className="grey fontNormal texticon" icon={faDumbbell} />
                    Leistungen:
                </p>
                <p>
                    {single.services.map(service => {
                        return (
                            <li key={keyGenerator()} className="grey fontNormal floatingservices">{service}</li>
                        )
                    })}
                </p>
            </Col>
        )
    })
}

const SportPricing = () => {
    return (
        <div className="pricing marginFooter">
            <h2 className="red fontBold subheading center margin50 pricesize">Preise</h2>
            <Row>
                {renderPricing()}
            </Row>
        </div>
    )
}

export default SportPricing