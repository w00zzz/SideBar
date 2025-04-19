import { FC, useState, MouseEvent } from 'react';
import { Box, ListItemButton, Tooltip, Popover, ListSubheader, Divider } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IPWARoutes } from 'faster-router';

interface SubMenuProps {
  routes: any;
  onItemClick: () => void;
  onClose: () => void;
}

const SubMenu: FC<SubMenuProps> = ({ routes, onItemClick, onClose }) => {
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
    <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
      {Object.entries(routes).map(([key, route]: [string, any]) => (
        route.title && (
          <Box key={key} sx={{ position: 'relative' }}>
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
                width: 'auto',
                minWidth: '120px',
                height: '40px',
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: '0 16px',
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
                    ml: 1
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
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  '.MuiPopover-paper': {
                    borderRadius: '8px',
                    marginLeft: '8px',
                  }
                }}
              >
                <SubMenu
                  routes={route.subPath}
                  onItemClick={onItemClick}
                  onClose={onClose}
                />
              </Popover>
            )}
          </Box>
        )
      ))}
    </Box>
  );
};

interface PopoverItemProps {
  handleClick: () => void;
  icon: FC<any>;
  routes?: IPWARoutes;
  title?: string;
}

const PopoverItem = ({ handleClick, icon: Icon, routes, title }: PopoverItemProps) => {
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

  // Common ListItemButton properties
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
      position: 'relative',
    }
  };

  // Common ListItemButton content
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
            position: 'absolute',
            right: -8,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 16,
            color: '#637381',
            opacity: 0.7,
          }}
        />
      )}
    </>
  );

  return (
    <Box sx={{ padding: 0 }}>
      {/* Only show tooltip for items without subPath */}
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
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        sx={{
          '.MuiPopover-paper': {
            borderRadius: '8px',
            marginLeft: '8px',
          }
        }}
      >
        {routes?.subPath && (
          <Box sx={{ width: '100%' }}>
            {/* Parent title header */}
            <ListSubheader
              sx={{
                backgroundColor: 'transparent',
                color: '#9DA4AE',  // Lighter gray to indicate non-clickable
                fontWeight: 500,
                fontSize: '14px',
                padding: '8px 16px',
                lineHeight: '24px',
                userSelect: 'none',
              }}
            >
              {title || ""}
            </ListSubheader>
            
            {/* Divider */}
            <Divider sx={{ my: 0.5 }} />
            
            {/* Submenu items */}
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

export default PopoverItem;