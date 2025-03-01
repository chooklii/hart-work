import React, { ReactFragment, ReactText } from "react"

const keyGenerator = (): ReactText =>
  "_" + Math.random().toString(36).substr(2, 9);

  interface AdditionalTeam {
    name: string,
    image: string
}

const team: AdditionalTeam[] = [
    {
        name: "Ann-Pauline Kramer",
        image: "ann-pauline"
    },
    {
        name: "Carina Suleder",
        image: "carina"
    },
    {
        name: "Kristina Perner",
        image: "kristina"
    },
    {
        name: "Ulrike Powilleit",
        image: "ulrike"
    }

]


const renderMember = (): ReactFragment => {
    return team.map((member: AdditionalTeam) => {
        return(
            <div key={keyGenerator()} className="singleMember">
                <h2 className="green fontBold center subheading nobottom size28">#{member.name}</h2>
                <div className={"teamimage " + member.image}/>
            </div>
        )
    })
}


const AdditionalTeam = () => {
    return (
        <div>
        <h2 className="green fontBold subheading center margin50 margin50top pricesize">Anmeldung</h2>
        <div className="team">
            {renderMember()}
        </div>
        </div>
    )
}

export default AdditionalTeam