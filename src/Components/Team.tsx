import React, { ReactFragment } from "react"

interface TeamInfos {
    name: string,
    general: string[]
    qualifications: string[]

}

const team: TeamInfos[] = [{
    name: "Madeleine Perner",
    general: [
        "Sporttherapeutin (Berufskolleg Waldenburg)",
        "Physiotherapeutin (Berufskolleg Waldenburg)"
    ],
    qualifications: [
        "Manuelle Therapie (Inomt)",
        "Manuelle Lymphdrainage (ZNS)",
        "Functional Training",
        "Therapeutisches Klettern (FOMT)",
        "MTC Medical Tapering Concept",
        "Fitness Trainer",
        "Erlebnispädagogik / Erlebnisspport"
    ]
}, {
    name: "Stefan Kramer",
    general: [
        "Physiotherapeut (Berufskolleg Waldenburg)",
    ],
    qualifications: [
        "Manuelle Therapie (Inomt)",
        "Bobath (KG-ZNS) (Ibitha)",
        "Manuelle Lymphdrainage (ZML)",
        "Krankengymnastik am Gerät",
        "Osteopathie B.O. in Ausbildung (Inomt)",
        "Heilpraktiker in Ausbildung (EOS)",
        "Manuelle Reflextherapie (Inomt)",
        "Therapeutisches Klettern",
        "MTC - Medical Tapering Concept",
        "Faszien Dysfunktion Methode (Inomt)"
    ]
}]

const renderMember = (): ReactFragment => {
    return team.map((member: TeamInfos) => {
        return(
            <div className="singleMember">
                <h2 className="red fontBold center subheading">#{member.name}</h2>
                <div className="team_general">
                {member.general.map(single => {
                    return(
                        <p className="grey fontNormal qualificationheading">{single}</p>
                    )
                })}
                </div>
                <h3 className="red fontBold qualificationheading">Qualifikationen</h3>
                {member.qualifications.map(single => {
                    return(
                        <li className="grey fontNormal qualification">{single}</li>
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