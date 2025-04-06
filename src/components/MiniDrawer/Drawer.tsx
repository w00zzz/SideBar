import { useState } from "react";
import { Drawer as MuiDrawer, Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import TreeView from "../TreeView/TreeView";
import { IPWARoutes } from "faster-router";


interface DrawerProps{
    routes: IPWARoutes;
}


const Drawer: React.FC<DrawerProps> = ({routes}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const drawerWidth = isExpanded ? 380 : 88;

  return (
    <Box sx={{ display: "flex" }}>
      <MuiDrawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            overflowX: "hidden",
            backgroundColor: "#fff",
            transition: "width 0.3s ease-in-out",
            borderRight: "1px solid rgba(145, 158, 171, 0.2)",
          },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: isExpanded ? "space-between" : "center",
            padding: isExpanded ? "0 24px" : "0",
            borderBottom: "1px solid rgba(145, 158, 171, 0.2)",
          }}
        >
          <Box
            component="img"
            src="/path-to-your-logo.png"
            sx={{
              height: "32px",
              display: isExpanded ? "block" : "none"
            }}
          />
        </Box>
        <Box sx={{ overflow: "hidden", flex: 1 }}>
          <TreeView routes={routes} isCollapsed={!isExpanded} />
        </Box>
        <IconButton
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{
            position: "fixed",
            top: "20px",
            left: isExpanded ? "368px" : "75px",
            width: "24px",
            height: "24px",
            padding: 0,
            minWidth: "24px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            border: "1px solid rgba(145, 158, 171, 0.3)",
            borderRadius: "50%",
            transition: "left 0.3s ease-in-out",
            zIndex: 1300,
            "&:hover": {
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
            }
          }}
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </MuiDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h2>Main Content Area</h2>
      </Box>
    </Box>
  );
};

export default Drawer;
