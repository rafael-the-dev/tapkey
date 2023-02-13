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
            <div className="grow min-h-screen">
                { children }
            </div>
        </div>
    );
};


export default LayoutContainer;