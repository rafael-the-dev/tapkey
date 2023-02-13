import { Hidden } from "@mui/material"

import DefaultMenu from "src/components/shared/admin-ui-menu"

const Menu = () => {

    return (
        <Hidden mdDown>
            <aside>
                <DefaultMenu />
            </aside>
        </Hidden>
    );
};

export default Menu;