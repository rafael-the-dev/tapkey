import Button from "@mui/material/Button";
import classNames from "classnames"
import { useRouter } from "next/router"

import Link from "src/components/shared/link"

const ListItem = ({ href, icon, label }) => {
    const { pathname } = useRouter();

    return (
        <li className="">
            <Link href={href}>
                <Button
                    className={classNames("capitalize justify-start px-4 py-3 w-full",
                    pathname === href ? "bg-cyan-300 text-cyan-600" : "text-black")}
                    startIcon={icon}>
                    { label }
                </Button>
            </Link>
        </li>
    );
};

export default ListItem;

/**<div className="flex items-center py-2 px-3">
                    { icon }
                    <span className="ml-3">{ label }</span>
                </div> */