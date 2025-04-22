import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarToggle from "./SidebarToggle";
import SidebarContent from "./SidebarContent";
import { IPWARoutes } from "faster-router";

interface SidebarProps {
  routes: IPWARoutes;
  title?: string;
  logoPath?: string;

}


const calcDrawerWidth = (routes: IPWARoutes) => {

  let titleLength: number = 0;
  
  Object.entries(routes)
    .filter(([, { title }]) => title)
    .map(([key, { title }]) => {
      const tempTitleLength: number = title?.length ?? 0;
      titleLength = (tempTitleLength > titleLength) ? tempTitleLength : titleLength;
    });

  return titleLength;
}



const SideBar = ({routes, title, logoPath}: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(calcDrawerWidth(routes));
  const drawerWidth = isExpanded ? 500 : 87;

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
            borderRight: "1px solid rgba(145, 158, 171, 0.2)",
          },
          position: "relative",
        }}
      >
        <SidebarHeader isExpanded={isExpanded} logoPath={logoPath} />
        <SidebarContent isExpanded={isExpanded} routes={routes} title={title}/>
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
