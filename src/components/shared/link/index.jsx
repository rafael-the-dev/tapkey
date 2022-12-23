import Link from "next/link";
import { Typography } from "@mui/material";

const LinkContainer = ({ className, children, href, onClick }) => (
<<<<<<< HEAD
    <Link href={href}
            className={className} 
            onClick={onClick}>
            { children }
    </Link>
=======
    <Typography 
        className={className} 
        component={Link}
        onClick={onClick}>
        { children }
    </Typography>
>>>>>>> e58b77b (update link component)
);

export default LinkContainer;