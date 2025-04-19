import { FC, useState, MouseEvent } from "react";
import {
  Box,
  ListItemButton,
  ListSubheader,
  Divider,
  Popover,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SubMenuProps } from "@/interfaces/components/Sidebar/Sidebar.types";

const SubMenu: FC<SubMenuProps> = ({
  routes,
  onItemClick,
  onClose,
  parentTitle,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeSubPath, setActiveSubPath] = useState<string | null>(null);

  const handleSubMenuOpen = (event: MouseEvent<HTMLElement>, key: string) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setActiveSubPath(key);
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
    setActiveSubPath(null);
  };

  return (
    <Box sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}>
      {parentTitle && (
        <>
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
            {parentTitle}
          </ListSubheader>
          <Divider sx={{ my: 0.5 }} />
        </>
      )}
      {Object.entries(routes).map(
        ([key, route]: [string, any]) =>
          route.title && (
            <Box key={key} sx={{ position: "relative" }}>
              <ListItemButton
                onClick={(e) => {
                  if (route.subPath) {
                    handleSubMenuOpen(e, key);
                  } else {
                    onItemClick();
                    onClose();
                  }
                }}
                sx={{
                  width: "auto",
                  minWidth: "120px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 16px",
                  margin: 0,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                  color: "#637381",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <span>{route.title}</span>
                {route.subPath && (
                  <ChevronRightIcon
                    sx={{
                      fontSize: 16,
                      opacity: 0.7,
                      ml: 1,
                    }}
                  />
                )}
              </ListItemButton>

              {route.subPath && activeSubPath === key && (
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleSubMenuClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{
                    ".MuiPopover-paper": {
                      borderRadius: "8px",
                      marginLeft: "8px",
                    },
                  }}
                >
                  <SubMenu
                    routes={route.subPath}
                    onItemClick={onItemClick}
                    onClose={onClose}
                    parentTitle={route.title}
                  />
                </Popover>
              )}
            </Box>
          )
      )}
    </Box>
  );
};

export default SubMenu;
