import { Button, Typography } from "@mui/material"

import Link from "src/components/shared/link"

const Container = () => {


    return (
        <div className="bg-cyan-600 flex flex-col h-full items-stretch px-8 py-6 w-full">
            <main>
                <Typography
                    component="h1"
                    className="font-medium text-lg text-white xl:text-xl">
                    About Tapkey
                </Typography>
            </main>
            <footer className="flex flex-col grow items-center justify-between pt-20">
                <Typography
                    component="h2"
                    className="font-bold text-xl text-white xl:text-6xl">
                    tapkey
                </Typography>
                <div className="flex flex-col items-center text-white">
                    <Typography className="mb-2">
                        &copy; 2022 Tapkey GmbH
                    </Typography>
                    <Typography className="mb-2">
                        Support ID: T493WWH4
                    </Typography>
                    <Typography className="mb-2">
                        Version 2.32.2.0
                    </Typography>
                    <Link href="/">
                        <Button 
                            className="border-white text-white hover:border-white hover:bg-white hover:text-black"
                            variant="outlined">
                            Need help?
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center text-white">
                    <Link className="text-white" href="/">Terms and conditions</Link>
                    <Link className="my-3 text-white" href="/">Privacy policy</Link>
                    <Link className="text-white" href="/">Open source licences</Link>
                </div>
            </footer>
        </div>
    );
};

export default Container;