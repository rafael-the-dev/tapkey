import { Typography } from "@mui/material"
import classNames from "classnames";
import { useRouter } from "next/router"

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';

import classes from "./styles.module.css";

import Link from "src/components/shared/link";
import ListItem from "./components/list-item"

const Menu = () => {
    const { pathname } = useRouter();

    return (
        <aside className={classNames(classes.root, "border-r border-solid border-stone-200 h-full")}>
            <div className={classNames(classes.logoContainer, "bg-cyan-600 flex justify-end px-6 py-4")}>
                <Link 
                    className="font-semibold text-lg text-white text-right xl:text-3xl" 
                    href="/">
                    tapkey
                </Link>
            </div>
            <nav>
                <ul className="flex flex-col items-stretch py-3 w-full">
                    <ListItem href={`/admin-ui/help`} icon={<HelpIcon />} label="Help" />
                    <ListItem href={`/admin-ui/about`} icon={<InfoIcon />} label="About" />
                </ul>
            </nav>
            <ul className="border-t border-solid border-stone-200">
                <ListItem href={`/admin-ui/user-settings`} icon={<AccountBoxIcon />} label="User settings" />
            </ul>
        </aside>
    );
};

export default Menu;