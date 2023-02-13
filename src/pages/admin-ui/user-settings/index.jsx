import { Typography } from "@mui/material"

import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

import ListItem from "src/components/shared/list-item"

const Container = () => {

    return (
        <main className="h-full">
            <section>
                <div className="bg-cyan-600 py-4 px-6 text-white">
                    <Typography
                        component="h1"
                        className="text-lg xl:text-xl">
                        User settings
                    </Typography>
                </div>
                <ul>
                    <ListItem href="/admin-ui/support-settings" icon={<HelpIcon />} label="Support settings" />
                    <ListItem href="/" icon={<LogoutIcon />} label="Sign out" />
                </ul>
            </section>
        </main>
    );
};

export default Container;