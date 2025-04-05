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

const TreeView: React.FC<TreeViewProps> = ({ routes, parent = "", level = 0 }) => {
  const { open, handleClick } = useTreeViewLogic();
  const navigate = useNavigate();
  const hasParent = Boolean(parent);
  const marginLeft = hasParent && level === 0 ? 4 : 2;

  return (
    <Stack component="nav" sx={{ color: "text.secondary", p: 0 }}>
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
                <ListItemButton onClick={handleItemClick} sx={{  ml: marginLeft, borderLeft: level > 0 && !last ? "3px solid gray" : "none" }}>
                  {hasParent && (
                    <Box
                      sx={{
                        borderLeft: "3px solid gray",
                        borderBottomLeftRadius: "10px",
                        borderBottom: "3px solid gray",
                        width: "16px",
                        height: "50%",
                        transform: last ? "translate(-100%, -50%)" : "translate(-116%, -50%)",
                        position: "absolute",
                      }}
                    />
                  )}
                  {Icon && (
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={title} />
                  {subPath && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {subPath && (
                  <Collapse
                    in={isOpen}
                    timeout="auto"
                    unmountOnExit
                    sx={{ px: 1.3, pr: 0,  ml: marginLeft, borderLeft: level > 0 && !last ? "3px solid gray" : "none" }}
                  >
                    <TreeView routes={subPath} parent={`${fullPath}/`} level={level + 1} />
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
