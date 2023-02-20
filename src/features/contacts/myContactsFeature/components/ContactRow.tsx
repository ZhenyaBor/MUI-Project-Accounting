import { Divider, Typography, Stack, Link } from "@mui/material";
import { palette } from "theme";

type Props = {
  title: string;
  href: string;
  subTitle: string;
};

export const ContactRow = ({ title, href, subTitle }: Props): JSX.Element => (
  <>
    <Stack
      direction="row"
      spacing={{ sm: 3 }}
      alignItems="flex-start"
      sx={{ width: "max-content", flexDirection: { xs: "column", sm: "row" } }}>
      <Typography variant="h5" color={palette.grey[600]} sx={{ my: { xs: "10px", sm: "20px" } }}>
        {title}
      </Typography>
      <Link href={href} sx={{ textDecoration: "none" }}>
        <Typography variant="h5" color={palette.grey[600]} sx={{ my: { xs: "10px", sm: "20px" } }}>
          {subTitle}
        </Typography>
      </Link>
    </Stack>
    <Divider
      sx={{
        background: palette.grey[300],
      }}
    />
  </>
);
