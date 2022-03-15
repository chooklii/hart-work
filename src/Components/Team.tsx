import React, { ReactFragment, ReactText } from "react"

interface TeamInfos {
    name: string,
    image: string,
    general: string[]
    qualifications: string[]

}

const keyGenerator = (): ReactText =>
  "_" + Math.random().toString(36).substr(2, 9);


const team: TeamInfos[] = [{
    name: "Madeleine Perner",
    image: "madeleine",
    general: [
        "Sport- und Gymnastiklehrerin (Berufskolleg Waldenburg)",
        "Physiotherapeutin (Berufskolleg Waldenburg)"
    ],
    qualifications: [
        "Manuelle Therapie (Inomt)",
        "Manuelle Lymphdrainage (ZNS)",
        "Functional Training",
        "Therapeutisches Klettern (FOMT)",
        "MTC Medical Tapering Concept",
        "Fitness Trainer",
        "Erlebnispädagogik / Erlebnissport"
    ]
}, {
    name: "Stefan Kramer",
    image: "stefan",
    general: [
        "Physiotherapeut (Berufskolleg Waldenburg)",
    ],
    qualifications: [
        "Manuelle Therapie (Inomt)",
        "Bobath (KG-ZNS) (Ibitha)",
        "Manuelle Lymphdrainage (ZML)",
        "Krankengymnastik am Gerät",
        "Osteopathie B.O. in Ausbildung (Inomt)",
        "Heilpraktiker (EOS)",
        "Manuelle Reflextherapie (Inomt)",
        "Therapeutisches Klettern",
        "MTC - Medical Tapering Concept",
        "Faszien Dysfunktion Methode (Inomt)"
    ]
}]

const renderMember = (): ReactFragment => {
    return team.map((member: TeamInfos) => {
        return(
            <div key={keyGenerator()} className="singleMember">
                <h2 className="red fontBold center subheading">#{member.name}</h2>
                <div className={"teamimage " + member.image}/>
                <div className="team_general">
                {member.general.map(single => {
                    return(
                        <p key={keyGenerator()} className="grey fontNormal qualificationheading">{single}</p>
                    )
                })}
                </div>
                <h3 className="red fontBold qualificationheading">Qualifikationen</h3>
                {member.qualifications.map(single => {
                    return(
                        <li key={keyGenerator()} className="grey fontNormal qualification">{single}</li>
                    )
                })}
            </div>
        )
    })
}


const Team = () => {
    return (
        <div className="team">
            {renderMember()}
        </div>
    )
}

export default Team