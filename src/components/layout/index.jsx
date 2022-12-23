import * as React from "react";

import classes from "./styles.module.css";

//import Header from "../header";
//import Footer from "../footer";

const LayoutContainer = ({ children }) => {

    return (
        <div className={classes.root}>
            <main className="min-h-screen">
                { children }
            </main>
        </div>
    );
};


export default LayoutContainer;