import { Dialog as DialogMui } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  handleClose: () => void;
  open: boolean;
  width: number;
};

export const Dialog = ({ children, handleClose, open, width }: Props): JSX.Element => (
  <DialogMui
    sx={{ "& .MuiDialog-paper": { width: "100%", maxWidth: `${width}px` } }}
    open={open}
    onClose={handleClose}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description">
    {children}
  </DialogMui>
);
