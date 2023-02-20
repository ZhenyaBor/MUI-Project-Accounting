import { Box, Link, SxProps } from "@mui/material";

type Props = SxProps & {
  srcIcon: string;
  href: string;
};

export const Social = ({ srcIcon, href }: Props): JSX.Element => (
  <Link target="_blank" href={href} sx={{ textDecoration: "none" }}>
    <Box component="img" src={srcIcon} sx={{ width: "30px", height: "30px" }} />
  </Link>
);
