import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarToggle from "./SidebarToggle";
import SidebarContent from "./SidebarContent";
import { IPWARoutes } from "faster-router";

interface SidebarProps {
  routes: IPWARoutes
}

const SideBar = ({routes}: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const drawerWidth = isExpanded ? 300 : 87;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer // Drawer con estilos principales
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            overflowX: "hidden",
            backgroundColor: "#fff",
            transition: "width 0.4s ease-in-out",
            borderRight: "1px solid rgba(145, 158, 171, 0.2)",
          },
          position: "relative",
        }}
      >
        <SidebarHeader isExpanded={isExpanded} />
        <SidebarContent isExpanded={isExpanded} routes={routes} />
        <SidebarToggle
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </Drawer>
      <Box
        component="main" // Contenido principal de la pagina.
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        Contenido de la Pagina
      </Box>
    </Box>
  );
};

export default SideBar;
