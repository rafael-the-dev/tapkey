import Link from "next/link";
import { Typography } from "@mui/material";

const LinkContainer = ({ className, children, href, ...rest }) => (
    <Link 
        href={href}
        passHref>
        <Typography 
            className={className} 
            component="a"
            { ...rest }>
            { children }
        </Typography>
    </Link>
);

export default LinkContainer;