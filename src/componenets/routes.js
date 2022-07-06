import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Navbar from "./navbar";
import {Transactions} from "./transactions";


const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div className="main-content">
                    <Switch>
                        <Route path="/transactions" component={Transactions} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Routes;



