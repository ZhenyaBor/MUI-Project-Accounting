import { Typography, Badge } from "@mui/material";
import { palette } from "theme";

type Props = {
  name: string;
};

export const BadgeInfo = ({ name }: Props): JSX.Element => (
  <Badge
    sx={{
      height: "28px",
      padding: "0 12px",
      alignItems: "center",
      border: `1px solid ${palette.grey[200]}`,
      borderRadius: "8px",
    }}>
    <Typography variant="subtitle3" color={palette.grey[600]}>
      {name}
    </Typography>
  </Badge>
);
