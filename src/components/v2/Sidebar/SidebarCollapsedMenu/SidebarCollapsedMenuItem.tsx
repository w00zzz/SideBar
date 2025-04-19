import { useState, MouseEvent, useRef } from "react";
import {
  Box,
  ListItemButton,
  Tooltip,
  Popover,
  ListSubheader,
  Divider,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { PopoverItemProps } from "@/interfaces/components/Sidebar/Sidebar.types";
import SubMenu from "./SubMenu";

const SidebarCollapsedMenuItem = ({
  handleClick,
  icon: Icon,
  routes,
  title,
}: PopoverItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (routes?.subPath) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    // For the main menu item, we use a slightly longer delay
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 50); // Small delay to prevent menu from closing immediately when moving to submenu
  };

  const open = Boolean(anchorEl);

  const listItemButtonProps = {
    onClick: handlePopoverOpen,
    onMouseEnter: handlePopoverOpen,
    onMouseLeave: handlePopoverClose,
    sx: {
      width: 65,
      height: 65,
      minWidth: 65,
      minHeight: 65,
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      margin: 0,
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        transform: "scale(1)",
      },
      position: "relative",
    },
  };

  const listItemContent = (
    <>
      <Icon
        sx={{
          fontSize: 23,
          color: "#637381",
        }}
      />
      {routes?.subPath && (
        <ChevronRightIcon
          sx={{
            position: "absolute",
            right: -8,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 16,
            color: "#637381",
            opacity: 0.7,
          }}
        />
      )}
    </>
  );

  return (
    <Box sx={{ padding: 0 }}>
      {routes?.subPath ? (
        <ListItemButton {...listItemButtonProps}>
          {listItemContent}
        </ListItemButton>
      ) : (
        <Tooltip title={title || ""} placement="right">
          <ListItemButton {...listItemButtonProps}>
            {listItemContent}
          </ListItemButton>
        </Tooltip>
      )}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        onMouseEnter={() => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }}
        onMouseLeave={handlePopoverClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        sx={{
          ".MuiPopover-paper": {
            borderRadius: "8px",
            marginLeft: "8px",
          },
        }}
      >
        {routes?.subPath && (
          <Box sx={{ width: "100%" }}>
            <ListSubheader
              sx={{
                backgroundColor: "transparent",
                color: "#9DA4AE",
                fontWeight: 500,
                fontSize: "14px",
                padding: "8px 16px",
                lineHeight: "24px",
                userSelect: "none",
              }}
            >
              {title || ""}
            </ListSubheader>

            <Divider sx={{ my: 0.5 }} />

            <SubMenu
              routes={routes.subPath}
              onItemClick={handleClick}
              onClose={handlePopoverClose}
              level={0}
            />
          </Box>
        )}
      </Popover>
    </Box>
  );
};

export default SidebarCollapsedMenuItem;
