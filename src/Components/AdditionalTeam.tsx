import React, { ReactFragment, ReactText } from "react"

const keyGenerator = (): ReactText =>
  "_" + Math.random().toString(36).substr(2, 9);

  interface AdditionalTeam {
    name: string,
    image: string
}

const team: AdditionalTeam[] = [
    {
        name: "Ann-Pauline",
        image: "ann-pauline"
    },
    {
        name: "Elke",
        image: "elke"
    },
    {
        name: "Kristina",
        image: "kristina"
    },
    {
        name: "Ulrike",
        image: "ulrike"
    }

]


const renderMember = (): ReactFragment => {
    return team.map((member: AdditionalTeam) => {
        return(
            <div key={keyGenerator()} className="singleMember">
                <h2 className="red fontBold center subheading nobottom">#{member.name}</h2>
                <div className={"teamimage " + member.image}/>
            </div>
        )
    })
}


const AdditionalTeam = () => {
    return (
        <div>
        <h2 className="red fontBold subheading center margin50 pricesize">Anmeldung</h2>
        <div className="team">
            {renderMember()}
        </div>
        </div>
    )
}

export default AdditionalTeam