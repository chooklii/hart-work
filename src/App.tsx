import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { Home, NotFound, Physiotherapie, Sporttherapie, Philosophie,Impressum, Jobs, Ems, NewHome} from "./Pages"

import "../static/style-general.css"
import "../static/style-mobile.css"
import "../static/style-desktop.css"
import "../static/style-tablet.css"
import "../static/style-tablet-large.css"
import "../static/style-burger.css"
import 'antd/dist/antd.css'


class App extends React.Component {
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

                        <Route exact path="/lilolinchen">
                            <ScrollToTop>
                                <NewHome/>
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

                        <Route exact path="/karriere">
                            <ScrollToTop>
                                <Jobs/>
                            </ScrollToTop>
                        </Route>

                        <Route exact path="/ems">
                            <ScrollToTop>
                                <Ems/>
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
