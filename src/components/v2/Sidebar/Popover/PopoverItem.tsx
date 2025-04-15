import { FC, useState, MouseEvent } from 'react';
import { Box, ListItemButton, Tooltip, Popover } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IPWARoutes } from 'faster-router';

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

  return (
    <Box sx={{ padding: 0 }}>
      <Tooltip title={title || ""} placement="right">
        <ListItemButton
          onClick={handlePopoverOpen}
          sx={{
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
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            position: 'relative',
          }}
        >
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
        </ListItemButton>
      </Tooltip>

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
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginLeft: '8px',
          }
        }}
      >
        <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {routes?.subPath && Object.entries(routes.subPath).map(([key, subRoute]) => (
            subRoute.title && (
              <ListItemButton
                key={key}
                onClick={() => {
                  handleClick();
                  handlePopoverClose();
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
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  color: "#637381",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <span>{subRoute.title}</span>
                {subRoute.subPath && (
                  <ChevronRightIcon
                    sx={{
                      fontSize: 16,
                      opacity: 0.7,
                      ml: 1
                    }}
                  />
                )}
              </ListItemButton>
            )
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default PopoverItem;