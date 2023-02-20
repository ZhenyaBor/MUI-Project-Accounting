import { ReactNode } from "react";
import MenuMui, { MenuProps } from "@mui/material/Menu";

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Menu = ({ children, open, onClose, ...props }: Props | MenuProps): JSX.Element => (
  <MenuMui open={open} onClose={onClose} {...props}>
    {children}
  </MenuMui>
);
