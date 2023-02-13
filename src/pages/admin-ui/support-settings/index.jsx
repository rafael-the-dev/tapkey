import { IconButton, Switch, Typography } from "@mui/material"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Link from "src/components/shared/link"

const Container = () => {

    return (
        <div>
            <header className="bg-cyan-600 flex items-center py-4 px-6 text-white">
                <Link href="/admin-ui/user-settings">
                    <IconButton className="p-0 hover:bg-transparent">
                        <ArrowBackIcon className="text-white" />
                    </IconButton>
                </Link>
                <Typography
                    component="h1"
                    className="ml-4 md:text-lg xl:text-xl">
                    Do you need help?
                </Typography>
            </header>
            <main className="py-6">
                <div className="border-b border-solid border-stone-100 pb-6 px-6">
                    <div className="flex justify-between mb-3">
                        <Typography
                            component="h2"
                            className="font-semibold">
                            Collect additional data
                        </Typography>
                        <Switch />
                    </div>
                    <Typography
                        className="text-sm leading-6 opacity-80">
                        Allows us to collect usage data and error reports. This may include information which 
                        can be linked to your account. The information retrieved will be used only to 
                        investigate issues with the Tapkey app and for technical analysis.
                    </Typography>
                </div>
                <div className="pt-6 px-6">
                    <div className="flex justify-between mb-3">
                        <Typography
                            component="h2"
                            className="font-semibold">
                            Your support ID
                        </Typography>
                        <Typography>
                            111111
                        </Typography>
                    </div>
                    <Typography
                        className="text-sm leading-6 opacity-80">
                        Errors, events and detailed usage data is not linked to your user account. They 
                        can only be uniquely identified using this support ID. When you report a problem, we 
                        may ask you for this support ID in order to be able to analyse your issue.
                    </Typography>
                </div>
            </main>
        </div>
    );
};

export default Container;