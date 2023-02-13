import { Button } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import Link from "../link";

const ListItem = ({ href, icon, label }) => {

    return (
        <li className={classNames(classes.root)}>
            <Link className="block w-full" href={href}>
                <Button
                    className="flex items-center px-4 py-0 text-black w-full">
                    { icon }
                    <span className="border-b border-solid border-stone-200 grow ml-4 normal-case py-6 tracking-wide text-left">
                        { label }
                    </span>
                </Button>
            </Link>
        </li>
    );
};

export default ListItem;