import {
  Box,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useTreeViewLogic } from "@/hooks/TreeView/TreeView.logic";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import TreeViewProps from "@/interfaces/components/TreeView/TreeView.types";

const TreeView: React.FC<TreeViewProps> = ({ routes, parent = "", level = 0, isCollapsed = false }) => {
  const { open, handleClick } = useTreeViewLogic();
  const navigate = useNavigate();
  const hasParent = Boolean(parent);
  const marginLeft = hasParent && level === 0 ? 4 : 2;

  return (
    <Stack component="nav" sx={{ color: "text.secondary", p: 2, pr: 0 }}>
      <ul style={{ position: "relative", listStyle: "none", margin: 0, padding: 0 }}>
        {Object.values(routes)
          .filter(({ title }) => title)
          .map(({ subPath, path, title, icon: Icon }, index, array) => {
            const fullPath = `${parent}${path}`;
            const last = index === array.length - 1;
            const isOpen = open[title as never];

            const handleItemClick = () => {
              subPath ? handleClick(title as never) : navigate(fullPath);
            };

            return (
              <li key={path} style={{ position: "relative" }}>
                {level > 0 && !last && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: `${marginLeft * 6}px`,
                      top: 0,
                      bottom: 0,
                      borderLeft: "2px solid  gray",
                      zIndex: 0
                    }}
                  />
                )}
                <ListItemButton 
                  onClick={handleItemClick} 
                  sx={{ 
                    ml: marginLeft, 
                    position: "relative", 
                    zIndex: 1,
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    mb: 0.5,
                    py: 0.5,
                    "&:hover": {
                      backgroundColor: "#f8f9fa"
                    },
                  }}>
                  {hasParent && (
                    <Box // Box curvo
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
                  {Icon && (
                    <ListItemIcon sx={{minWidth: "35px"}}>
                      <Icon />
                    </ListItemIcon>
                  )}
                  {!isCollapsed && <ListItemText 
                    primary={title} 
                    sx={{ 
                      m: 0,
                      "& .MuiTypography-root": {
                        fontSize: "0.875rem",
                        color: "#637381",
                        fontWeight: 500
                      }
                    }} 
                  />}
                  {subPath && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {subPath && (
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
                          backgroundColor: "#f8f9fa"
                        }
                      }
                    }}
                  >
                    <TreeView routes={subPath} parent={`${fullPath}/`} level={level + 1} isCollapsed={isCollapsed} />
                  </Collapse>
                )}
              </li>
            );
          })}
      </ul>
    </Stack>
  );
};

export default TreeView;
