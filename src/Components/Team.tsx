import React, { ReactFragment, ReactText } from "react"

interface TeamInfos {
    name: string,
    subtitle?: string,
    image: string,
    general: string[]
    qualifications: string[]
}

const keyGenerator = (): ReactText =>
  "_" + Math.random().toString(36).substr(2, 9);


const team: TeamInfos[] = [
    {
        name: "Stefan Kramer",
        image: "stefan",
        general: [
            "Physiotherapeut (Berufskolleg Waldenburg)",
            "Heilpraktiker"
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
    },
    {
    name: "Madeleine Zenth",
    subtitle: "(geb. Perner)",
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
}, 
{
    name: "Anna Saida",
    image: "anna",
    general: [
        "Physiotherapeutin (SRH Fachschule Stuttgart)",
        "Sport- und Fitnesskauffrau / Fitness Trainerin"
    ],
    qualifications: [
        "Manuelle Lymphdrainage",
        "Manuelle Therapie"
    ] 
},
{
    name: "Arthur",
    image: "arthur",
    general: [
        "Sport- und Gymnastiklehrerin (Berufskolleg Waldenburg)",
        "Physiotherapeutin (Berufskolleg Waldenburg)"
    ],
    qualifications: [
        "Fitnesstrainer A",
        "Erlebnispädagogik"
    ] 
},
{
    name: "Lasse Leben",
    image: "lasse",
    general: [
        "Physiotherapeut (Berufskolleg Waldenburg)",
    ],
    qualifications: [
        "Manuelle Lymphdrainage",
        "Manuelle Therapie in Ausbildung"
    ] 
},
]

const renderMember = (): ReactFragment => {
    return team.map((member: TeamInfos) => {
        return(
            <div key={keyGenerator()} className="singleMember">
                <h2 className="red fontBold center subheading nobottom">#{member.name}</h2>
                <div className="red fontBold center teamsubtitle">{member.subtitle}</div>
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
        <div>
        <h2 className="red fontBold subheading center margin50 pricesize">Therapeuten</h2>
        <div className="team">
            {renderMember()}
        </div>
        </div>
    )
}

export default Team