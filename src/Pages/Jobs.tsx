
import React from "react"
import { Header, Footer } from "../Components"

const Jobs = () => {
    return (
        <div>
            <Header />
            <div className="content jobs">

                <h1 className="red fontBold center">Karriere</h1>

                <div className="content jobs">

                <h1 className="grey fontBold jobstext jobheading">Physiotherapie ist nicht gleich Physiotherapie!</h1>

                    <h2 className="red fontBold floatingheding">Physiotherapeut (w/m/d)</h2>

                    <ul>
                        <li className="grey fontNormal">Kombiniere die Physiotherapie mit der Sportwelt</li>
                        <li className="grey fontNormal">Behandle nicht nur an der Bank, sondern tob dich aus</li>
                        <li className="grey fontNormal">Junges Unternehmen, das gerade geschlüpft ist und sich entwickeln will</li>
                        <li className="grey fontNormal">Richtig gutes Gehalt ist für uns selbstverständlich</li>
                    </ul>

                    <div className="jobs_two mobile">
                            <div className="jobsimage jobsimage_one"></div>
                        </div>

                    <h4 className="red fontBold floatingheding">Wir bieten</h4>

                    <div className="jobs_inline">
                        <ul className="jobs_one">
                            <li className="grey fontNormal">Eine anspruchsvolle und abwechslungsreiche Tätigkeit (10-40 Stunden/Woche, verschiedene Arbeitsmodelle denkbar)</li>
                            <li className="grey fontNormal">Unbefristeter Arbeitsvertrag nach der Probezeit</li>
                            <li className="grey fontNormal">Ein sicheres monatliches Einkommen</li>
                            <li className="grey fontNormal">Unterstützung bei Fortbildungen</li>
                            <li className="grey fontNormal">Fahrzeiten, Dokumentation, Teamzeit etc. ist Arbeitszeit</li>
                            <li className="grey fontNormal">Behandlungstermine durch Anmeldekraft</li>
                            <li className="grey fontNormal">Interne Fortbildung: Möglichkeit zur fachlichen und persönlichen Entwicklung</li>
                        </ul>
                        <div className="jobs_two desktop">
                            <div className="jobsimage jobsimage_one"></div>
                        </div>
                    </div>

                    <div className="jobs_inline_two">

                        <div className="jobs_two">
                            <div className="jobsimage jobsimage_two"></div>
                        </div>

                        <div className="jobs_block">
                            <h4 className="red fontBold floatingheding">Aufgaben und Erwartungen</h4>

                            <ul className="jobs_one">
                                <li className="grey fontNormal">examinierte/r Physioterapeut:in</li>
                                <li className="grey fontNormal">Durchführung der Therapieeinheiten inkl. Befundgespräche</li>
                                <li className="grey fontNormal">Behandlung von Patienten mit vielfältigen Diagnosen</li>
                                <li className="grey fontNormal">Physiotherapeutische Befunderhebung</li>
                                <li className="grey fontNormal">Therapiebegleitende Beratung</li>
                                <li className="grey fontNormal">Erstellung von Behandlung- und Therapieberichten</li>
                                <li className="grey fontNormal">Sicheres und patientenorientiertes Arbeiten</li>
                                <li className="grey fontNormal">PKW und Führerschein für HB</li>
                                <li className="grey fontNormal">Fortbildungen z.B. MLD, MT, KG- ZNS erwünscht (nicht zwingend)</li>
                            </ul>
                        </div>


                    </div>

                    <h4 className="grey fontBold jobstext center">Wir suchen eine Person die Probleme erkennt, von denen du
                        weder wusstest, dass es sie gibt, noch in der Lage bist sie zu verstehen
                        und diese auf eine Art und Weise löst, die jede Vorstellung übertrifft.</h4>
                    <h3 className="red fontBold center jobstext">Bewirb dich jetzt per E-Mail oder über den Postweg und werde Teil unseres #HARTWORK Teams!</h3>

                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Jobs