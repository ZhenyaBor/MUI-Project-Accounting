import { styled, Box, BoxProps } from "@mui/material";

export const CardBadge = styled(Box)<BoxProps>(() => ({
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
