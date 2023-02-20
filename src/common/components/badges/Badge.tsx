import { ReactNode } from "react";
import { Badge as BadgeMui, styled, BadgeProps } from "@mui/material";

const StyledBadge = styled(BadgeMui)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.error.light,
    color: "black",
    boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
  },
}));

interface Props {
  children: ReactNode;
}

export const Badge = ({ children, ...props }: Props | BadgeProps): JSX.Element => {
  return <StyledBadge {...props}>{children}</StyledBadge>;
};
