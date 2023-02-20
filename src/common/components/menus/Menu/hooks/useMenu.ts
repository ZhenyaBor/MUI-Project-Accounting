import { useState, MouseEvent } from "react";

interface ReturnInterface {
  anchorEl: null | HTMLElement;
  isMenuOpen: boolean;
  handleClickMenu: (event: MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}

export const useMenu = (): ReturnInterface => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleClickMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    isMenuOpen,
    handleClickMenu,
    handleClose,
  };
};
