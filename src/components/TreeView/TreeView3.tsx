import { IPWARoutes } from "faster-router";
import "./style.css";
import {
  Box,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { useTreeViewLogic } from "@/hooks/TreeView/TreeView.logic";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface TreeViewProps3 {
  routes: IPWARoutes;
  parent?: string;
  level?: number;
}

const TreeView3: React.FC<TreeViewProps3> = ({ routes, parent = "", level = 0 }) => {
  const { open, handleClick } = useTreeViewLogic();
  const navigate = useNavigate();
  const hasParent = Boolean(parent);

  return (
    <Stack component="nav" sx={{ color: "text.secondary", padding: 0 }}>
      <ul className="treeUl" style={{ position: "relative" }}>
        {Object.values(routes)
          .filter(({ title }) => title)
          .map(({ subPath, path, title, icon: Icon }, index, array) => {
            const fullPath = `${parent}${path}`;
            const last = index === array.length - 1;
            const first = index === 0;

            console.log(fullPath);
            if (hasParent) console.log(title, hasParent, fullPath, level);

            return (
              <Fragment key={path}>
                <li className="treeLi" style={{ position: "relative" }}>
                  <ListItemButton
                    onClick={() => (subPath ? handleClick(title as string) : navigate(fullPath))}
                    sx={{ ml: hasParent && level === 0 ? 4 : 2 }}
                  >
                    {hasParent && (
                      <Box
                        sx={{
                          borderLeft: "2px solid green",
                          borderRadius: last ? "0 0 0 50%" : "none",
                          borderBottom: "2px solid green",
                          width: "10px",
                          height: first ? "50%" : "100%",
                          transform: "translate(-160%, -50%)",
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
                    {subPath && (open[title as never] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                  {subPath && (
                    <Collapse in={open[title as never]} timeout="auto" unmountOnExit sx={{ px: 2, paddingRight: 0 }}>
                      <TreeView3 routes={subPath} parent={`${parent}${path}/`} level={level + 1} />
                    </Collapse>
                  )}
                </li>
              </Fragment>
            );
          })}
      </ul>
    </Stack>
  );
};

export default TreeView3;
