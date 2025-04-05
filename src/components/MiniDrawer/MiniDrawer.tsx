import React, { useCallback } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Backdrop,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MiniDrawerProps } from "@/interfaces/components/MiniDrawer/MiniDrawer.types";
import TreeView from "@/components/TreeView/TreeView"; // Importamos el TreeView

const MiniDrawer: React.FC<MiniDrawerProps> = ({
  open,
  onOpen,
  onClose,
  routes,
  logo,
  variant = "permanent",
  width = 320,
  collapsedWidth = 88,
  sx,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const currentVariant = isMobile ? "temporary" : variant;
  const currentWidth = open ? width : collapsedWidth;

  const handleLogoClick = useCallback(() => {
    if (logo.onClick) {
      logo.onClick();
    } else {
      // Toggling the drawer state on click
      if (open) {
        onClose();
      } else {
        onOpen();
      }
    }
  }, [open, onOpen, onClose, logo.onClick]);

  return (
    <>
      <Drawer
        variant={currentVariant}
        open={currentVariant === "temporary" ? open : true}
        onClose={onClose}
        sx={{
          width: currentWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: currentWidth,
            transition: theme.transitions.create(["width", "margin"], {
              duration: 200,
            }),
            ...sx,
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              height: "64px",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
            }}
            onClick={handleLogoClick}
          >
            {open ? logo.full : logo.icon}
          </Box>
          {!isMobile && variant === "permanent" && open && (
            <IconButton
              onClick={onClose}
              sx={{ position: "absolute", top: 16, right: 16 }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
          <TreeView routes={routes} />
        </Box>
      </Drawer>
      {currentVariant === "temporary" && (
        <Backdrop
          open={open}
          onClick={onClose}
          sx={{
            zIndex: theme.zIndex.drawer - 1,
            backgroundColor: "rgb(255, 255, 255)",
          }}
        />
      )}
    </>
  );
};

export default MiniDrawer;
