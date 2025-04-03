import { IPWARoutes } from "faster-router";
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

const TreeView3: React.FC<TreeViewProps3> = ({
  routes,
  parent = "",
  level = 0,
}) => {
  const { open, handleClick } = useTreeViewLogic();
  const navigate = useNavigate();
  const hasParent = Boolean(parent);

  return (
    <Stack component="nav" sx={{ color: "text.secondary", padding: 0 }}>
      <ul
        style={{
          position: "relative",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {Object.values(routes)
          .filter(({ title }) => title)
          .map(({ subPath, path, title, icon: Icon }, index, array) => {
            const fullPath = `${parent}${path}`;
            const last = index === array.length - 1;

            return (
              <Fragment key={path}>
                <li
                  style={{
                    position: "relative",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <ListItemButton
                    onClick={() =>
                      subPath
                        ? handleClick(title as string)
                        : navigate(fullPath)
                    }
                    sx={{
                      ml: hasParent && level === 0 ? 4 : 2,

                      borderLeft:
                        level > 0 && !last ? "3px solid currentColor" : "none",
                    }}
                  >
                    {hasParent && (
                      <Box
                        sx={{
                          borderLeft: "3px solid currentColor",
                          borderBottomLeftRadius: "10px",

                          borderBottom: "3px solid currentColor",
                          width: "16px",
                          height: "50%",

                          transform: last
                            ? "translate(-100%, -50%)"
                            : "translate(-116%, -50%)",
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
                    {subPath &&
                      (open[title as never] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                  {subPath && (
                    <Fragment>
                      <Collapse
                        in={open[title as never]}
                        timeout="auto"
                        unmountOnExit
                        sx={{
                          px: 1.3,
                          paddingRight: 0,
                          ml: hasParent && level === 0 ? 4 : 2,
                          borderLeft:
                            level > 0 && !last
                              ? "3px solid currentColor"
                              : "none",
                        }}
                      >
                        <TreeView3
                          routes={subPath}
                          parent={`${parent}${path}/`}
                          level={level + 1}
                        />
                      </Collapse>
                    </Fragment>
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
