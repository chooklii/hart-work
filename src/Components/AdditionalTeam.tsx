import React, { ReactFragment, ReactText } from "react"

const keyGenerator = (): ReactText =>
  "_" + Math.random().toString(36).substr(2, 9);

  interface AdditionalTeam {
    name: string,
    image: string
}

const team: AdditionalTeam[] = [
    {
        name: "Kristina Perner",
        image: "kristina"
    },
    {
        name: "Maxine Mustermann",
        image: "maxine1"
    },
    {
        name: "Ann Paulin Kramer",
        image: "ann-paulin"
    },
    {
        name: "Maxine Mustermann",
        image: "maxine2"
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
        <div className="team">
            {renderMember()}
        </div>
    )
}

export default AdditionalTeam