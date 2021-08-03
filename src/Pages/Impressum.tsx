import React, { ReactFragment } from "react"
import { Row, Col } from "antd"
import { Header, Footer } from "../Components"
import { ReactText } from "react";
import Helmet from 'react-helmet';
interface Option {
    ref: string,
    name: string,
    icon: string
}

const keyGenerator = (): ReactText =>
    "_" + Math.random().toString(36).substr(2, 9);


const iconInfos: Option[] = [
    {
        ref: "https://www.freepik.com",
        name: "Freepik",
        icon: "privatMassage"
    },
    {
        icon: "kgg",
        ref: "https://www.freepik.com",
        name: "Freepik",
    },
    {
        icon: "reflex",
        ref: "https://www.freepik.com",
        name: "Freepik",
    },
    {
        ref: "https://www.flaticon.com/authors/pixel-perfect",
        name: "Pixel Perfect",
        icon: "tape"
    },
    {
        ref: "https://www.freepik.com",
        name: "Freepik",
        icon: "klettern"
    },
    {
        ref: "https://www.freepik.com",
        name: "Freepik",
        icon: "pravention"
    },
    {
        ref: "https://www.freepik.com",
        name: "Freepik",
        icon: "gymnastik"
    },
    {
        ref: "www.flaticon.com/de/autoren/surang",
        name: "Surang",
        icon: "therapie"
    },
    {
        ref: "https://www.flaticon.com/authors/vitaly-gorbachev",
        name: "Vitaly Gorbachev",
        icon: "lymph"
    },
    {
        ref: "https://www.freepik.com",
        name: "Freepik",
        icon: "publicMassage"
    },
    {
        ref: "https://www.flaticon.com/de/autoren/anatoly",
        name: "Anatoly",
        icon: "krankengymnastik"
    },
    {
        ref: "https://www.flaticon.com/de/autoren/ddara",
        name: "dDara",
        icon: "solo"
    },
    {
        ref: "https://www.freepik.com",
        name: "Freepik",
        icon: "duo"
    },
    {
        ref: "https://www.flaticon.com/de/autoren/prosymbols",
        name: "Prosymbols",
        icon: "gruppe"
    },
    {
        ref: "https://www.freepik.com",
        name: "Freepik",
        icon: "ems"
    }
]

const renderIconImprint = (): ReactFragment => {
    return iconInfos.map(single => {
        return (
            <Col className="center gray" xl={6} xxl={6} lg={6} md={12} sm={12} xs={24} key={keyGenerator()}>
                <div className={"iconImprint " + single.icon} />
                <p className="grey fontNormal">
                    Erstellt von <a className="grey underline" target="_blank" href={single.ref}>{single.name}</a>
                    <span> auf</span> <a className="grey underline" target="_blank" href="https://www.flaticon.com/">www.flaticon.com</a>

                </p>
            </Col>
        )
    })
}


const Impressum = () => {
    return (
        <div >
            <Helmet>
                <title>#HARTWORK - Impressum</title>
            </Helmet>
            <Header />
            <div className="content imprint">
                <h1 className="red fontBold center">Impressum</h1>

                <h4 className="red fontBold floatingheading">#HARTWORK GbR</h4>
                <p className="grey fontNormal imprintfloat">Max-Eyth-Straße 36</p>
                <p className="grey fontNormal imprintfloat">74632 Neuenstein</p>

                <p className="grey fontNormal imprintfloat">Vertreten durch:</p>
                <p className="grey fontNormal imprintfloat">Madeleine Perner und Stefan Kramer</p>

                <p className="red fontBold floatingheading">Kontakt</p>
                <p className="grey fontNormal imprintfloat">Telefon: 07942/7941459</p>
                <p className="grey fontNormal imprintfloat">E-Mail: info@hart-work.de</p>

                <h3 className="red fontBold floatingheading">Warnhinweise zu Inhalten</h3>
                <p className="grey fontNormal">
                    Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
                </p>
                <h3 className="red fontBold floatingheading">Externe Links</h3>
                <p className="grey fontNormal">
                    Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                </p>
                <h3 className="red fontBold floatingheading">Icons</h3>
                <p className="grey fontNormal">Die auf den Seiten Physiotherapie und Sporttherapie genutzten Icons wurden von folgenden Künstlern erstellt:</p>
                <Row>
                    {renderIconImprint()}
                </Row>

            </div>
            <Footer />
        </div>
    )
}

export default Impressum