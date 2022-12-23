import * as React from "react";
import classNames from "classnames"

import classes from "./styles.module.css";

//import Header from "../header";
//import Footer from "../footer";
import Menu from "./components/admin-ui-menu"

const LayoutContainer = ({ children }) => {

    return (
        <div className={classNames(classes.root, "flex h-screen items-stretch")}>
            <Menu />
            <main className="min-h-screen">
                { children }
            </main>
        </div>
    );
};


export default LayoutContainer;