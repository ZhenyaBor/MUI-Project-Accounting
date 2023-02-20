import { useState } from "react";

type Return = {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

export const useOpenDrawer = (): Return => {
  const [open, setOpen] = useState(false);

  return {
    open,
    handleDrawerOpen: () => {
      setOpen(true);
    },
    handleDrawerClose: () => {
      setOpen(false);
    },
  };
};
