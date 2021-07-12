import { Col, Row } from "antd"
import React, { ReactFragment, ReactText } from "react"

interface  Option{
    name: string,
    icon: string
}

const keyGenerator = (): ReactText =>
  "_" + Math.random().toString(36).substr(2, 9);

const options: Option[] = [
    {
        name: "Personaltraining 1:1",
        icon: "solo"
    },
    {
        name: "Training zu zweit",
        icon: "duo"
    },
    {
        name: "Training 3-4 Personen",
        icon: "gruppe"
    },
    {
        name: "EMS-Training",
        icon: "ems"
    }
]

const renderOptions = (): ReactFragment => {
    return options.map(single => {
        return(
            <Col className="singleOptionPhysio" xl={6} xxl={6} lg={6} md={12} sm={12} xs={24} key={keyGenerator()}>
            <div className = {"iconPhysio " + single.icon}></div>
            <h3 className="grey fontNormal">{single.name}</h3>
            </Col>
        )
    })
}

const SportOptions = () => {
    return(
        <div>
            <h2 className="red fontBold subheading center">Leistungen</h2>
            <Row>
            {renderOptions()}
            </Row>
        </div>
    )
}

export default SportOptions