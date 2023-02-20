import { Divider, Typography, Stack } from "@mui/material";
import { palette } from "theme";
import { ContactRow, Social } from "./components";

export const MyContactsFeature = (): JSX.Element => (
  <Stack direction="column" sx={{ maxWidth: "1000px", m: "0 auto", padding: 0 }}>
    <Typography variant="h3" color={palette.grey[800]} sx={{ my: "20px" }}>
      Контакти
    </Typography>
    <Divider sx={{ background: "black", width: "30%" }} />
    <ContactRow title="Наші Контакти:" href="tel:+380675815663" subTitle="+380675815663" />
    <ContactRow
      title="Электронная почта:"
      href="mailto:030279rkn@gmail.com"
      subTitle="030279rkn@gmail.com"
    />
    <Stack direction="row" spacing={3} alignItems="center">
      <Typography variant="h5" color={palette.grey[600]} sx={{ my: "20px" }}>
        Як нас знайти:
      </Typography>

      <Social
        srcIcon="./static/instagram.png"
        href="https://instagram.com/buhgalter_fashion?igshid=YmMyMTA2M2Y="
      />
      <Social srcIcon="./static/facebook.png" href="https://www.facebook.com/buhgalterfashion" />
    </Stack>
  </Stack>
);
