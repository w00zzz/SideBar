import {
  Box,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTreeViewLogic } from "@/hooks/TreeView/TreeView.logic";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import TreeViewProps from "@/interfaces/components/TreeView/TreeView.types";
import React, { useState } from "react";

const TreeView: React.FC<TreeViewProps> = ({ routes, parent = "", level = 0, isCollapsed = false }) => {
  const { open, handleClick } = useTreeViewLogic();
  const navigate = useNavigate();
  const hasParent = Boolean(parent);
  const marginLeft = hasParent && level === 0 ? 4 : 2;

  // Estado para controlar el modo expandido/colapsado
  const [expandedMode] = useState(true);

  // Estados para los menús emergentes
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl(event.currentTarget);
    setHoveredItem(key);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setHoveredItem(null);
  };

  // Estilos reutilizables
  const listItemButtonStyles = (isOpen: boolean) => ({
    ml: marginLeft,
    position: "relative",
    zIndex: 1,
    backgroundColor: isOpen ? "#f0f4f8" : "#fff",
    borderRadius: "8px",
    mb: 0.5,
    py: 0.5,
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: isOpen ? "#e3eaf2" : "#f8f9fa",
    },
  });

  const listItemTextStyles = {
    m: 0,
    "& .MuiTypography-root": {
      fontSize: "0.875rem",
      color: "#637381",
      fontWeight: 500,
    },
  };

  return (
    <Stack component="nav" sx={{ color: "text.secondary", p: 2, pr: hasParent ? 0 : 2 }}>
      <ul style={{ position: "relative", listStyle: "none", margin: 0, padding: 0 }}>
        {Object.entries(routes)
          .filter(([, { title }]) => title)
          .map(([key, { subPath, path, title, icon: Icon }], index, array) => {
            const fullPath = `${parent}${path}`;
            const last = index === array.length - 1;
            const isOpen = open[title as keyof typeof open];

            const handleItemClick = () => {
              if (subPath) {
                handleClick(title as keyof typeof open);
              } else {
                navigate(fullPath);
              }
            };

            return (
              <li key={key} style={{ position: "relative" }}>
                {/* Línea vertical para niveles anidados */}
                {level > 0 && !last && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: `${marginLeft * 6}px`,
                      top: 0,
                      bottom: 0,
                      borderLeft: "2px solid gray",
                      zIndex: 0,
                    }}
                  />
                )}
                {/* Botón de lista */}
                <ListItemButton
                  onClick={handleItemClick}
                  sx={listItemButtonStyles(!!subPath && isOpen)}
                >
                  {/* Conector curvo */}
                  {hasParent && (
                    <Box
                      sx={{
                        borderLeft: "2px solid gray",
                        borderBottomLeftRadius: "10px",
                        borderBottom: "2px solid gray",
                        width: "16px",
                        height: "90%",
                        transform: last ? "translate(-125%, -50%)" : "translate(-124%, -50%)",
                        position: "absolute",
                      }}
                    />
                  )}
                  {/* Icono */}
                  {Icon && (
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <Icon />
                    </ListItemIcon>
                  )}
                  {/* Texto */}
                  {!isCollapsed && expandedMode && (
                    <ListItemText primary={title} sx={listItemTextStyles} />
                  )}
                  {/* Flecha de expansión */}
                  {subPath && expandedMode && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>

                {/* Subrutas */}
                {subPath && expandedMode && (
                  <Collapse
                    in={isOpen}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                      p: 0,
                      ml: marginLeft,
                      position: "relative",
                      "& .MuiListItemButton-root": {
                        backgroundColor: "transparent",
                        py: 0.5,
                        "&:hover": {
                          backgroundColor: "#f8f9fa",
                        },
                      },
                    }}
                  >
                    <TreeView
                      routes={subPath}
                      parent={`${fullPath}/`}
                      level={level + 1}
                      isCollapsed={isCollapsed}
                    />
                  </Collapse>
                )}

                {/* Menú emergente en modo colapsado */}
                {subPath && !expandedMode && (
                  <>
                    <ListItemButton
                      onMouseEnter={(e) => handleMenuOpen(e, key)}
                      onMouseLeave={handleMenuClose}
                    >
                      {Icon && (
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                          <Icon />
                        </ListItemIcon>
                      )}
                    </ListItemButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && hoveredItem === key}
                      onClose={handleMenuClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {Object.entries(subPath).map(([subKey, { path: subPath, title }]) => (
                        <MenuItem
                          key={subKey}
                          onClick={() => {
                            navigate(`${fullPath}/${subPath}`);
                            handleMenuClose();
                          }}
                          onMouseEnter={(e) => handleMenuOpen(e, subKey)}
                        >
                          {title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </Stack>
  );
};

export default React.memo(TreeView);