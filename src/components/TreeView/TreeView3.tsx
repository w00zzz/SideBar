import { IPWARoutes } from "faster-router";
import "./style.css";
import {
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

const TreeView3: React.FC<TreeViewProps3> = ({
  routes,
  parent = "",
  level = 0,
}) => {
  const { open, handleClick } = useTreeViewLogic();
  const hasParent = !!parent;
  const navigate = useNavigate();
  return (
    <Stack component="nav" sx={{ color: "text.secondary", padding: 0 }}>
      <ul
        className="treeUl"
        style={{
          position: "relative",
          borderLeft: hasParent ? "2px solid red" : "none",
          marginLeft: hasParent ? 16 : 0,
          paddingLeft: hasParent ? 16 : 0,
        }}
      >
        {Object.values(routes)
          .filter(({ title }) => title)
          .map((item, index) => {
            const { subPath, path, title, icon: Icon } = item;
            const fullPath = `${parent}${item.path}`;
            console.log(fullPath);
            if (hasParent) {
              console.log(title, hasParent, fullPath, level);
            }

            return (
              <Fragment key={path}>
                {!subPath ? (
                  <>
                    <li
                      key={path || index}
                      className="treeLi"
                      style={{ position: "relative" }}
                    >
                      {hasParent && (
                        <div
                          style={{
                            position: "absolute",
                            left: -16,
                            top: "50%",
                            width: 16,
                            height: 2,
                            backgroundColor: "red",
                            transform: "translateY(-50%)",
                          }}
                        />
                      )}
                      <ListItemButton
                        onClick={() => navigate(fullPath)}
                        sx={{ pl: hasParent && !(level > 0) ? 4 : 2 }}
                      >
                        {Icon && (
                          <ListItemIcon>
                            <Icon />
                          </ListItemIcon>
                        )}
                        <ListItemText primary={title} />
                      </ListItemButton>
                    </li>
                  </>
                ) : (
                  <>
                    <li key={path || index} style={{ position: "relative" }}>
                      <ListItemButton
                        onClick={() => handleClick(title as string)}
                        sx={{}}
                      >
                        {Icon && (
                          <ListItemIcon>
                            <Icon />
                          </ListItemIcon>
                        )}
                        <ListItemText primary={title} />
                        {open[title as never] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>

                      <Collapse
                        in={open[title as never]}
                        timeout="auto"
                        unmountOnExit
                        sx={{ px: 2, paddingRight: 0 }}
                      >
                        <TreeView3
                          routes={subPath}
                          parent={`${parent}${path}/`}
                          level={level + 1}
                        />
                      </Collapse>
                    </li>
                  </>
                )}
              </Fragment>
            );
          })}
      </ul>
    </Stack>
  );
};

export default TreeView3;
