import { useState, MouseEvent } from "react";
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

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (routes?.subPath) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const listItemButtonProps = {
    onClick: handlePopoverOpen,
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
            />
          </Box>
        )}
      </Popover>
    </Box>
  );
};

export default SidebarCollapsedMenuItem;
