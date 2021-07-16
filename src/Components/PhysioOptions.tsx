import React, { ReactFragment, ReactText } from "react"
import {Col, Row} from "antd"

interface  Option{
    name: string,
    icon?: string
}

const keyGenerator = (): ReactText =>
  "_" + Math.random().toString(36).substr(2, 9);

const publicOption: Option[] = [
    {
        name: "Krankengymnastik",
        icon: "gymnastik"
    },
    {
        name: "Manuelle Therapie",
        icon: "therapie"
    },
    {
        name: "Manuelle Lymphdrainage",
        icon: "lymph"
    },
    {
        name: "Massage (klassische und Bindegewebemassage)",
        icon: "publicMassage"
    },
    {
        name: "Krankengymnastik ZNS nach Usobath",
        icon: "krankengymnastik"
    }
]

const privateOption: Option[] = [
    {
        name: "Massage",
        icon: "privatMassage"
    },
    {
        name: "Krankengymnastik am Gerät",
        icon: "kgg"
    },
    {
        name: "Reflextherapie",
        icon: "reflex"
    },
    {
        name: "Taping",
        icon: "tape"
    },
    {
        name: "Therapeutisches Klettern",
        icon: "klettern"
    },
    {
        name: "Prävention",
        icon: "pravention"
    }
]

const renderPublicOptions = (): ReactFragment => {
    return publicOption.map(single => {
        return(
            <Col className="singleOptionPhysio" xl={8} xxl={8} lg={8} md={12} sm={12} xs={24} key={keyGenerator()}>
            <div className = {"iconPhysio " + single.icon}></div>
            <h3 className="grey fontNormal">{single.name}</h3>
            </Col>
        )
    })
}

const renderPrivateOptions = (): ReactFragment => {
    return privateOption.map(single => {
        return(
            <Col className="singleOptionPhysio" xl={8} xxl={8} lg={8} md={12} sm={12} xs={24} key={keyGenerator()}>
            <div className = {"iconPhysio " + single.icon}></div>
            <h3 className="grey fontNormal">{single.name}</h3>
            </Col>
        )
    })
}


const PhysioOptions = () => {
    return(
        <div>
            <h2 className="red fontBold subheading center">Was bieten wir an</h2>
            <h3 className="red fontBold thirdheading floatingheading">Privat / Gesetzlich / Berufsgenossenschaft:</h3>
            <Row className="row">
                {renderPublicOptions()}
            </Row>

            <h3 className="red fontBold thirdheading floatingheading">Selbstzahler:</h3>
            <Row className="row">
                {renderPrivateOptions()}
            </Row>
        </div>
    )
}

export default PhysioOptions