import { Box } from "@mui/material";
import Popover from "../Popover";
import TreeView from "../TreeView";

// Definimos la interfaz para las props del componente
// interface SidebarContentProps {
//   isExpanded: boolean; // Controla si el sidebar está expandido o colapsado
//   data: Record<string, any>; // Objeto genérico que se pasará a los componentes hijos
// }

// const SidebarContent = ({ isExpanded, data }: SidebarContentProps) => {
const SidebarContent = ({ isExpanded }: { isExpanded: boolean }) => {
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
      <Popover />
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
