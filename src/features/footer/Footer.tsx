import { Stack, Typography, Link, Box } from "@mui/material";
import { palette } from "theme";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export const Footer = (): JSX.Element => (
  <Box sx={{ position: "relative", height: "98px" }}>
    <Box
      sx={{
        background: "no-repeat center/100% url(./static/istock.jpg)",
        position: "relative",
        height: "100%",
        filter: "blur(3px)",
      }}
    />

    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "100%",
        m: "auto",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
      }}>
      <Typography variant="h4" color={palette.grey[800]}>
        Бухгалтер і Я
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
        <Link
          href="https://instagram.com/buhgalter_fashion?igshid=YmMyMTA2M2Y="
          sx={{ color: palette.grey[800], "& :hover": { color: palette.primary.main } }}>
          <AiFillInstagram size={40} />
        </Link>
        <Link
          href="https://www.facebook.com/buhgalterfashion"
          sx={{ color: palette.grey[800], "& :hover": { color: "blue" } }}>
          <BsFacebook size={32} />
        </Link>
      </Stack>
    </Stack>
  </Box>
);
