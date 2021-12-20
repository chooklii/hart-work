import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { Home, NotFound, Physiotherapie, Sporttherapie, Philosophie,Impressum } from "./Pages"
import { init, trackPages } from "insights-js"

import "../static/style-general.css"
import "../static/style-mobile.css"
import "../static/style-desktop.css"
import "../static/style-tablet.css"
import "../static/style-tablet-large.css"
import "../static/style-burger.css"
import 'antd/dist/antd.css'


class App extends React.Component {

    componentDidMount(){
        //Init Insights-analytics
        if(location.hostname != "localhost"){
            init('Gdi36MV38g4xr4Iz')
            trackPages()
        }

    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <ScrollToTop>
                                <Home />
                            </ScrollToTop>
                        </Route>

                        <Route exact path="/physiotherapie">
                            <ScrollToTop>
                                <Physiotherapie/>
                            </ScrollToTop>
                        </Route>

                        <Route exact path="/sporttherapie">
                            <ScrollToTop>
                                <Sporttherapie/>
                            </ScrollToTop>
                        </Route>

                        <Route exact path="/philosophie">
                            <ScrollToTop>
                                <Philosophie/>
                            </ScrollToTop>
                        </Route>

                        <Route exact path="/impressum">
                            <ScrollToTop>
                                <Impressum/>
                            </ScrollToTop>
                        </Route>

                        <Route path="*">
                            <ScrollToTop>
                                <NotFound />
                            </ScrollToTop>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;
