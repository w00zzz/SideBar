import { Box } from "@mui/material";
import Popover from "./SidebarCollapsedMenu/SidebarCollapsedMenu";
import TreeView from "./SidebarExpandedMenu/TreeView";
import { IPWARoutes } from "faster-router";

interface SidebarContentProps {
  isExpanded: boolean;
  routes: IPWARoutes;
}

const SidebarContent = ({ isExpanded, routes }: SidebarContentProps) => {
  // Contenido dinámico basado en `isExpanded`
  const content = isExpanded ? (
    <>
      <h1 style={{ textAlign: "center", margin: 0 }}>Expanded Content</h1>
      {/* Pasamos el objeto `data` al componente TreeView */}
      {/* <TreeView data={data} /> */}
      <TreeView />
    </>
  ) : (
    <>
      {/* Pasamos el objeto `data` al componente Popover */}
      {/* <Popover data={data} /> */}
      <Popover routes={routes} />
    </>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1, // Espaciado entre elementos
        overflowY: "auto",
        flex: 1,
        maxHeight: "calc(100vh - 64px)",
        "&::-webkit-scrollbar": {
          width: "1px", // Scrollbar minimalista
        },
        transition: "all 0.3s ease-in-out", // Animación suave
      }}
    >
      {content}
    </Box>
  );
};

export default SidebarContent;
