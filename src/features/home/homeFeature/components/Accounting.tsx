import { Stack, Typography } from "@mui/material";
import { palette } from "theme";

export const Accounting = (): JSX.Element => (
  <Stack direction="column" sx={{ mt: 5 }}>
    <Typography
      color={palette.grey[600]}
      sx={{ typography: { md: "h2", sm: "h3", xs: "h4" }, mb: 5, alignSelf: "center" }}>
      Комплексне ведення бухгалтерського обліку нашими спеціалістами включає:
    </Typography>

    <Typography
      component="li"
      sx={{ typography: { md: "h4", sm: "h5", xs: "h6" }, mb: 5 }}
      color={palette.grey[600]}>
      Збирання первинної документації відображення господарських;
    </Typography>
    <Typography
      component="li"
      sx={{ typography: { md: "h4", sm: "h5", xs: "h6" }, mb: 5 }}
      color={palette.grey[600]}>
      Операцій за рахунками бухгалтерського та податкового обліку;
    </Typography>
    <Typography
      component="li"
      sx={{ typography: { md: "h4", sm: "h5", xs: "h6" }, mb: 5 }}
      color={palette.grey[600]}>
      Розрахунок податків;
    </Typography>

    <Typography
      color={palette.grey[600]}
      sx={{ typography: { md: "h2", sm: "h3", xs: "h4" }, mb: 5, alignSelf: "center" }}>
      Підготовка та складання фінансової та податкової звітності:
    </Typography>
    <Typography
      component="li"
      sx={{ typography: { md: "h4", sm: "h5", xs: "h6" }, mb: 5 }}
      color={palette.grey[600]}>
      Ведення кадрового обліку та нарахування заробітної плати;
    </Typography>
    <Typography
      component="li"
      sx={{ typography: { md: "h4", sm: "h5", xs: "h6" }, mb: 5 }}
      color={palette.grey[600]}>
      Ведення розрахункових рахунків у системі Клієнт - банк;
    </Typography>
    <Typography
      component="li"
      sx={{ typography: { md: "h4", sm: "h5", xs: "h6" }, mb: 5 }}
      color={palette.grey[600]}>
      Консультування з бухгалтерських та податкових питань;
    </Typography>
  </Stack>
);
