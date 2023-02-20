import { useState } from "react";

type Return = {
  isShowImage: boolean;
  isShowBadge: boolean;
  handleShowImage: () => void;
  handleCloseImage: () => void;
  handleShowBadge: () => void;
  handleCloseBadge: () => void;
};

export const useDialog = (): Return => {
  const [isShowImage, setShowImage] = useState(false);
  const [isShowBadge, setShowBadge] = useState(true);

  return {
    isShowImage,
    isShowBadge,
    handleShowImage: () => setShowImage(true),
    handleCloseImage: () => setShowImage(false),
    handleShowBadge: () => setShowBadge(false),
    handleCloseBadge: () => setShowBadge(true),
  };
};
