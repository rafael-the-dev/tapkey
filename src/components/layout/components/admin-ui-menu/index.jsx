import { Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import Link from "src/components/shared/link"

const Menu = () => {

    return (
        <aside className={classNames(classes.root)}>
            <div className={classNames(classes.logoContainer, "bg-cyan-600 py-4 text-white")}>
                <Link className="text-lg xl:text-xltext-right" href="/">tapkey</Link>
            </div>
        </aside>
    );
};

export default Menu;