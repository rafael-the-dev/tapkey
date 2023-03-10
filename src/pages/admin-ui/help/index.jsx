import { Typography } from "@mui/material";

import MessageIcon from '@mui/icons-material/Message';
import HelpIcon from '@mui/icons-material/Help';

import ListItem from "src/components/shared/list-item"

const Container = () => {

    return (
        <div>
            <section>
                <div className="bg-cyan-600 py-4 px-6 text-white">
                    <Typography
                        component="h1"
                        className="text-lg xl:text-xl">
                        Do you need help?
                    </Typography>
                </div>
                <ul>
                    <ListItem href="/" icon={<HelpIcon />} label="Go to help center" />
                    <ListItem href="/" icon={<MessageIcon />} label="Contact us!" />
                </ul>
            </section>
        </div>
    );
};

export default Container;