import { Typography, Link } from '@mui/material';

const COPYRIGHT_TEXT = "Copyright © ";
const WEBSITE_TEXT = "hugofqueiros.com";

type CopyrightProps = {
    sx: { pt: number; };
}

export const Copyright = (props: CopyrightProps) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {COPYRIGHT_TEXT}
            <Link color="inherit" href={WEBSITE_TEXT}>
                {WEBSITE_TEXT}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}